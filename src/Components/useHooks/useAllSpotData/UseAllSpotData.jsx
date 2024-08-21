import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UseAllSpotData = (itemsPerPage, currentPage, sort) => {
  const {
    data = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-tourist-spots"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/tourist-spot?size=${itemsPerPage}&page=${currentPage}&sort=${sort}`
      );

      return data;
    },
  });
  return { data, isLoading, refetch };
};

export default UseAllSpotData;
