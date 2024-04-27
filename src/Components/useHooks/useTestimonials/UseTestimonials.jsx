import { useQuery } from '@tanstack/react-query';

const UseTestimonials = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['customers'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/testimonials');
      const data = await res.json();
      return data;
    },
  });
  return { data, isLoading, refetch };
};

export default UseTestimonials;
