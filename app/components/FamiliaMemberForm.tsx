'use client';

import { useState, useEffect } from 'react';

interface Props {
  familiaId: number;
  onMemberAdded: () => void;
  onCancel: () => void;
}

interface FormData {
  nombres: string;
  apellido1re: string;
  apellido2do: string;
  tipo_documento: string;
  numero_documento: string;
  nacionalidad: string;
  pais_nacimiento: string;
  estado_nacimiento: string;
  ciudad_nacimiento: string;
  numero_telefonico: string;
  ocupacion: string;
  profesion: string;
  fecha_nacimiento: string;
  genero: string;
  rango_ingresos: string;
}

export function FamiliaMemberForm({ familiaId, onMemberAdded, onCancel }: Props) {
  const [formData, setFormData] = useState<FormData>({
    nombres: '',
    apellido1re: '',
    apellido2do: '',
    tipo_documento: 'DNI',
    numero_documento: '',
    nacionalidad: '1', // España por defecto
    pais_nacimiento: '1', // España por defecto
    estado_nacimiento: '',
    ciudad_nacimiento: '',
    numero_telefonico: '',
    ocupacion: '',
    profesion: '',
    fecha_nacimiento: '',
    genero: 'M',
    rango_ingresos: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const tipoDocumentoOptions = [
    { value: 'DNI', label: 'DNI' },
    { value: 'NIE', label: 'NIE' },
    { value: 'PASAPORTE', label: 'PASAPORTE' },
  ];

  const rangoIngresosOptions = [
    { value: '0-5000', label: '0 - 5.000 €' },
    { value: '5001-10000', label: '5.001 - 10.000 €' },
    { value: '10001-15000', label: '10.001 - 15.000 €' },
    { value: '15001-20000', label: '15.001 - 20.000 €' },
    { value: '20001-25000', label: '20.001 - 25.000 €' },
    { value: '25001-35000', label: '25.001 - 35.000 €' },
    { value: '35001+', label: 'Más de 35.000 €' },
  ];

  const generoPptions = [
    { value: 'M', label: 'Masculino' },
    { value: 'H', label: 'Femenino' },
  ];


  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Validaciones básicas
      if (!formData.nombres.trim()) {
        throw new Error('Nombres es requerido');
      }
      if (!formData.apellido1re.trim()) {
        throw new Error('Primer apellido es requerido');
      }
      if (!formData.apellido2do.trim()) {
        throw new Error('Segundo apellido es requerido');
      }
      if (!formData.numero_documento.trim()) {
        throw new Error('Número de documento es requerido');
      }
      if (!formData.fecha_nacimiento) {
        throw new Error('Fecha de nacimiento es requerida');
      }

      const response = await fetch('/api/miembros', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id_familia: familiaId,
          tipo_documento: formData.tipo_documento,
          numero_documento: formData.numero_documento.toUpperCase(),
          nombres: formData.nombres,
          apellido1re: formData.apellido1re,
          apellido2do: formData.apellido2do,
          fecha_nacimiento: formData.fecha_nacimiento,
          genero: formData.genero,
          nacionalidad: Number(formData.nacionalidad),
          pais_nacimiento: Number(formData.pais_nacimiento),
          estado_nacimiento: formData.estado_nacimiento ? Number(formData.estado_nacimiento) : null,
          ciudad_nacimiento: formData.ciudad_nacimiento ? Number(formData.ciudad_nacimiento) : null,
          numero_telefonico: formData.numero_telefonico || null,
          ocupacion: formData.ocupacion || 'No aplica',
          profesion: formData.profesion || 'No aplica',
          rango_ingresos: formData.rango_ingresos || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al crear miembro');
      }

      alert('Miembro agregado correctamente');
      onMemberAdded();
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error desconocido';
      setError(message);
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            onChange={handleInputChange}
            placeholder="Ej: Juan"
            maxLength={30}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
            disabled={loading}
            required
          />
        </div>

        {/* Apellido Primero */}
        <div>
          <label htmlFor="apellido1re" className="block text-sm font-medium text-gray-700 mb-1">
            Primer Apellido *
          </label>
          <input
            id="apellido1re"
            name="apellido1re"
            type="text"
            value={formData.apellido1re}
            onChange={handleInputChange}
            placeholder="Ej: García"
            maxLength={15}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
            disabled={loading}
            required
          />
        </div>

        {/* Apellido Segundo */}
        <div>
          <label htmlFor="apellido2do" className="block text-sm font-medium text-gray-700 mb-1">
            Segundo Apellido *
          </label>
          <input
            id="apellido2do"
            name="apellido2do"
            type="text"
            value={formData.apellido2do}
            onChange={handleInputChange}
            placeholder="Ej: López"
            maxLength={15}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
            disabled={loading}
            required
          />
        </div>

        {/* Tipo Documento */}
        <div>
          <label htmlFor="tipo_documento" className="block text-sm font-medium text-gray-700 mb-1">
            Tipo Documento *
          </label>
          <select
            id="tipo_documento"
            name="tipo_documento"
            value={formData.tipo_documento}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
            disabled={loading}
          >
            {tipoDocumentoOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Número Documento */}
        <div>
          <label htmlFor="numero_documento" className="block text-sm font-medium text-gray-700 mb-1">
            Número Documento *
          </label>
          <input
            id="numero_documento"
            name="numero_documento"
            type="text"
            value={formData.numero_documento}
            onChange={handleInputChange}
            placeholder="Ej: 12345678A"
            maxLength={15}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
            disabled={loading}
            required
          />
        </div>

        {/* Nacionalidad */}
        <div>
          <label htmlFor="nacionalidad" className="block text-sm font-medium text-gray-700 mb-1">
            Nacionalidad
          </label>
          <select
            id="nacionalidad"
            name="nacionalidad"
            value={formData.nacionalidad}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
            disabled={loading}
          >
            <option value="1">España</option>
            <option value="2">Otro País</option>
          </select>
        </div>

        {/* País Nacimiento */}
        <div>
          <label htmlFor="pais_nacimiento" className="block text-sm font-medium text-gray-700 mb-1">
            País Nacimiento
          </label>
          <select
            id="pais_nacimiento"
            name="pais_nacimiento"
            value={formData.pais_nacimiento}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
            disabled={loading}
          >
            <option value="1">España</option>
            <option value="2">Otro País</option>
          </select>
        </div>

        {/* Provincia Nacimiento */}
        <div>
          <label htmlFor="estado_nacimiento" className="block text-sm font-medium text-gray-700 mb-1">
            Provincia Nacimiento
          </label>
          <input
            id="estado_nacimiento"
            name="estado_nacimiento"
            type="text"
            value={formData.estado_nacimiento}
            onChange={handleInputChange}
            placeholder="Ej: Madrid"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
            disabled={loading}
          />
        </div>

        {/* Localidad Nacimiento */}
        <div>
          <label htmlFor="ciudad_nacimiento" className="block text-sm font-medium text-gray-700 mb-1">
            Localidad Nacimiento
          </label>
          <input
            id="ciudad_nacimiento"
            name="ciudad_nacimiento"
            type="text"
            value={formData.ciudad_nacimiento}
            onChange={handleInputChange}
            placeholder="Ej: Madrid"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
            disabled={loading}
          />
        </div>

        {/* Teléfono */}
        <div>
          <label htmlFor="numero_telefonico" className="block text-sm font-medium text-gray-700 mb-1">
            Teléfono (Opcional)
          </label>
          <input
            id="numero_telefonico"
            name="numero_telefonico"
            type="tel"
            value={formData.numero_telefonico}
            onChange={handleInputChange}
            placeholder="Ej: 666123456"
            maxLength={20}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
            disabled={loading}
          />
        </div>

        {/* Ocupación */}
        <div>
          <label htmlFor="ocupacion" className="block text-sm font-medium text-gray-700 mb-1">
            Ocupación (Si no tiene, se guardará como "No aplica")
          </label>
          <input
            id="ocupacion"
            name="ocupacion"
            type="text"
            value={formData.ocupacion}
            onChange={handleInputChange}
            placeholder="Ej: Ingeniero"
            maxLength={100}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
            disabled={loading}
          />
        </div>

        {/* Profesión */}
        <div>
          <label htmlFor="profesion" className="block text-sm font-medium text-gray-700 mb-1">
            Profesión (Si no tiene, se guardará como "No aplica")
          </label>
          <input
            id="profesion"
            name="profesion"
            type="text"
            value={formData.profesion}
            onChange={handleInputChange}
            placeholder="Ej: Programador"
            maxLength={100}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
            disabled={loading}
          />
        </div>

        {/* Fecha Nacimiento */}
        <div>
          <label htmlFor="fecha_nacimiento" className="block text-sm font-medium text-gray-700 mb-1">
            Fecha Nacimiento *
          </label>
          <input
            id="fecha_nacimiento"
            name="fecha_nacimiento"
            type="date"
            value={formData.fecha_nacimiento}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
            disabled={loading}
            required
          />
        </div>

        {/* Sexo */}
        <div>
          <label htmlFor="genero" className="block text-sm font-medium text-gray-700 mb-1">
            Sexo *
          </label>
          <select
            id="genero"
            name="genero"
            value={formData.genero}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
            disabled={loading}
          >
            {generoPptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Rango Ingresos */}
        <div>
          <label htmlFor="rango_ingresos" className="block text-sm font-medium text-gray-700 mb-1">
            Rango Ingresos Anuales
          </label>
          <select
            id="rango_ingresos"
            name="rango_ingresos"
            value={formData.rango_ingresos}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
            disabled={loading}
          >
            <option value="">Selecciona un rango</option>
            {rangoIngresosOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* Buttons */}
      <div className="flex gap-2 pt-4">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-lg transition"
        >
          {loading ? 'Agregando...' : 'Agregar Miembro'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          disabled={loading}
          className="flex-1 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-lg transition"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}