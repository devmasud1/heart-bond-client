import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../../../hook/useAxiosSecure";
import { toast } from "react-toastify";


const ApproveContactRequest = () => {
  const axiosSecure = useAxiosSecure();

  const { data: contactRequest = [], refetch } = useQuery({
    queryKey: ["contactRequest"],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get("/contact-request");
        return res.data;
      } catch (error) {
        throw new Error("Failed to fetch contact requests");
      }
    },
  });

  const approveRequest = (id) => {
    axiosSecure.patch(`/approve-request/${id}`).then((res) => {
      if (
        res.data.modifiedCount > 0 
      ) {
        toast.success("request status update", {
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
   
      <p className="text-xl font-medium mb-3 text-gray-500">Contact request: {contactRequest.length}</p>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Biodata ID</th>
              <th className="border p-2">Approved contact request</th>
            </tr>
          </thead>
          <tbody>
            {contactRequest.map((user, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.bioDataId}</td>
                <td className="border p-2">
                  {user.status === "approved" ? (
                    <button
                      disabled
                      className="bg-zinc-600 text-slate-200 py-1 px-2 rounded"
                    >
                     Approved
                    </button>
                  ) : (
                    <button
                      onClick={() => approveRequest(user.bioDataId)}
                      className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
                    >
                      Approve
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
export default ApproveContactRequest;
