import { useQuery } from '@tanstack/react-query';

const UseAllSpotData = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/tourist-spot');
      const data = await res.json();
      return data;
    },
  });
  return { data, isLoading, refetch };
};

export default UseAllSpotData;
