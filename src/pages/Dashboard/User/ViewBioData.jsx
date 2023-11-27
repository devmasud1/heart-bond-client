import { Button, Card, Table } from "flowbite-react";

import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import useAuth from "../../../hook/useAuth";
import { useQuery } from "@tanstack/react-query";

const ViewBioData = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const { data: biodatas = [], refetch } = useQuery({
    queryKey: ["biodatas"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/biodata?email=${user.email}`);
      return res.data;
    },
  });
  //console.log(biodatas);
  //console.log(user.email);

  const handleMakeBioPremium = (biodata) => {
    const premiumInfo = {
      bioDataId: biodata?.Biodata_Id,
      name: biodata?.Name,
      email: biodata?.Email,
    };

    //console.log(premiumInfo);
    Swal.fire({
      title: "Are you sure?",
      text: "Make your biodata premium.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosPublic.post(
            `/biodata/make-premium`,
            premiumInfo
          );
          if (res.data.insertedId) {
            toast.success("sent biodata request for premium", {
              position: "top-right",
              autoClose: 3000,
            });
            refetch();
          } else {
            toast.error("Failed to sent request");
          }
        } catch (error) {
          console.error("Error marking biodata as premium:", error);
          toast.error("An error occurred while marking biodata as premium");
        }
      }
    });
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Your added biotata: </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {biodatas.map((biodata, idx) => (
          <Card key={idx} className="">
            <img
              src={biodata?.Profile_Image}
              alt="image"
              className="h-[250px] object-cover"
            />
            <div className="flex justify-around gap-4">
              <div className="w-1/2">
                <p>Bio ID:</p>
                <p>Name</p>
                <p>Age</p>
                <p>Occupation</p>
                <p>Permanent Address</p>
                <p>Email</p>
                <p>Phone</p>

                <p>Date of Birth</p>
                <p>Expected Partner Age</p>
                <p>Expected Partner Height</p>
                <p>Expected Partner Weight</p>
                <p>Father's Name</p>
                <p>Mother's Name</p>
                <p>Present Division</p>
                <p>Race</p>
                <p>Selected Height</p>
                <p>Selected Weight</p>
              </div>
              <div className="w-1/2">
                <p>{biodata?.Biodata_Id}</p>
                <p>{biodata?.Name}</p>
                <p>{biodata?.Age}</p>
                <p>{biodata?.Occupation}</p>
                <p>{biodata?.Permanent_Division}</p>
                <p>{biodata?.Email}</p>
                <p>{biodata?.Phone}</p>

                <p>{biodata?.dataOfBirth}</p>
                <p>{biodata?.expectedPartnerAge}</p>
                <p>{biodata?.expectedPartnerHeight}</p>
                <p>{biodata?.expectedPartnerWeight}</p>
                <p>{biodata?.fatherName}</p>
                <p>{biodata?.motherName}</p>
                <p>{biodata?.presentDivision}</p>
                <p>{biodata?.race}</p>
                <p>{biodata?.selectedHeight}</p>
                <p>{biodata?.selectedWeight}</p>
              </div>
            </div>
            <Button onClick={() => handleMakeBioPremium(biodata)}>
              Request for premium
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default ViewBioData;

{
  /* <div className="overflow-x-auto">
      <Table>
          <Table.Head>
            <Table.HeadCell>Biodata Id</Table.HeadCell>
            <Table.HeadCell>Image</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Age</Table.HeadCell>
            <Table.HeadCell>Occupation</Table.HeadCell>
            <Table.HeadCell>Permanent Address</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Phone</Table.HeadCell>
           
            <Table.HeadCell>Date of Birth</Table.HeadCell>
            <Table.HeadCell>Expected Partner Age</Table.HeadCell>
            <Table.HeadCell>Expected Partner Height</Table.HeadCell>
            <Table.HeadCell>Expected Partner Weight</Table.HeadCell>
            <Table.HeadCell>Father's Name</Table.HeadCell>
            <Table.HeadCell>Mother's Name</Table.HeadCell>
            <Table.HeadCell>Present Division</Table.HeadCell>
            <Table.HeadCell>Race</Table.HeadCell>
            <Table.HeadCell>Selected Height</Table.HeadCell>
            <Table.HeadCell>Selected Weight</Table.HeadCell>
            <Table.HeadCell>Make Premium</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {biodatas.map((biodata, idx) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={idx}
              >
                <Table.Cell>{biodata?.Biodata_Id}</Table.Cell>
                <Table.Cell>
                  <img src={biodata?.Profile_Image} alt="Profile" />
                </Table.Cell>
                <Table.Cell>{biodata?.Name}</Table.Cell>
                <Table.Cell>{biodata?.Age}</Table.Cell>
                <Table.Cell>{biodata?.Occupation}</Table.Cell>
                <Table.Cell>{biodata?.Permanent_Division}</Table.Cell>
                <Table.Cell>{biodata?.Email}</Table.Cell>
                <Table.Cell>{biodata?.Phone}</Table.Cell>
                
                <Table.Cell>{biodata?.dataOfBirth}</Table.Cell>
                <Table.Cell>{biodata?.expectedPartnerAge}</Table.Cell>
                <Table.Cell>{biodata?.expectedPartnerHeight}</Table.Cell>
                <Table.Cell>{biodata?.expectedPartnerWeight}</Table.Cell>
                <Table.Cell>{biodata?.fatherName}</Table.Cell>
                <Table.Cell>{biodata?.motherName}</Table.Cell>
                <Table.Cell>{biodata?.presentDivision}</Table.Cell>
                <Table.Cell>{biodata?.race}</Table.Cell>
                <Table.Cell>{biodata?.selectedHeight}</Table.Cell>
                <Table.Cell>{biodata?.selectedWeight}</Table.Cell>
                <Table.Cell>
                  <Button
                    onClick={() => {
                      handleMakeBioPremium(biodata._id);
                    }}
                    className="text-slate-100"
                  >
                    Make Premium
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div> */
}
