'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LoginAdminSchema } from '@/app/lib/validations';

export function AdminLoginForm() {
  const router = useRouter();
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Validar antes de enviar
      const result = LoginAdminSchema.safeParse({ usuario, password });
      
      if (!result.success) {
        const firstError = Object.values(result.error.flatten().fieldErrors)[0]?.[0];
        setError(firstError || 'Validación fallida');
        setLoading(false);
        return;
      }

      // Enviar solicitud de login
      const response = await fetch('/api/auth/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Error en la autenticación');
        setLoading(false);
        return;
      }

      // Guardar sesión en sessionStorage
      sessionStorage.setItem('admin', JSON.stringify(data.admin));

      // Redirigir al panel de socios
      router.push('/socios');
    } catch (err) {
      setError('Error al conectar con el servidor');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Alma Venezuela
            </h1>
            <p className="text-gray-600">Portal Administrativo</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Usuario */}
            <div>
              <label htmlFor="usuario" className="block text-sm font-medium text-gray-700 mb-2">
                Usuario
              </label>
              <input
                id="usuario"
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                placeholder="Ingrese su usuario"
                style={{ color: '#000', backgroundColor: '#f3f4f6' }}
                className="w-full px-4 py-2 border-2 border-gray-400 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition font-semibold"
                disabled={loading}
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingrese su contraseña"
                style={{ color: '#000', backgroundColor: '#f3f4f6' }}
                className="w-full px-4 py-2 border-2 border-gray-400 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition font-semibold"
                disabled={loading}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
            >
              {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-xs text-gray-500 mt-6">
            © 2024 Alma Venezuela. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}
