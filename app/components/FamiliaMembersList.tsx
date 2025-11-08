'use client';

import { useState } from 'react';

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
  miembros: Miembro[];
  socioPrincipal?: any;
}

interface Props {
  familia: Familia;
  onMemberDeleted: () => void;
}

export function FamiliaMembersList({ familia, onMemberDeleted }: Props) {
  const [selectedMember, setSelectedMember] = useState<Miembro | null>(null);
  const [memberToDelete, setMemberToDelete] = useState<Miembro | null>(null);
  const [loading, setLoading] = useState(false);

  const handleDeleteConfirm = async () => {
    if (!memberToDelete) return;

    try {
      setLoading(true);
      const response = await fetch(`/api/miembros/${memberToDelete.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const data = await response.json();
        alert(`Error al eliminar: ${data.error || 'Error desconocido'}`);
        return;
      }

      alert('Miembro eliminado correctamente');
      setMemberToDelete(null);
      onMemberDeleted();
    } catch (err) {
      alert(`Error: ${err instanceof Error ? err.message : 'Error desconocido'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
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
              Teléfono
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {familia.miembros.length === 0 ? (
            <tr>
              <td colSpan={4} className="px-6 py-4 text-center text-gray-600">
                No hay miembros registrados en esta familia
              </td>
            </tr>
          ) : (
            familia.miembros.map((miembro) => (
              <tr key={miembro.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="font-medium">
                    {miembro.nombres} {miembro.apellido1re} {miembro.apellido2do}
                  </div>
                  {miembro.esPrincipal === 1 && (
                    <span className="inline-block mt-1 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                      Principal
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {miembro.tipo_documento}: {miembro.numero_documento}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {miembro.numero_telefonico || '-'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => setSelectedMember(miembro)}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    Ver Detalle
                  </button>
                  {miembro.esPrincipal === 0 && (
                    <button
                      onClick={() => setMemberToDelete(miembro)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Eliminar
                    </button>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Modal de Detalle */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full mx-4 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Detalle del Miembro</h2>
              <button
                onClick={() => setSelectedMember(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Nombres</label>
                <p className="text-gray-900">{selectedMember.nombres}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Apellido Primero</label>
                <p className="text-gray-900">{selectedMember.apellido1re}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Apellido Segundo</label>
                <p className="text-gray-900">{selectedMember.apellido2do}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Tipo Documento</label>
                <p className="text-gray-900">{selectedMember.tipo_documento}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Número Documento</label>
                <p className="text-gray-900">{selectedMember.numero_documento}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Sexo</label>
                <p className="text-gray-900">{selectedMember.genero === 'M' ? 'Masculino' : 'Femenino'}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Fecha Nacimiento</label>
                <p className="text-gray-900">{selectedMember.fecha_nacimiento}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Teléfono</label>
                <p className="text-gray-900">{selectedMember.numero_telefonico || 'No especificado'}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Ocupación</label>
                <p className="text-gray-900">{selectedMember.ocupacion || 'No aplica'}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Profesión</label>
                <p className="text-gray-900">{selectedMember.profesion || 'No aplica'}</p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedMember(null)}
                className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Confirmación de Eliminación */}
      {memberToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-md w-full mx-4 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Confirmar Eliminación</h2>
            <p className="text-gray-600 mb-6">
              ¿Estás seguro de que deseas eliminar a {memberToDelete.nombres} {memberToDelete.apellido1re} de la familia?
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setMemberToDelete(null)}
                className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition"
                disabled={loading}
              >
                Cancelar
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition disabled:bg-red-400"
                disabled={loading}
              >
                {loading ? 'Eliminando...' : 'Eliminar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}