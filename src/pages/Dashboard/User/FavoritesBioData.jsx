import { Button, Table } from "flowbite-react";
import { MdDeleteForever } from "react-icons/md";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import { AuthContext } from "../../../hook/provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const FavoritesBioData = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);

  const { data: favBioData = [], refetch } = useQuery({
    queryKey: ["favBioData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/favorite?email=${user.email}`);
      return res.data;
    },
  });

  const handleFavItemDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/favorite/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            toast.success("Delete success", {
              position: "top-right",
              autoClose: 1000,
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
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>Biodata Id</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>

            <Table.HeadCell>Permanent Address</Table.HeadCell>
            <Table.HeadCell>Occupation</Table.HeadCell>
            <Table.HeadCell>Delete</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {favBioData.map((favData, idx) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={idx}
              >
                <Table.Cell>{favData?.biodataId}</Table.Cell>
                <Table.Cell>{favData?.name}</Table.Cell>

                <Table.Cell>{favData?.permanentAddress}</Table.Cell>
                <Table.Cell>{favData?.Occupation}</Table.Cell>
                <Table.Cell>
                  <Button
                    onClick={() => {
                      handleFavItemDelete(favData._id);
                    }}
                    className="text-slate-100"
                  >
                    <MdDeleteForever className="text-xl" />
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default FavoritesBioData;
