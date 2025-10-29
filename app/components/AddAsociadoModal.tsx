'use client';

import { useState } from 'react';

interface AddAsociadoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  socioId: number;
}

export function AddAsociadoModal({ isOpen, onClose, onSuccess, socioId }: AddAsociadoModalProps) {
  const [formData, setFormData] = useState({
    tipo_documento: 'DNI',
    numero_documento: '',
    nombres: '',
    apellido1re: '',
    apellido2do: '',
    fecha_nacimiento: '',
    genero: 'H',
    nacionalidad: '1',
    pais_nacimiento: '1',
    numero_telefonico: '',
    ocupacion: '',
    profesion: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    let { name, value } = e.target;
    
    // Auto-format fecha_nacimiento (DD/MM/YYYY)
    if (name === 'fecha_nacimiento') {
      // Remove non-digits
      value = value.replace(/\D/g, '');
      
      // Add slashes automatically
      if (value.length >= 2 && value.length < 4) {
        value = value.slice(0, 2) + '/' + value.slice(2);
      } else if (value.length >= 4) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4) + '/' + value.slice(4, 8);
      }
    }
    
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/asociados', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id_socio: socioId,
          ...formData,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || data.details?.fieldErrors?.[Object.keys(data.details?.fieldErrors || {})[0]]?.[0] || 'Error al crear asociado');
      }

      // Limpiar formulario y cerrar modal
      setFormData({
        tipo_documento: 'DNI',
        numero_documento: '',
        nombres: '',
        apellido1re: '',
        apellido2do: '',
        fecha_nacimiento: '',
        genero: 'H',
        nacionalidad: '1',
        pais_nacimiento: '1',
        numero_telefonico: '',
        ocupacion: '',
        profesion: '',
      });
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
        <div className="sticky top-0 bg-gradient-to-r from-indigo-50 to-blue-50 border-b-2 border-indigo-100 px-6 py-5">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-indigo-900">Agregar Miembro Familiar</h2>
              <p className="text-sm text-indigo-600 mt-1">Completa el formulario para agregar un nuevo miembro</p>
            </div>
            <button
              onClick={onClose}
              className="text-indigo-400 hover:text-indigo-600 hover:bg-indigo-100 p-2 rounded-lg text-xl transition-all"
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

          {/* Documento */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de Documento
              </label>
              <select
                name="tipo_documento"
                value={formData.tipo_documento}
                onChange={handleChange}
style={{ color: '#000', backgroundColor: '#f3f4f6' }} className="w-full px-3 py-2 border-2 border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-semibold"
                disabled={loading}
              >
                <option value="DNI">DNI</option>
                <option value="N">NIE</option>
                <option value="PS">Pasaporte</option>
                <option value="OTR">Otro</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Número de Documento
              </label>
              <input
                type="text"
                name="numero_documento"
                value={formData.numero_documento}
                onChange={handleChange}
                placeholder="Ej: 12345678A"
style={{ color: '#000', backgroundColor: '#f3f4f6' }} className="w-full px-3 py-2 border-2 border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-semibold"
                disabled={loading}
                required
              />
            </div>
          </div>

          {/* Nombres y Apellidos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombres
              </label>
              <input
                type="text"
                name="nombres"
                value={formData.nombres}
                onChange={handleChange}
                maxLength={30}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black font-medium"
                disabled={loading}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Primer Apellido
              </label>
              <input
                type="text"
                name="apellido1re"
                value={formData.apellido1re}
                onChange={handleChange}
                maxLength={15}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black font-medium"
                disabled={loading}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Segundo Apellido
              </label>
              <input
                type="text"
                name="apellido2do"
                value={formData.apellido2do}
                onChange={handleChange}
                maxLength={15}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black font-medium"
                disabled={loading}
                required
              />
            </div>
          </div>

          {/* Fecha Nacimiento y Género */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fecha de Nacimiento (DD/MM/YYYY)
              </label>
              <input
                type="text"
                name="fecha_nacimiento"
                value={formData.fecha_nacimiento}
                onChange={handleChange}
                placeholder="DD/MM/YYYY"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black placeholder-gray-600 font-medium"
                disabled={loading}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Género
              </label>
              <select
                name="genero"
                value={formData.genero}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black font-medium"
                disabled={loading}
              >
                <option value="H">Mujer</option>
                <option value="M">Hombre</option>
              </select>
            </div>
          </div>

          {/* Teléfono, Ocupación y Profesión */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Teléfono (9 dígitos) <span className="text-gray-400 text-xs">(opcional)</span>
              </label>
              <input
                type="text"
                name="numero_telefonico"
                value={formData.numero_telefonico}
                onChange={handleChange}
                placeholder="Ej: 612345678"
                maxLength={20}
                style={{ color: '#000', backgroundColor: '#f3f4f6' }} className="w-full px-3 py-2 border-2 border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-semibold"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ocupación <span className="text-gray-400 text-xs">(opcional)</span>
              </label>
              <input
                type="text"
                name="ocupacion"
                value={formData.ocupacion}
                onChange={handleChange}
                maxLength={100}
                placeholder="Ej: Estudiante"
                style={{ color: '#000', backgroundColor: '#f3f4f6' }} className="w-full px-3 py-2 border-2 border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-semibold"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Profesión <span className="text-gray-400 text-xs">(opcional)</span>
              </label>
              <input
                type="text"
                name="profesion"
                value={formData.profesion}
                onChange={handleChange}
                maxLength={100}
                placeholder="Ej: Ingeniero"
                style={{ color: '#000', backgroundColor: '#f3f4f6' }} className="w-full px-3 py-2 border-2 border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-semibold"
                disabled={loading}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-6 border-t border-indigo-100 bg-white/80 sticky bottom-0 p-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
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
                '💾 Guardar Miembro'
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
