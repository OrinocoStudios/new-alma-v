'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AddSocioForm } from './AddSocioForm';

interface Socio {
  id: number;
  id_socio: number;
  nombres: string;
  apellido1re: string;
  apellido2do: string;
  apellidos: string;
  miembroprincipal: boolean;
  familyMembersCount: number;
}

interface Admin {
  id: number;
  usuario: string;
  nombres: string;
  apellido1re: string;
  apellido2do: string;
  rol: string;
}

export function SociosPanel() {
  const router = useRouter();
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [socios, setSocios] = useState<Socio[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    // Obtener datos del admin desde sessionStorage
    const sessionAdmin = sessionStorage.getItem('admin');
    if (!sessionAdmin) {
      router.push('/');
      return;
    }

    try {
      const adminData = JSON.parse(sessionAdmin);
      setAdmin(adminData);
      fetchSocios(adminData.id);
    } catch (err) {
      console.error('Error parsing admin data:', err);
      setError('Error al cargar sesión');
      router.push('/');
    }
  }, [router]);

  const fetchSocios = async (adminId: number) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/socios?adminId=${adminId}`);

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Error al obtener socios');
      }

      const data = await response.json();
      setSocios(data.socios);
      setError('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
      console.error('Error fetching socios:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSocioAdded = () => {
    setShowAddForm(false);
    if (admin) {
      fetchSocios(admin.id);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin');
    router.push('/');
  };

  const handleNavigateToSocio = (socioId: number) => {
    router.push(`/socios/${socioId}`);
  };

  if (!admin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Panel de Socios
              </h1>
              <p className="text-gray-600 mt-1">
                Administrador: {admin.nombres} {admin.apellido1re}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {/* Add Socio Button */}
        <div className="mb-6">
          {!showAddForm ? (
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition"
            >
              + Agregar Nuevo Socio
            </button>
          ) : (
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">Crear Nuevo Socio</h2>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <AddSocioForm
                adminId={admin.id}
                onSocioAdded={handleSocioAdded}
              />
            </div>
          )}
        </div>

        {/* Socios Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {loading ? (
            <div className="p-6 text-center text-gray-600">
              Cargando socios...
            </div>
          ) : socios.length === 0 ? (
            <div className="p-6 text-center text-gray-600">
              No hay socios registrados. {showAddForm ? '' : 'Haz clic en "Agregar Nuevo Socio" para comenzar.'}
            </div>
          ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nombre
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Apellidos
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Miembros Familia
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {socios.map((socio) => (
                  <tr key={socio.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {socio.id_socio}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {socio.nombres}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {socio.apellidos}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <span className="bg-blue-100 text-blue-800 py-1 px-2 rounded-full text-xs">
                        {socio.familyMembersCount}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`py-1 px-2 rounded-full text-xs font-medium ${
                        socio.miembroprincipal
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {socio.miembroprincipal ? 'Principal' : 'Secundario'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => handleNavigateToSocio(socio.id)}
                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                      >
                        Ver Detalles
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
