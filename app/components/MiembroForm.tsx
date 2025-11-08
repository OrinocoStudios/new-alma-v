'use client';

import { useState, useEffect } from 'react';

interface MiembroFormProps {
  id_familia: number;
  onSave: () => void;
}

interface Filter {
  id: number;
  nombre?: string;
  pais?: string;
  estado?: string;
  ciudad?: string;
  codigo_postal?: string;
  tipo_via?: string;
}

export function MiembroForm({ id_familia, onSave }: MiembroFormProps) {
  const [formData, setFormData] = useState({
    tipo_documento: 'DNI',
    numero_documento: '',
    nombres: '',
    apellido1re: '',
    apellido2do: '',
    fecha_nacimiento: '',
    genero: 'M',
    nacionalidad: '1',
    pais_nacimiento: '1',
    estado_nacimiento: '',
    ciudad_nacimiento: '',
    numero_telefonico: '',
    ocupacion: '',
    profesion: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

    if (!formData.numero_documento.trim()) {
      setError('Número de documento es requerido');
      setLoading(false);
      return;
    }

    if (!formData.fecha_nacimiento) {
      setError('Fecha de nacimiento es requerida');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/miembros', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id_familia,
          ...formData,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Error al crear miembro');
      }

      setSuccess(true);
      setFormData({
        tipo_documento: 'DNI',
        numero_documento: '',
        nombres: '',
        apellido1re: '',
        apellido2do: '',
        fecha_nacimiento: '',
        genero: 'M',
        nacionalidad: '1',
        pais_nacimiento: '1',
        estado_nacimiento: '',
        ciudad_nacimiento: '',
        numero_telefonico: '',
        ocupacion: '',
        profesion: '',
      });

      setTimeout(() => {
        onSave();
      }, 1000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Agregar Miembro a la Familia</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
            Miembro agregado exitosamente.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Tipo de Documento */}
          <div>
            <label htmlFor="tipo_documento" className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de Documento *
            </label>
            <select
              id="tipo_documento"
              name="tipo_documento"
              value={formData.tipo_documento}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
              disabled={loading}
            >
              <option value="DNI">DNI</option>
              <option value="NIE">NIE</option>
              <option value="PS">Pasaporte</option>
              <option value="OTR">Otro</option>
            </select>
          </div>

          {/* Número de Documento */}
          <div>
            <label htmlFor="numero_documento" className="block text-sm font-medium text-gray-700 mb-1">
              Número de Documento *
            </label>
            <input
              id="numero_documento"
              name="numero_documento"
              type="text"
              value={formData.numero_documento}
              onChange={handleChange}
              placeholder="Ej: 12345678A"
              maxLength={15}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
              disabled={loading}
              required
            />
          </div>

          {/* Fecha de Nacimiento */}
          <div>
            <label htmlFor="fecha_nacimiento" className="block text-sm font-medium text-gray-700 mb-1">
              Fecha de Nacimiento (DD/MM/YYYY) *
            </label>
            <input
              id="fecha_nacimiento"
              name="fecha_nacimiento"
              type="text"
              value={formData.fecha_nacimiento}
              onChange={handleChange}
              placeholder="DD/MM/YYYY"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
              disabled={loading}
              required
            />
          </div>

          {/* Género */}
          <div>
            <label htmlFor="genero" className="block text-sm font-medium text-gray-700 mb-1">
              Género *
            </label>
            <select
              id="genero"
              name="genero"
              value={formData.genero}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
              disabled={loading}
            >
              <option value="M">Masculino</option>
              <option value="H">Femenino</option>
            </select>
          </div>

          {/* Teléfono */}
          <div>
            <label htmlFor="numero_telefonico" className="block text-sm font-medium text-gray-700 mb-1">
              Teléfono
            </label>
            <input
              id="numero_telefonico"
              name="numero_telefonico"
              type="text"
              value={formData.numero_telefonico}
              onChange={handleChange}
              placeholder="Ej: 9 dígitos"
              maxLength={20}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
              disabled={loading}
            />
          </div>

          {/* Ocupación */}
          <div>
            <label htmlFor="ocupacion" className="block text-sm font-medium text-gray-700 mb-1">
              Ocupación
            </label>
            <input
              id="ocupacion"
              name="ocupacion"
              type="text"
              value={formData.ocupacion}
              onChange={handleChange}
              placeholder="Ej: Ingeniero"
              maxLength={100}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
              disabled={loading}
            />
          </div>

          {/* Profesión */}
          <div>
            <label htmlFor="profesion" className="block text-sm font-medium text-gray-700 mb-1">
              Profesión
            </label>
            <input
              id="profesion"
              name="profesion"
              type="text"
              value={formData.profesion}
              onChange={handleChange}
              placeholder="Ej: Abogado"
              maxLength={100}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
              disabled={loading}
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
            {loading ? 'Agregando...' : 'Agregar Miembro'}
          </button>
        </div>
      </form>
    </div>
  );
}
