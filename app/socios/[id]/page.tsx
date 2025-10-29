'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SocioDetailPanel } from '@/app/components/SocioDetailPanel';

export default function SocioDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [socioId, setSocioId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unwrapParams = async () => {
      const { id } = await params;
      const parsedId = parseInt(id);
      
      if (isNaN(parsedId)) {
        setIsLoading(false);
        return;
      }
      
      setSocioId(parsedId);
      setIsLoading(false);
    };
    
    unwrapParams();
  }, [params]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Cargando...</div>
      </div>
    );
  }

  if (socioId === null || isNaN(socioId)) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">ID de socio inválido</div>
      </div>
    );
  }

  return <SocioDetailPanel socioId={socioId} />;
}
