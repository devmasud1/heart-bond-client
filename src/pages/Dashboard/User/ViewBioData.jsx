import { Button, Card } from "flowbite-react";
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

  const handleMakeBioPremium = (biodata) => {
    const premiumInfo = {
      bioDataId: biodata?.Biodata_Id,
      name: biodata?.Name,
      email: biodata?.Email,
    };

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
            {biodata?.status === "premium" ? (
              <Button disabled>Premium</Button>
            ) : (
              <Button onClick={() => handleMakeBioPremium(biodata)}>
                Make Premium
              </Button>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};
export default ViewBioData;