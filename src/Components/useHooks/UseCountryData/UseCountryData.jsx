import { useQuery } from '@tanstack/react-query';

const UseCountryData = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['country'],
    queryFn: async () => {
      const res = await fetch(
        'https://travel-zone-server-side.vercel.app/countries'
      );
      const data = await res.json();
      return data;
    },
  });
  return { data, isLoading, refetch };
};

export default UseCountryData;
