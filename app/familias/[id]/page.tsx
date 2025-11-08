'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { FamiliaMembersList } from '@/app/components/FamiliaMembersList';
import { FamiliaMemberForm } from '@/app/components/FamiliaMemberForm';

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
  numero_telefonico: string | null;
  ocupacion: string | null;
  profesion: string | null;
  rango_ingresos: string | null;
  esPrincipal: number;
  alimentacion1: number;
}

interface Familia {
  id: number;
  id_socio: number;
  id_admin: number;
  apellidos: string;
  socioPrincipal: {
    id: number;
    id_socio: number;
    nombres: string;
    apellido1re: string;
    apellido2do: string;
    usuario: string;
  } | null;
  miembros: Miembro[];
}

export default function FamiliaDetailPage() {
  const router = useRouter();
  const params = useParams();
  const familiaId = params?.id;
  console.log('FamiliaDetailPage received ID:', familiaId);
  console.log('FamiliaDetailPage params:', params);

  const [admin, setAdmin] = useState<any>(null);
  const [familia, setFamilia] = useState<Familia | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    // Verificar sesión de admin
    const adminData = sessionStorage.getItem('admin');
    if (!adminData) {
      router.push('/');
      return;
    }

    try {
      const parsed = JSON.parse(adminData);
      setAdmin(parsed);
    } catch (err) {
      console.error('Error parsing admin data:', err);
      router.push('/');
      return;
    }
  }, [router]);

  useEffect(() => {
    if (!admin || !familiaId) return;

    const fetchFamilia = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/familias/${familiaId}`);

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Error al obtener familia');
        }

        const data = await response.json();
        setFamilia(data.family);
        setError('');
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
        console.error('Error fetching familia:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFamilia();
  }, [admin, familiaId]);

  if (!admin) {
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="text-center py-12">
          <p className="text-gray-600">Cargando detalles de familia...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => router.push('/socios')}
            className="text-indigo-600 hover:text-indigo-800 mb-6"
          >
            ← Volver a Familias
          </button>
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        </div>
      </div>
    );
  }

  if (!familia) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => router.push('/socios')}
            className="text-indigo-600 hover:text-indigo-800 mb-6"
          >
            ← Volver a Familias
          </button>
          <div className="text-center text-gray-600">
            Familia no encontrada
          </div>
        </div>
      </div>
    );
  }

  const handleMemberAdded = () => {
    // Recargar la familia
    const fetchFamilia = async () => {
      try {
        const response = await fetch(`/api/familias/${familiaId}`);
        if (response.ok) {
          const data = await response.json();
          setFamilia(data.family);
        }
      } catch (err) {
        console.error('Error refetching familia:', err);
      }
    };
    fetchFamilia();
    setShowAddForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Familia: {familia.apellidos}
              </h1>
              {familia.socioPrincipal && (
                <p className="text-gray-600 mt-1">
                  Miembro Principal: {familia.socioPrincipal.nombres} {familia.socioPrincipal.apellido1re}
                </p>
              )}
            </div>
            <button
              onClick={() => router.push('/socios')}
              className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition"
            >
              ← Volver a Familias
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Add Member Button */}
        <div className="mb-6">
          {!showAddForm ? (
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition"
            >
              + Agregar Miembro
            </button>
          ) : (
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">Agregar Nuevo Miembro</h2>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <FamiliaMemberForm
                familiaId={familia.id}
                onMemberAdded={handleMemberAdded}
                onCancel={() => setShowAddForm(false)}
              />
            </div>
          )}
        </div>

        {/* Members List */}
        <FamiliaMembersList
          familia={familia}
          onMemberDeleted={handleMemberAdded}
        />
      </div>
    </div>
  );
}