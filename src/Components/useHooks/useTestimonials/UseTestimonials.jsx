import { useQuery } from '@tanstack/react-query';

const UseTestimonials = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['customers'],
    queryFn: async () => {
      const res = await fetch(
        'https://travel-zone-server-side.vercel.app/testimonials'
      );
      const data = await res.json();
      return data;
    },
  });
  return { data, isLoading, refetch };
};

export default UseTestimonials;
