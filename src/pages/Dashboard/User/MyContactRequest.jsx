import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import useAuth from "../../../hook/useAuth";
import { Button, Table } from "flowbite-react";
import { MdDeleteForever } from "react-icons/md";
import useAllBioData from "../../../hook/useAllBioData";
import { toast } from "react-toastify";

const MyContactRequest = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const [allBioData] = useAllBioData();

  const {
    data: contactRequest,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["contactRequest", user?.email],
    queryFn: async () => {
      try {
        const res = await axiosPublic.get(`/contact-request/${user?.email}`);
        return res.data;
      } catch (error) {
        throw new Error("Failed to load data");
      }
    },
  });

  const handleReqItemDelete = (id) => {
    axiosPublic.delete(`/delete-request/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        toast.success("delete your request", {
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
    <div>
      <h3 className="text-xl font-semibold mb-4">Your contact request: </h3>
      <div>
        <div className="overflow-x-auto">
          <Table>
            <Table.Head>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Biodata Id</Table.HeadCell>

              <Table.HeadCell>Status</Table.HeadCell>
              <Table.HeadCell>Mobile No</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {contactRequest?.map((reqData, idx) => (
                <Table.Row
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  key={idx}
                >
                  <Table.Cell>{reqData?.find_name}</Table.Cell>
                  <Table.Cell>{reqData?.bioDataId}</Table.Cell>
                  <Table.Cell>{reqData?.status}</Table.Cell>
                  <Table.Cell>
                    {reqData?.status === "approved"
                      ? reqData?.find_phone
                      : "wait for approval"}
                  </Table.Cell>
                  <Table.Cell>
                    {reqData?.status === "approved"
                      ? reqData?.find_email
                      : "wait for approval"}
                  </Table.Cell>

                  <Table.Cell>
                    <Button
                      onClick={() => {
                        handleReqItemDelete(reqData._id);
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
    </div>
  );
};
export default MyContactRequest;
