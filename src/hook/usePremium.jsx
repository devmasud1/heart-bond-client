import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from './useAxiosPublic';
import useAuth from "./useAuth";

const usePremium = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: isPremium, isPending: isPremiumLoading } = useQuery({
    queryKey: [user?.email, "isPremium"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/user/${user?.email}`);
      return res.data?.premium;
    },
  });
  return [isPremium, isPremiumLoading];
};
export default usePremium;
