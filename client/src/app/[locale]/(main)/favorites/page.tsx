'use client';

import { useUser } from '@/store/store';
import { Devices } from '@/components';

const FavoritesPage = () => {
  const [profile, loading, error] = useUser((state) => [state.profile, state.loading, state.error]);

  console.log(profile, 'profile');
  return (
    <div className="favorites-page">
      <Devices devices={profile?.user?.favorites} />
    </div>
  );
};

export default FavoritesPage;
