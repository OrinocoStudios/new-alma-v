'use client';

import { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { CreateFamiliaForm } from './CreateFamiliaForm';

interface Familia {
  id: number;
  id_socio?: number;
  apellidos: string;
  id_direccion?: number;
  socioPrincipal?: {
    id: number;
    id_socio?: number;
    nombres: string;
    apellido1re: string;
    apellido2do: string;
    usuario?: string;
  };
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

export function FamiliasPanel() {
  const router = useRouter();
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [familias, setFamilias] = useState<Familia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  // Calcular próximo ID de socio consecutivo
  const nextSocioId = useMemo(() => {
    if (!familias || familias.length === 0) return 1;
    const maxId = Math.max(...familias.filter(f => f.id_socio).map(f => f.id_socio!));
    return maxId + 1;
  }, [familias]);

  const fetchFamilias = async (adminId: number) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/familias?adminId=${adminId}`);

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Error al obtener familias');
      }

      const data = await response.json();
      setFamilias(data.familias);
      setError('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
      console.error('Error fetching familias:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleFamiliaAdded = () => {
    setShowAddForm(false);
    if (admin) {
      fetchFamilias(admin.id);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin');
    router.push('/');
  };

  const handleNavigateToFamilia = (familiaId: number) => {
    console.log('Navigating to family with ID:', familiaId);
    console.log('Family object:', familias.find(f => f.id === familiaId));
    router.push(`/familias/${familiaId}`);
  };

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
      fetchFamilias(adminData.id);
    } catch (err) {
      console.error('Error parsing admin data:', err);
      setError('Error al cargar sesión');
      router.push('/');
    }
  }, [router]);

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
                Panel de Familias
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

        {/* Add Familia Button */}
        <div className="mb-6">
          {!showAddForm ? (
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition"
            >
              + Agregar Nueva Familia
            </button>
          ) : (
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">Crear Nueva Familia</h2>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <CreateFamiliaForm
                adminId={admin.id}
                nextSocioId={nextSocioId}
                onFamiliaAdded={handleFamiliaAdded}
              />
            </div>
          )}
        </div>

        {/* Familias Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {loading ? (
            <div className="p-6 text-center text-gray-600">
              Cargando familias...
            </div>
          ) : familias.length === 0 ? (
            <div className="p-6 text-center text-gray-600">
              No hay familias registradas. {showAddForm ? '' : 'Haz clic en \"Agregar Nueva Familia\" para comenzar.'}
            </div>
          ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Apellidos de Familia
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Miembro Principal
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Miembros
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {familias.map((familia) => (
                  <tr key={familia.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {familia.id_socio || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {familia.apellidos}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {familia.socioPrincipal ? 
                        `${familia.socioPrincipal.nombres} ${familia.socioPrincipal.apellido1re}` : 
                        'No asignado'
                      }
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <span className="bg-blue-100 text-blue-800 py-1 px-2 rounded-full text-xs">
                        {familia.familyMembersCount}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => handleNavigateToFamilia(familia.id)}
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