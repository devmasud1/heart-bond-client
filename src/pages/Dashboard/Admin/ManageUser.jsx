import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { toast } from "react-toastify";
import Swal from "sweetalert2";


const ManageUser = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const makePremium = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "make this user premium!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/make-premium/${id}`).then((res) => {
          if (res.data.modifiedCount) {
            toast.success("this user premium now", {
              position: "top-right",
              autoClose: 12,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
          refetch();
        });
      }
    });
    
  };
  const makeAdmin = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "make this user to admin!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/${id}`).then((res) => {
          if (res.data.modifiedCount) {
            toast.success("this user is admin now", {
              position: "top-right",
              autoClose: 12,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
          refetch();
        });
      }
    });
   
  };
  return (
    <div className="lg:p-8">
      <p className="text-xl font-medium mb-3 text-gray-500">Manage users:</p>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Action</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">
                  {user.status === "premium" ? (
                    <button
                      disabled
                      className="bg-zinc-600 hover:bg-zinc-500 hover:text-white text-slate-200 py-1 px-2 rounded"
                    >
                      premium member
                    </button>
                  ) : (
                    <button
                      onClick={() => makePremium(user._id)}
                      className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
                    >
                      make premium
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "admin" ? (
                    <button
                      disabled
                      className="bg-zinc-600 hover:bg-zinc-500 hover:text-white text-slate-200 py-1 px-2 rounded"
                    >
                      admin
                    </button>
                  ) : (
                    <button
                      onClick={() => makeAdmin(user._id)}
                      className="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 rounded"
                    >
                      make admin
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
export default ManageUser;
