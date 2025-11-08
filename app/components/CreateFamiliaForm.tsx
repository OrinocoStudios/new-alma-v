'use client';

import { useState } from 'react';

interface CreateFamiliaFormProps {
  adminId: number;
  nextSocioId: number;
  onFamiliaAdded: () => void;
}

export function CreateFamiliaForm({ adminId, nextSocioId, onFamiliaAdded }: CreateFamiliaFormProps) {
  const [formData, setFormData] = useState({
    nombres: '',
    apellido1re: '',
    apellido2do: '',
    documento: '',
    password: '',
    passwordConfirm: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [credenciales, setCredenciales] = useState<{ 
    usuario: string; 
    password: string; 
    socioId: number;
    nombreCompleto: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);

    // Validaciones
    if (!formData.nombres.trim()) {
      setError('Nombres es requerido');
      setLoading(false);
      return;
    }

    if (!formData.apellido1re.trim()) {
      setError('Primer apellido es requerido');
      setLoading(false);
      return;
    }

    if (!formData.apellido2do.trim()) {
      setError('Segundo apellido es requerido');
      setLoading(false);
      return;
    }

    if (!formData.documento.trim()) {
      setError('Documento de identidad es requerido');
      setLoading(false);
      return;
    }

    if (formData.documento.length < 3) {
      setError('Documento debe tener al menos 3 caracteres');
      setLoading(false);
      return;
    }

    if (!formData.password.trim()) {
      setError('Contraseña es requerida');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Contraseña debe tener al menos 6 caracteres');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.passwordConfirm) {
      setError('Las contraseñas no coinciden');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/familias', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id_admin: adminId,
          id_socio: nextSocioId,
          nombres: formData.nombres,
          apellido1re: formData.apellido1re,
          apellido2do: formData.apellido2do,
          documento: formData.documento.trim().toUpperCase(),
          password: formData.password,
        }),
      });

      if (!response.ok) {
        const data = await response.json();

        if (response.status === 409) {
          throw new Error('ID de familia ya está en uso. Por favor recarga la página y vuelve a intentarlo.');
        }

        throw new Error(data.error || 'Error al crear familia');
      }

      setSuccess(true);
      
      // Generar y mostrar credenciales generadas
      const generatedUsername = formData.documento.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      const credentials = {
        usuario: generatedUsername,
        password: formData.password, // contraseña original para mostrar
        socioId: nextSocioId,
        nombreCompleto: `${formData.nombres} ${formData.apellido1re} ${formData.apellido2do}`,
      };
      setCredenciales(credentials);
      
      setFormData({
        nombres: '',
        apellido1re: '',
        apellido2do: '',
        documento: '',
        password: '',
        passwordConfirm: '',
      });

      // Llamar callback después de 1 segundo
      setTimeout(() => {
        onFamiliaAdded();
      }, 1000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {success && credenciales && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
          Familia creada exitosamente.
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm font-medium text-black">
              <strong>Credenciales generadas:</strong>
            </p>
            <div className="mt-2 space-y-2">
              <div className="flex items-center justify-between bg-white p-2 rounded">
                <span className="text-gray-600 text-sm">Usuario:</span>
                <span className="ml-1 font-mono text-black bg-gray-100 p-2 rounded">{credenciales.usuario}</span>
              </div>
              <div className="flex items-center justify-between bg-white p-2 rounded">
                <span className="text-gray-600 text-sm">Contraseña:</span>
                <span className="ml-1 font-mono text-black bg-gray-100 p-2 rounded">{credenciales.password}</span>
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(`Usuario: ${credenciales.usuario} | Contraseña: ${credenciales.password} | ID: ${credenciales.socioId}`);
                    alert('Credenciales copiadas al portapapeles');
                  }}
                  className="text-blue-600 hover:text-blue-800 text-xs"
                >
                  <span>Copiar</span>
                </button>
              </div>
              <p className="text-xs text-gray-600 mt-4">
                Por favor, haz clic en "Copiar" para guardar las credenciales. 
                El miembro principal podrá cambiar su contraseña más adelante desde su perfil.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* ID Socio */}
        <div>
          <label htmlFor="id_socio" className="block text-sm font-medium text-gray-700 mb-1">
            ID de Familia *
          </label>
          <input
            id="id_socio"
            type="text"
            value={nextSocioId}
            readOnly
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed font-semibold"
            disabled={loading}
          />
        </div>

        {/* Nombres del Miembro Principal */}
        <div>
          <label htmlFor="nombres" className="block text-sm font-medium text-gray-700 mb-1">
            Nombres del Miembro Principal *
          </label>
          <input
            id="nombres"
            name="nombres"
            type="text"
            value={formData.nombres}
            onChange={handleChange}
            placeholder="Ej: Juan"
            maxLength={30}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black font-medium placeholder-gray-500"
            disabled={loading}
            required
          />
        </div>

        {/* Primer Apellido */}
        <div>
          <label htmlFor="apellido1re" className="block text-sm font-medium text-gray-700 mb-1">
            Primer Apellido *
          </label>
          <input
            id="apellido1re"
            name="apellido1re"
            type="text"
            value={formData.apellido1re}
            onChange={handleChange}
            placeholder="Ej: García"
            maxLength={15}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black font-medium placeholder-gray-500"
            disabled={loading}
            required
          />
        </div>

        {/* Segundo Apellido */}
        <div>
          <label htmlFor="apellido2do" className="block text-sm font-medium text-gray-700 mb-1">
            Segundo Apellido *
          </label>
          <input
            id="apellido2do"
            name="apellido2do"
            type="text"
            value={formData.apellido2do}
            onChange={handleChange}
            placeholder="Ej: López"
            maxLength={15}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black font-medium placeholder-gray-500"
            disabled={loading}
            required
          />
        </div>

        {/* Documento de Identidad */}
        <div>
          <label htmlFor="documento" className="block text-sm font-medium text-gray-700 mb-1">
            Documento de Identidad (Miembro Principal) *
          </label>
          <input
            id="documento"
            name="documento"
            type="text"
            value={formData.documento}
            onChange={handleChange}
            placeholder="Ej: 12345678A"
            maxLength={15}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black font-medium placeholder-gray-500"
            disabled={loading}
            required
          />
        </div>

        {/* Contraseña */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Contraseña *
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Mínimo 6 caracteres"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black font-medium placeholder-gray-500"
            disabled={loading}
            required
          />
        </div>

        {/* Confirmar Contraseña */}
        <div>
          <label htmlFor="passwordConfirm" className="block text-sm font-medium text-gray-700 mb-1">
            Confirmar Contraseña *
          </label>
          <input
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            value={formData.passwordConfirm}
            onChange={handleChange}
            placeholder="Confirmar contraseña"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black font-medium placeholder-gray-500"
            disabled={loading}
            required
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex gap-2 pt-4">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-lg transition"
        >
          {loading ? 'Creando Familia...' : 'Crear Familia'}
        </button>
      </div>
    </form>
  );
}
