'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MiembroForm } from '@/app/components/MiembroForm';

interface DashboardParams {
  params: { id: string };
}

interface Familia {
  id: number;
  id_socio: number;
  apellidos: string;
  id_direccion?: number;
  miembros: Miembro[];
  direccion?: Direccion;
}

interface Miembro {
  id: number;
  id_familia: number;
  id_miembro: number;
  tipo_documento: string;
  numero_documento: string;
  nombres: string;
  apellido1re: string;
  apellido2do: string;
  fecha_nacimiento: string;
  genero: string;
  nacionalidad: number;
  pais_nacimiento: number;
  estado_nacimiento: number | null;
  ciudad_nacimiento: number | null;
  numero_telefonico: string;
  ocupacion: string;
  profesion: string;
  esPrincipal: number;
  alimentacion1: number;
  familia?: Familia;
}

interface Direccion {
  id: number;
  id_familia: number;
  id_tipo_via: number;
  nombre_via: string;
  numero: string;
  portal: string;
  piso: string;
  apartamento: string;
  pueblo: number;
  nombre_pueblo: string;
  codigo_postal: string;
  activa: number;
}

export default function DashboardPage({ params }: DashboardParams) {
  const router = useRouter();
  const [familia, setFamilia] = useState<Familia | null>(null);
  const [miembros, setMiembros] = useState<Miembro[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'familia' | 'direccion'>('familia');

  useEffect(() => {
    const socioData = sessionStorage.getItem('socio');
    if (!socioData) {
      router.push('/');
      return;
    }

    const parsed = JSON.parse(socioData);
    // Si los datos incluyen familia, usarlo directamente
    if (parsed.familia) {
      setFamilia(parsed.familia);
      setMiembros(parsed.familia.miembros || []);
    } else {
      // Legacy support: buscar por id_familia si está disponible
      if (parsed.id_familia) {
        loadFamilia(parsed.id_familia);
      }
    }
    setLoading(false);
  }, [router]);

  const loadFamilia = async (familiaId: number) => {
    try {
      const response = await fetch(`/api/familias/${familiaId}`);
      if (!response.ok) {
        throw new Error('Error al cargar familia');
      }
      const data = await response.json();
      setFamilia(data.familia);
      setMiembros(data.familia.miembros || []);
    } catch (err) {
      console.error('Error loading familia:', err);
      setError('Error al cargar datos de la familia');
    } finally {
      setLoading(false);
    }
  };

  const loadMiembros = async (familiaId: number) => {
    try {
      const response = await fetch(`/api/miembros?id_familia=${familiaId}`);
      const data = await response.json();
      setMiembros(data);
    } catch (err) {
      console.error('Error loading miembros:', err);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('socio');
    router.push('/');
  };

  const handleSaveMiembro = () => {
    if (familia) {
      loadMiembros(familia.id);
    }
  };

  const [error, setError] = useState('');

  if (!familia && loading) return null;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Alma Venezuela Connect</h1>
            {familia && (
              <p className="text-blue-100">
                Familia: {familia.apellidos} | Bienvenido,
                {familia.miembros?.find(m => m.esPrincipal === 1)?.nombres} 
                {familia.miembros?.find(m => m.esPrincipal === 1)?.apellido1re}
              </p>
            )}
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded font-semibold transition"
          >
            Cerrar Sesión
          </button>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('familia')}
            className={`px-6 py-3 font-semibold rounded-lg transition ${
              activeTab === 'familia'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Grupo Familiar
          </button>
          <button
            onClick={() => setActiveTab('direccion')}
            className={`px-6 py-3 font-semibold rounded-lg transition ${
              activeTab === 'direccion'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Dirección
          </button>
        </div>

        {/* Contenido de Tabs */}
        {activeTab === 'familia' && (
          <div className="space-y-8">
            {/* Tabla de Asociados */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Miembros de la Familia</h2>

              {loading ? (
                <div className="text-center py-8">
                  <p className="text-gray-600">Cargando...</p>
                </div>
              ) : miembros.length === 0 ? (
                <div className="text-center py-8 bg-blue-50 rounded border border-blue-200">
                  <p className="text-gray-600 mb-4">No hay miembros familiares registrados</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100 border-b-2 border-gray-300">
                      <tr>
                        <th className="text-left px-4 py-2">Nombre</th>
                        <th className="text-left px-4 py-2">Documento</th>
                        <th className="text-left px-4 py-2">Apellidos</th>
                        <th className="text-left px-4 py-2">F. Nacimiento</th>
                        <th className="text-left px-4 py-2">Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {miembros.map((m) => (
                        <tr key={m.id} className={m.esPrincipal === 1 ? 'bg-red-50 font-semibold' : 'hover:bg-gray-50'}>
                          <td className="px-4 py-2 border-b">{m.nombres}</td>
                          <td className="px-4 py-2 border-b">{m.numero_documento}</td>
                          <td className="px-4 py-2 border-b">{m.apellido1re} {m.apellido2do}</td>
                          <td className="px-4 py-2 border-b">{new Date(m.fecha_nacimiento).toLocaleDateString('es-ES')}</td>
                          <td className="px-4 py-2 border-b">
                            <span className={m.esPrincipal === 1 ? 'bg-yellow-200 px-2 py-1 rounded text-xs font-semibold' : 'text-gray-600'}>
                              {m.esPrincipal === 1 ? 'Principal' : 'Miembro'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Formulario para agregar miembro */}
            {familia && <MiembroForm id_familia={familia.id} onSave={handleSaveMiembro} />}
          </div>
        )}

        {activeTab === 'direccion' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Dirección del Grupo</h2>
            <p className="text-gray-600">Sección de direcciones - en desarrollo</p>
          </div>
        )}
      </main>
    </div>
  );
}
