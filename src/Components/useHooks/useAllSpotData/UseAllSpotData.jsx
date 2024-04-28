import { useQuery } from '@tanstack/react-query';

const UseAllSpotData = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const res = await fetch(
        'https://travel-zone-server-side.vercel.app/tourist-spot'
      );
      const data = await res.json();
      return data;
    },
  });
  return { data, isLoading, refetch };
};

export default UseAllSpotData;
