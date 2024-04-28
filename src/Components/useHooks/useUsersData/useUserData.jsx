import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const useUserData = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['userData'],
    queryFn: async () => {
      const res = await fetch(
        `https://travel-zone-server-side.vercel.app/email/${email}`
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(data);
  return { data, isLoading, refetch };
};

export default useUserData;
