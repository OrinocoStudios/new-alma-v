'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    id_socio: '',
    numero_documento: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.error || 'Error en login');
        setLoading(false);
        return;
      }

      const data = await response.json();
      
      // Guardar datos en sessionStorage
      sessionStorage.setItem('socio', JSON.stringify(data.socio));
      
      // Redirigir al dashboard
      router.push(`/dashboard/${data.socio.id}`);
    } catch {
      setError('Error de conexión');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Alma Venezuela
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Conexión de Socios
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="id_socio" className="block text-sm font-medium text-gray-700">
              ID de Socio
            </label>
            <input
              id="id_socio"
              name="id_socio"
              type="text"
              value={formData.id_socio}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ej: 001"
              required
            />
          </div>

          <div>
            <label htmlFor="numero_documento" className="block text-sm font-medium text-gray-700">
              Número de Documento
            </label>
            <input
              id="numero_documento"
              name="numero_documento"
              type="text"
              value={formData.numero_documento}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ej: 12345678A"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            {loading ? 'Ingresando...' : 'Ingresar'}
          </button>
        </form>
      </div>
    </div>
  );
}
