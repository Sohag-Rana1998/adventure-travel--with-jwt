import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const useUserData = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['user1'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/tourist-spot/${email}`);
      const data = await res.json();
      return data;
    },
  });
  return { data, isLoading, refetch };
};

export default useUserData;
