import { useQuery } from '@tanstack/react-query';

const UseCountryData = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['country'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/countries');
      const data = await res.json();
      return data;
    },
  });
  return { data, isLoading, refetch };
};

export default UseCountryData;
