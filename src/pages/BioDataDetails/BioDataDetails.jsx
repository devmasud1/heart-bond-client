import { Link, useLoaderData } from "react-router-dom";
import { Button, Card } from "flowbite-react";
import useAllBioData from "../../hook/useAllBioData";
import { MdFavorite } from "react-icons/md";
import PageBanner from "../../components/PageBanner/PageBanner";
import { useContext, useState } from "react";
import { AuthContext } from "../../hook/provider/AuthProvider";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { toast } from "react-toastify";

const BioDataDetails = () => {
  const singleData = useLoaderData();
  const [allBioData] = useAllBioData();
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const {
    Age,
    Biodata_Id,
    Biodata_Type,
    Name,
    Email,
    Occupation,
    Permanent_Division,
    Phone,
    Profile_Image,
    Description,
  } = singleData;

  const Premium_members = true;

  const similarBioData = allBioData.filter(
    (bio) => bio.Biodata_Type === Biodata_Type && bio.Biodata_Id !== Biodata_Id
  );

  const addToFavorite = () => {
    if (user && user.email) {
      const favoriteItem = {
        biodataId: Biodata_Id,
        email: user.email,
        permanentAddress: Permanent_Division,
        Occupation: Occupation,
        name: Name,
      };

      axiosPublic
        .post(`/favorite`, favoriteItem)
        .then((res) => {
          if (res.data.insertedId) {
            toast(`Biodata has been added`, {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setIsButtonDisabled(true);
          }
        })
        .catch(() => {
          toast.error("something wrong", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    }
  };

  return (
    <div>
      <PageBanner heading="Biodata Details" />
      <div className="w-11/12 mx-auto my-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* left-side */}
          <div className="lg:w-1/2">
            <div className="border-2 shadow-lg">
              <div className="relative">
                <Button
                  onClick={addToFavorite}
                  disabled={isButtonDisabled}
                  className="absolute top-2 right-2 bg-slate-50 w-12 h-12 rounded-full"
                >
                  <MdFavorite className="text-2xl text-red-600" />
                </Button>
              </div>
              <img
                src={Profile_Image}
                alt=""
                className="w-full  h-[450px] object-cover"
              />

              <div className="p-8 space-y-1">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Biodata_Id: {Biodata_Id}
                </h5>
                <p className=" font-bold text-gray-700 dark:text-gray-400">
                  {Name}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Age: {Age}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Biodata_Type: {Biodata_Type}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Permanent_Division: {Permanent_Division}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Occupation: {Occupation}
                </p>

                {Premium_members && (
                  <>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Phone: {Phone}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Email: {Email}
                    </p>
                  </>
                )}
                <p className="font-normal text-gray-700 dark:text-gray-400">
                <strong>Description:</strong> {Description}
                </p>

                <Button>
                  Request Contact Information
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
              </div>
            </div>
          </div>
          {/* right-side */}
          <div className="lg:w-1/2">
            <h2 className="text-xl font-bold mb-4">Similar Biodata</h2>
            {/* Display similar biodata */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {similarBioData.map((bioData, idx) => (
                <Link to={`/biodata/${bioData?._id}`} key={idx}>
                  <Card className="w-full max-w-xs sm:max-w-sm lg:max-w-none mx-auto lg:mx-0">
                    <img
                      src={bioData?.Profile_Image}
                      alt=""
                      className="w-full h-[180px] object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-700 dark:text-gray-400">
                        {bioData.Name}
                      </p>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Occupation: {bioData.Occupation}
                      </p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioDataDetails;
