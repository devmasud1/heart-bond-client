import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAnalytics = () => {
    const axiosSecure = useAxiosSecure();

  const { data: analytics = {} } = useQuery({
    queryKey: ["admin-analytics"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-analytics");
      return res.data;
    },
  });
    return {analytics}
};
export default useAnalytics;