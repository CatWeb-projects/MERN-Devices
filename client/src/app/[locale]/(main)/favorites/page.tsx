'use client';

import { useUser } from '@/store/store';
import { Devices } from '@/components';

const FavoritesPage = () => {
  const [userFavorites, loading, error] = useUser((state) => [
    state.userFavorites,
    state.loading,
    state.error
  ]);

  console.log(userFavorites, 'profile');
  return (
    <div className="favorites-page">
      <Devices devices={userFavorites} loading={loading} />
    </div>
  );
};

export default FavoritesPage;
