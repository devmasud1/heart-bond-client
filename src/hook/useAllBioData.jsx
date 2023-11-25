import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllBioData = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: allBioData = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: "allBioData",
    queryFn: async () => {
      const res = await axiosPublic.get("/allBioData");
      return res.data;
    },
  });
  return [allBioData, loading, refetch];
};
export default useAllBioData;
