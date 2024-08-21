import { useQuery } from "@tanstack/react-query";

const UseTestimonials = () => {
  const {
    data: reviews = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["customers"],
    queryFn: async () => {
      const res = await fetch(
        "https://adventure-travel-server.vercel.app/testimonials"
      );
      const data = await res.json();
      return data;
    },
  });
  return { reviews, isLoading, refetch };
};

export default UseTestimonials;
