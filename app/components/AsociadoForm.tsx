'use client';

import { useState, useEffect } from 'react';
import { getDefaultNationality } from '@/app/lib/validations';

interface AsociadoFormProps {
  id_socio: number;
  onSave: () => void;
}

export function AsociadoForm({ id_socio, onSave }: AsociadoFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [paises, setPaises] = useState<Array<{ id: number; pais: string; codigo: string }>>([]);
  const [estados, setEstados] = useState<Array<{ id: number; estado: string }>>([]);
  const [ciudades, setCiudades] = useState<Array<{ id: number; ciudad: string }>>([]); 
  
  const loadPaises = async () => {
    try {
      const response = await fetch('/api/filters?type=paises');
      const data = await response.json();
      setPaises(data);
      if (data.length > 0) {
        const venezuelaIndex = data.findIndex((p: { id: number; pais: string }) => p.pais === 'Venezuela');
        setFormData((prev) => ({
          ...prev,
          nacionalidad: data[venezuelaIndex >= 0 ? venezuelaIndex : 0].id.toString(),
          pais_nacimiento: data[venezuelaIndex >= 0 ? venezuelaIndex : 0].id.toString(),
        }));
      }
    } catch (err) {
      console.error('Error loading paises:', err);
    }
  };

  const [formData, setFormData] = useState({
    tipo_documento: 'DNI',
    numero_documento: '',
    nombres: '',
    apellido1re: '',
    apellido2do: '',
    fecha_nacimiento: '',
    genero: 'H',
    nacionalidad: '',
    pais_nacimiento: '',
    estado_nacimiento: '',
    ciudad_nacimiento: '',
    numero_telefonico: '',
    ocupacion: '',
    profesion: '',
  });

  useEffect(() => {
    loadPaises();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadEstados = async (id_pais: string) => {
    if (!id_pais) return;
    try {
      const response = await fetch(`/api/filters?type=estados&id_pais=${id_pais}`);
      const data = await response.json();
      setEstados(data);
      setCiudades([]);
      setFormData((prev) => ({
        ...prev,
        estado_nacimiento: '',
        ciudad_nacimiento: '',
      }));
    } catch (err) {
      console.error('Error loading estados:', err);
    }
  };

  const loadCiudades = async (id_estado: string) => {
    if (!id_estado) return;
    try {
      const response = await fetch(`/api/filters?type=ciudades&id_estado=${id_estado}`);
      const data = await response.json();
      setCiudades(data);
      setFormData((prev) => ({
        ...prev,
        ciudad_nacimiento: '',
      }));
    } catch (err) {
      console.error('Error loading ciudades:', err);
    }
  };

  const handleChangeDocType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value;
    setFormData((prev) => ({
      ...prev,
      tipo_documento: newType,
      numero_documento: '',
      nacionalidad: getDefaultNationality(newType),
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'pais_nacimiento') {
      loadEstados(value);
    }

    if (name === 'estado_nacimiento') {
      loadCiudades(value);
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
        body: JSON.stringify({ id_socio, ...formData }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.error || 'Error al guardar');
        setLoading(false);
        return;
      }

      setFormData({
        tipo_documento: 'DNI',
        numero_documento: '',
        nombres: '',
        apellido1re: '',
        apellido2do: '',
        fecha_nacimiento: '',
        genero: 'H',
        nacionalidad: '',
        pais_nacimiento: '',
        estado_nacimiento: '',
        ciudad_nacimiento: '',
        numero_telefonico: '',
        ocupacion: '',
        profesion: '',
      });

      onSave();
    } catch {
      setError('Error de conexión');
      setLoading(false);
    }
  };

  const isVenezuelaSelected =
    formData.pais_nacimiento &&
    paises.find((p) => p.id.toString() === formData.pais_nacimiento)?.pais === 'Venezuela';

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Agregar Miembro Familiar</h2>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Tipo de Documento *</label>
          <select
            name="tipo_documento"
            value={formData.tipo_documento}
            onChange={handleChangeDocType}
            className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="DNI">DNI</option>
            <option value="N">NIE</option>
            <option value="PS">Pasaporte</option>
            <option value="OTR">Otros</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Número de Documento *</label>
          <input
            type="text"
            name="numero_documento"
            value={formData.numero_documento}
            onChange={handleChange}
            placeholder={formData.tipo_documento === 'DNI' ? '12345678A' : 'Documento'}
            className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Nombres *</label>
          <input
            type="text"
            name="nombres"
            value={formData.nombres}
            onChange={handleChange}
            maxLength={30}
            className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Primer Apellido *</label>
          <input
            type="text"
            name="apellido1re"
            value={formData.apellido1re}
            onChange={handleChange}
            maxLength={15}
            className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Segundo Apellido *</label>
          <input
            type="text"
            name="apellido2do"
            value={formData.apellido2do}
            onChange={handleChange}
            maxLength={15}
            className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Fecha Nacimiento (DD/MM/YYYY) *</label>
          <input
            type="text"
            name="fecha_nacimiento"
            value={formData.fecha_nacimiento}
            onChange={handleChange}
            placeholder="DD/MM/YYYY"
            className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Género *</label>
          <select
            name="genero"
            value={formData.genero}
            onChange={handleChange}
            className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="H">Hembra</option>
            <option value="M">Macho</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Nacionalidad *</label>
          <select
            name="nacionalidad"
            value={formData.nacionalidad}
            onChange={handleChange}
            className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Seleccionar</option>
            {paises.map((p) => (
              <option key={p.id} value={p.id}>
                {p.pais}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">País Nacimiento *</label>
          <select
            name="pais_nacimiento"
            value={formData.pais_nacimiento}
            onChange={handleChange}
            className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Seleccionar</option>
            {paises.map((p) => (
              <option key={p.id} value={p.id}>
                {p.pais}
              </option>
            ))}
          </select>
        </div>

        {isVenezuelaSelected && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">Estado Nacimiento</label>
              <select
                name="estado_nacimiento"
                value={formData.estado_nacimiento}
                onChange={handleChange}
                className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Seleccionar</option>
                {estados.map((e) => (
                  <option key={e.id} value={e.id}>
                    {e.estado}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Ciudad Nacimiento</label>
              <select
                name="ciudad_nacimiento"
                value={formData.ciudad_nacimiento}
                onChange={handleChange}
                className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Seleccionar</option>
                {ciudades.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.ciudad}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">Teléfono (9 dígitos) *</label>
          <input
            type="text"
            name="numero_telefonico"
            value={formData.numero_telefonico}
            onChange={handleChange}
            placeholder="123456789"
            maxLength={9}
            className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Ocupación *</label>
          <input
            type="text"
            name="ocupacion"
            value={formData.ocupacion}
            onChange={handleChange}
            maxLength={100}
            className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Profesión *</label>
          <input
            type="text"
            name="profesion"
            value={formData.profesion}
            onChange={handleChange}
            maxLength={100}
            className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
      >
        {loading ? 'Guardando...' : 'Guardar Miembro'}
      </button>
    </form>
  );
}
