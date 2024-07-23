'use client';

import { useUser } from '@/store/store';
import { Devices } from '@/components';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const FavoritesPage = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page'));
  const [userFavorites, getUserFavorites, loading, error] = useUser((state) => [
    state.userFavorites,
    state.getUserFavorites,
    state.loading,
    state.error
  ]);

  useEffect(() => {
    getUserFavorites(page || 1);
  }, [page]);

  return (
    <div className="favorites-page">
      <Devices devices={userFavorites} loading={loading} />
    </div>
  );
};

export default FavoritesPage;
