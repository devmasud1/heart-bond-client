import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePremiumBioData = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: premiumBio = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: "BioData",
    queryFn: async () => {
      const res = await axiosPublic.get("/premium-bioData");
      return res.data;
    },
  });
  return [premiumBio, loading, refetch];
};
export default usePremiumBioData;
