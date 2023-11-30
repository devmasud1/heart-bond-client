import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../../../hook/useAxiosSecure";
import { toast } from "react-toastify";

const ApprovedPremium = () => {
  const axiosSecure = useAxiosSecure();

  const { data: premiumData = [], refetch, isLoading } = useQuery({
    queryKey: ["premiumData"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allPreRequest");
      return res.data;
    },
  });


  const makePremium = (id) => {
    axiosSecure.patch(`/make-premium/${id}`).then((res) => {
      if (
        res.data.result.modifiedCount > 0 ||
        res.data.result2.modifiedCount > 0
      ) {
        toast.success("member status update", {
          position: "top-right",
          autoClose: 12,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        refetch();
      }
    });
  };

  return (
    <div className="lg:p-8">
      <p className="text-xl font-medium mb-3 text-gray-500">Premium request:</p>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Biodata ID</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {premiumData.map((user, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.bioDataId}</td>
                <td className="border p-2">
                  {user.status === "premium" ? (
                    <button
                      disabled
                      className="bg-zinc-600  text-slate-200 py-1 px-2 rounded"
                    >
                      premium member
                    </button>
                  ) : (
                    <button
                      onClick={() => makePremium(user.bioDataId)}
                      className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
                    >
                      make premium
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovedPremium;
