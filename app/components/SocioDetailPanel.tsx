'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AddAsociadoModal } from './AddAsociadoModal';
import AddDireccionModal from './AddDireccionModal';

interface SocioDetail {
  id: number;
  id_socio: number;
  nombres: string;
  apellido1re: string;
  apellido2do: string;
  apellidos: string;
  miembroprincipal: boolean;
  id_admin: number;
}

interface Asociado {
  id: number;
  id_asociado: number;
  tipo_documento: string;
  numero_documento: string;
  nombres: string;
  apellido1re: string;
  apellido2do: string;
  fecha_nacimiento: string;
  genero: string;
  miembroPrincipal: boolean;
}

interface Direccion {
  id: number;
  id_tipo_via: number;
  nombre_via: string;
  numero: string;
  portal: string;
  piso: string;
  apartamento: string;
  pueblo: string;
  nombre_pueblo: string;
  codigo_postal: string;
  activa: boolean;
}

interface Stats {
  familyMembersCount: number;
  addressCount: number;
}

export function SocioDetailPanel({ socioId }: { socioId: number }) {
  const router = useRouter();
  const [socio, setSocio] = useState<SocioDetail | null>(null);
  const [asociados, setAsociados] = useState<Asociado[]>([]);
  const [direcciones, setDirecciones] = useState<Direccion[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'familia' | 'direcciones'>('familia');
  const [isEditing, setIsEditing] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(true);
  const [showAddAsociadoModal, setShowAddAsociadoModal] = useState(false);
  const [showAddDireccionModal, setShowAddDireccionModal] = useState(false);
  const [editData, setEditData] = useState({
    nombres: '',
    apellido1re: '',
    apellido2do: '',
  });

  useEffect(() => {
    // Verificar autenticación solo en el cliente
    if (typeof window === 'undefined') return;
    
    const adminData = sessionStorage.getItem('admin');
    if (!adminData) {
      setIsAuthorized(false);
      router.push('/');
      return;
    }
    
    setIsAuthorized(true);
    fetchSocioDetails();
  }, [router, socioId]);

  const fetchSocioDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/socios/${socioId}`);

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Error al obtener detalles');
      }

      const data = await response.json();
      setSocio(data.socio);
      setAsociados(data.asociados);
      setDirecciones(data.direcciones);
      setStats(data.stats);
      setEditData({
        nombres: data.socio.nombres,
        apellido1re: data.socio.apellido1re,
        apellido2do: data.socio.apellido2do,
      });
      setError('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
      console.error('Error fetching socio:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveEdit = async () => {
    try {
      const response = await fetch(`/api/socios/${socioId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Error al actualizar');
      }

      setIsEditing(false);
      fetchSocioDetails();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    }
  };

  const handleBack = () => {
    router.back();
  };

  if (!isAuthorized) {
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Cargando detalles del socio...</div>
      </div>
    );
  }

  if (!socio) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <button
            onClick={handleBack}
            className="mb-4 text-indigo-600 hover:text-indigo-900"
          >
            ← Volver
          </button>
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error || 'Socio no encontrado'}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={handleBack}
            className="mb-4 text-indigo-600 hover:text-indigo-900 font-medium"
          >
            ← Volver al Panel de Socios
          </button>
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-black font-medium">
                Detalles del Socio
              </h1>
              <p className="text-gray-600 mt-2">
                ID: {socio.id_socio}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">ID Admin:</p>
              <p className="font-medium">{socio.id_admin}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {/* Información General */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-black font-medium">Información General</h2>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-1 px-3 rounded text-sm"
              >
                Editar
              </button>
            )}
          </div>

          {isEditing ? (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombres
                  </label>
                  <input
                    type="text"
                    value={editData.nombres}
                    onChange={(e) =>
                      setEditData({ ...editData, nombres: e.target.value })
                    }
                    style={{ color: '#000', backgroundColor: '#f3f4f6', fontWeight: 600 }}
                    className="w-full px-3 py-2 border-2 border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Primer Apellido
                  </label>
                  <input
                    type="text"
                    value={editData.apellido1re}
                    onChange={(e) =>
                      setEditData({ ...editData, apellido1re: e.target.value })
                    }
                    style={{ color: '#000', backgroundColor: '#f3f4f6', fontWeight: 600 }}
                    className="w-full px-3 py-2 border-2 border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Segundo Apellido
                  </label>
                  <input
                    type="text"
                    value={editData.apellido2do}
                    onChange={(e) =>
                      setEditData({ ...editData, apellido2do: e.target.value })
                    }
                    style={{ color: '#000', backgroundColor: '#f3f4f6', fontWeight: 600 }}
                    className="w-full px-3 py-2 border-2 border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleSaveEdit}
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded"
                >
                  Guardar Cambios
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-400 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded"
                >
                  Cancelar
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-600">Nombres</p>
                <p className="text-lg font-medium">{socio.nombres}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Apellidos</p>
                <p className="text-lg font-medium">{socio.apellidos}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Estado</p>
                <span
                  className={`inline-block py-1 px-3 rounded-full text-sm font-medium ${
                    socio.miembroprincipal
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {socio.miembroprincipal ? 'Principal' : 'Secundario'}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Estadísticas */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-600 font-medium">Miembros de la Familia</p>
              <p className="text-3xl font-bold text-blue-900">{stats.familyMembersCount}</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="text-sm text-purple-600 font-medium">Direcciones Registradas</p>
              <p className="text-3xl font-bold text-purple-900">{stats.addressCount}</p>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('familia')}
            className={`px-4 py-2 font-medium rounded-lg transition ${
              activeTab === 'familia'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Grupo Familiar
          </button>
          <button
            onClick={() => setActiveTab('direcciones')}
            className={`px-4 py-2 font-medium rounded-lg transition ${
              activeTab === 'direcciones'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Direcciones
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'familia' && (
          <div className="space-y-4">
            {/* Botón para agregar asociado */}
            <button
              onClick={() => setShowAddAsociadoModal(true)}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition"
            >
              + Agregar Miembro
            </button>

            {/* Tabla de asociados */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
            {asociados.length === 0 ? (
              <div className="p-6 text-center text-gray-600">
                No hay miembros familiares registrados
              </div>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nombre
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Documento
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fecha Nacimiento
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Género
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Estado
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {asociados.map((a) => (
                    <tr key={a.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black font-medium">
                        {a.nombres} {a.apellido1re}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-medium">
                        {a.tipo_documento}: {a.numero_documento}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-medium">
                        {new Date(a.fecha_nacimiento).toLocaleDateString('es-ES')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-medium">
                        {a.genero === 'H' ? 'Mujer' : 'Hombre'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span
                          className={`py-1 px-2 rounded-full text-xs font-medium ${
                            a.miembroPrincipal
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {a.miembroPrincipal ? 'Principal' : 'Miembro'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            </div>
          </div>
        )}

        {activeTab === 'direcciones' && (
          <div className="space-y-4">
            {/* Botón para agregar dirección */}
            <button
              onClick={() => setShowAddDireccionModal(true)}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition flex items-center gap-2"
            >
              <span>+</span>
              Agregar Dirección
            </button>

            {/* Lista de direcciones */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
            {direcciones.length === 0 ? (
              <div className="p-6 text-center text-gray-600">
                No hay direcciones registradas
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {direcciones.map((d) => (
                  <div key={d.id} className="p-6 hover:bg-gray-50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Calle</p>
                        <p className="font-medium">
                          {d.nombre_via} {d.numero}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Código Postal</p>
                        <p className="font-medium">{d.codigo_postal}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Localidad</p>
                        <p className="font-medium">{d.nombre_pueblo}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Estado</p>
                        <span
                          className={`inline-block py-1 px-2 rounded text-xs font-medium ${
                            d.activa
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {d.activa ? 'Activa' : 'Inactiva'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            </div>
          </div>
        )}

        {/* Modal para agregar asociado */}
        <AddAsociadoModal
          isOpen={showAddAsociadoModal}
          onClose={() => setShowAddAsociadoModal(false)}
          onSuccess={fetchSocioDetails}
          socioId={socioId}
        />

        {/* Modal para agregar dirección */}
        <AddDireccionModal
          isOpen={showAddDireccionModal}
          onClose={() => setShowAddDireccionModal(false)}
          onSuccess={fetchSocioDetails}
          socioId={socioId}
        />
      </div>
    </div>
  );
}
