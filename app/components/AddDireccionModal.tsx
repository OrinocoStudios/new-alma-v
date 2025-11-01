'use client';

import { useState, useEffect } from 'react';

interface AddDireccionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  socioId: number;
}

interface TipoVia {
  id: number;
  tipo_via: string;
}

interface CpInfo {
  provincia: string;
  ciudad: string;
  cp: string;
}

export default function AddDireccionModal({ isOpen, onClose, onSuccess, socioId }: AddDireccionModalProps) {
  const [formData, setFormData] = useState({
    id_tipo_via: '',
    nombre_via: '',
    numero: '',
    portal: '',
    piso: '',
    apartamento: '',
    pueblo: '1',
    nombre_pueblo: '',
    codigo_postal: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tiposVia, setTiposVia] = useState<TipoVia[]>([]);
  const [cpInfo, setCpInfo] = useState<CpInfo | null>(null);
  const [cpError, setCpError] = useState<string | null>(null);
  const [validatingCp, setValidatingCp] = useState(false);
  const [showTipoViaSuggestions, setShowTipoViaSuggestions] = useState(false);
  const [tipoViaInput, setTipoViaInput] = useState('');
  const [showUbicacionSuggestions, setShowUbicacionSuggestions] = useState(false);
  const [ubicacionInput, setUbicacionInput] = useState('Sector');

  // Cargar tipos de vía al abrir el modal
  useEffect(() => {
    if (isOpen) {
      fetch('/api/filters?type=tipos_via')
        .then((res) => res.json())
        .then((data) => setTiposVia(data))
        .catch(() => setError('Error cargando tipos de vía'));
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTipoViaInput = (value: string) => {
    setTipoViaInput(value);
    setShowTipoViaSuggestions(value.length > 0);
    
    // Si el usuario escribe exactamente un tipo de vía existente, guardarlo
    const tipoExacto = tiposVia.find(t => t.tipo_via.toLowerCase() === value.toLowerCase());
    if (tipoExacto) {
      setFormData((prev) => ({ ...prev, id_tipo_via: tipoExacto.id.toString() }));
    } else {
      setFormData((prev) => ({ ...prev, id_tipo_via: '' }));
    }
  };

  const selectTipoVia = (tipo: TipoVia) => {
    setTipoViaInput(tipo.tipo_via);
    setFormData((prev) => ({ ...prev, id_tipo_via: tipo.id.toString() }));
    setShowTipoViaSuggestions(false);
  };

  const filteredTiposVia = tiposVia.filter((tipo) =>
    tipo.tipo_via.toLowerCase().includes(tipoViaInput.toLowerCase())
  );

  // Opciones de tipo de ubicación
  const tiposUbicacion = [
    { value: '1', label: 'Sector' },
    { value: '1', label: 'Barrio' },
    { value: '2', label: 'Organización' },
    { value: '2', label: 'Edificio' },
    { value: '3', label: 'Ciudad' },
    { value: '3', label: 'Pueblo' },
  ];

  const handleUbicacionInput = (value: string) => {
    setUbicacionInput(value);
    setShowUbicacionSuggestions(value.length > 0);
    
    // Si el usuario escribe exactamente una opción existente, guardarla
    const ubicacionExacta = tiposUbicacion.find(u => u.label.toLowerCase() === value.toLowerCase());
    if (ubicacionExacta) {
      setFormData((prev) => ({ ...prev, pueblo: ubicacionExacta.value }));
    } else {
      // Si no hay coincidencia exacta, limpiar
      setFormData((prev) => ({ ...prev, pueblo: '' }));
    }
  };

  const selectUbicacion = (ubicacion: { value: string; label: string }) => {
    setUbicacionInput(ubicacion.label);
    setFormData((prev) => ({ ...prev, pueblo: ubicacion.value }));
    setShowUbicacionSuggestions(false);
  };

  const filteredTiposUbicacion = tiposUbicacion.filter((tipo) =>
    tipo.label.toLowerCase().includes(ubicacionInput.toLowerCase())
  );

  const validateCodigoPostal = async (cp: string) => {
    // Validar formato: debe ser 5 dígitos iniciando con 26
    if (!/^26\d{3}$/.test(cp)) {
      setCpError('El código postal debe iniciar con 26 y tener 5 dígitos (La Rioja)');
      setCpInfo(null);
      return;
    }

    setCpError(null);
    setValidatingCp(true);

    try {
      const response = await fetch(`/api/filters?type=codigo_postal&cp=${cp}`);
      
      if (!response.ok) {
        setCpError('Código postal no encontrado en La Rioja');
        setCpInfo(null);
        setValidatingCp(false);
        return;
      }

      const data = await response.json();
      
      // La API devuelve un array, tomamos el primer elemento
      if (Array.isArray(data) && data.length > 0) {
        setCpInfo(data[0]);
        setCpError(null);
      } else {
        setCpError('Código postal no encontrado en La Rioja');
        setCpInfo(null);
      }
    } catch {
      setCpError('Error validando código postal');
      setCpInfo(null);
    } finally {
      setValidatingCp(false);
    }
  };

  const handleCodigoPostalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    
    // Solo permitir números y max 5 dígitos
    const cleanValue = value.replace(/\D/g, '').slice(0, 5);
    
    setFormData((prev) => ({ ...prev, codigo_postal: cleanValue }));
    
    // Limpiar información previa
    setCpInfo(null);
    setCpError(null);
  };

  const handleCodigoPostalBlur = () => {
    if (formData.codigo_postal.length === 5) {
      validateCodigoPostal(formData.codigo_postal);
    } else if (formData.codigo_postal.length > 0) {
      setCpError('El código postal debe tener 5 dígitos');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Validar campos requeridos
    if (!formData.id_tipo_via || !formData.nombre_via || !formData.pueblo || !formData.nombre_pueblo || !formData.codigo_postal) {
      setError('Por favor complete todos los campos requeridos (*)');
      setLoading(false);
      return;
    }

    // Validar que el CP haya sido validado exitosamente
    if (!cpInfo) {
      setError('Debe validar el código postal antes de guardar');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/direcciones', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id_socio: socioId,
          ...formData,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || data.details?.fieldErrors?.[Object.keys(data.details?.fieldErrors || {})[0]]?.[0] || 'Error al guardar dirección');
      }

      // Limpiar formulario y cerrar
      setFormData({
        id_tipo_via: '',
        nombre_via: '',
        numero: '',
        portal: '',
        piso: '',
        apartamento: '',
        pueblo: '1',
        nombre_pueblo: '',
        codigo_postal: '',
      });
      setTipoViaInput('');
      setUbicacionInput('Sector');
      setCpInfo(null);
      setCpError(null);
      onSuccess();
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-purple-50 to-pink-50 border-b-2 border-purple-100 px-6 py-5">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-purple-900">Agregar Dirección</h2>
              <p className="text-sm text-purple-600 mt-1">Completa el formulario para agregar una nueva dirección</p>
            </div>
            <button
              onClick={onClose}
              className="text-purple-400 hover:text-purple-600 hover:bg-purple-100 p-2 rounded-lg text-xl transition-all"
              disabled={loading}
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6 bg-gray-50/30">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {/* Tipo de Vía y Nombre */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de Vía <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={tipoViaInput}
                onChange={(e) => handleTipoViaInput(e.target.value)}
                onFocus={() => setShowTipoViaSuggestions(tipoViaInput.length > 0)}
                placeholder="Ej: Calle, Avenida..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black font-medium"
                disabled={loading}
                required
              />
              {showTipoViaSuggestions && filteredTiposVia.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {filteredTiposVia.map((tipo) => (
                    <button
                      key={tipo.id}
                      type="button"
                      onClick={() => selectTipoVia(tipo)}
                      className="w-full px-3 py-2 text-left hover:bg-purple-50 text-black font-medium border-b border-gray-100 last:border-b-0"
                    >
                      {tipo.tipo_via}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre de Vía <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="nombre_via"
                value={formData.nombre_via}
                onChange={handleChange}
                placeholder="Ej: Gran Vía"
                maxLength={255}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black font-medium"
                disabled={loading}
                required
              />
            </div>
          </div>

          {/* Número, Portal, Piso, Apartamento */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Número <span className="text-gray-400 text-xs">(opcional)</span>
              </label>
              <input
                type="text"
                name="numero"
                value={formData.numero}
                onChange={handleChange}
                placeholder="Ej: 123"
                maxLength={10}
                style={{ color: '#000', backgroundColor: '#f3f4f6' }}
                className="w-full px-3 py-2 border-2 border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-semibold"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Portal <span className="text-gray-400 text-xs">(opcional)</span>
              </label>
              <input
                type="text"
                name="portal"
                value={formData.portal}
                onChange={handleChange}
                placeholder="Ej: A"
                maxLength={5}
                style={{ color: '#000', backgroundColor: '#f3f4f6' }}
                className="w-full px-3 py-2 border-2 border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-semibold"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Piso <span className="text-gray-400 text-xs">(opcional)</span>
              </label>
              <input
                type="text"
                name="piso"
                value={formData.piso}
                onChange={handleChange}
                placeholder="Ej: 2"
                maxLength={10}
                style={{ color: '#000', backgroundColor: '#f3f4f6' }}
                className="w-full px-3 py-2 border-2 border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-semibold"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Apartamento <span className="text-gray-400 text-xs">(opcional)</span>
              </label>
              <input
                type="text"
                name="apartamento"
                value={formData.apartamento}
                onChange={handleChange}
                placeholder="Ej: B"
                maxLength={10}
                style={{ color: '#000', backgroundColor: '#f3f4f6' }}
                className="w-full px-3 py-2 border-2 border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-semibold"
                disabled={loading}
              />
            </div>
          </div>

          {/* Tipo de Ubicación y Nombre */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de Ubicación <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={ubicacionInput}
                onChange={(e) => handleUbicacionInput(e.target.value)}
                onFocus={() => setShowUbicacionSuggestions(ubicacionInput.length > 0)}
                placeholder="Ej: Sector, Barrio, Ciudad..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black font-medium"
                disabled={loading}
                required
              />
              {showUbicacionSuggestions && filteredTiposUbicacion.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {filteredTiposUbicacion.map((tipo, index) => (
                    <button
                      key={`${tipo.value}-${tipo.label}-${index}`}
                      type="button"
                      onClick={() => selectUbicacion(tipo)}
                      className="w-full px-3 py-2 text-left hover:bg-purple-50 text-black font-medium border-b border-gray-100 last:border-b-0"
                    >
                      {tipo.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre de la Ubicación <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="nombre_pueblo"
                value={formData.nombre_pueblo}
                onChange={handleChange}
                placeholder="Ej: Centro, Residencial Las Flores, Logroño"
                maxLength={255}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black font-medium"
                disabled={loading}
                required
              />
            </div>
          </div>

          {/* Código Postal */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Código Postal (La Rioja) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="codigo_postal"
              value={formData.codigo_postal}
              onChange={handleCodigoPostalChange}
              onBlur={handleCodigoPostalBlur}
              placeholder="26XXX"
              maxLength={5}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black placeholder-gray-600 font-medium"
              disabled={loading}
              required
            />
            {validatingCp && (
              <p className="text-sm text-blue-600 mt-1 flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Validando código postal...
              </p>
            )}
            {cpInfo && (
              <p className="text-sm text-green-600 mt-1 font-medium">
                ✓ {cpInfo.ciudad}, {cpInfo.provincia} (CP: {cpInfo.cp})
              </p>
            )}
            {cpError && (
              <p className="text-sm text-red-600 mt-1 font-medium">✗ {cpError}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-6 border-t border-purple-100 bg-white/80 sticky bottom-0 p-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Guardando...
                </span>
              ) : (
                '📍 Guardar Dirección'
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="flex-1 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
            >
              ❌ Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
