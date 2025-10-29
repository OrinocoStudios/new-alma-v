'use client';

import { useState } from 'react';

interface AddSocioFormProps {
  adminId: number;
  onSocioAdded: () => void;
}

export function AddSocioForm({ adminId, onSocioAdded }: AddSocioFormProps) {
  const [formData, setFormData] = useState({
    id_socio: '',
    nombres: '',
    apellido1re: '',
    apellido2do: '',
    miembroprincipal: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);

    // Validaciones básicas
    if (!formData.id_socio.trim()) {
      setError('ID de socio es requerido');
      setLoading(false);
      return;
    }

    if (!/^\d+$/.test(formData.id_socio)) {
      setError('ID de socio debe ser un número');
      setLoading(false);
      return;
    }

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

    try {
      const response = await fetch('/api/socios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id_admin: adminId,
          id_socio: Number(formData.id_socio),
          nombres: formData.nombres,
          apellido1re: formData.apellido1re,
          apellido2do: formData.apellido2do,
          miembroprincipal: formData.miembroprincipal,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Error al crear socio');
      }

      setSuccess(true);
      setFormData({
        id_socio: '',
        nombres: '',
        apellido1re: '',
        apellido2do: '',
        miembroprincipal: false,
      });

      // Llamar callback después de 1 segundo
      setTimeout(() => {
        onSocioAdded();
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

      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
          Socio creado exitosamente. Redirigiendo...
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* ID Socio */}
        <div>
          <label htmlFor="id_socio" className="block text-sm font-medium text-gray-700 mb-1">
            ID de Socio *
          </label>
          <input
            id="id_socio"
            name="id_socio"
            type="text"
            value={formData.id_socio}
            onChange={handleChange}
            placeholder="Ej: 001"
style={{ color: '#000', backgroundColor: '#f3f4f6' }} className="w-full px-3 py-2 border-2 border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-semibold"
            disabled={loading}
            required
          />
        </div>

        {/* Nombres */}
        <div>
          <label htmlFor="nombres" className="block text-sm font-medium text-gray-700 mb-1">
            Nombres *
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
      </div>

      {/* Miembro Principal */}
      <div className="flex items-center">
        <input
          id="miembroprincipal"
          name="miembroprincipal"
          type="checkbox"
          checked={formData.miembroprincipal}
          onChange={handleChange}
          className="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
          disabled={loading}
        />
        <label htmlFor="miembroprincipal" className="ml-2 text-sm font-medium text-gray-700">
          Marcar como miembro principal
        </label>
      </div>

      {/* Submit Button */}
      <div className="flex gap-2 pt-4">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-lg transition"
        >
          {loading ? 'Creando...' : 'Crear Socio'}
        </button>
      </div>
    </form>
  );
}
