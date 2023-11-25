import PageTitle from "../../components/PageTitle/PageTitle";
import useAllBioData from "../../hook/useAllBioData";
import { Button, Card } from "flowbite-react";

const BioData = () => {
  const [allBioData] = useAllBioData();

  console.log(allBioData);

  return (
    <>
      <PageTitle title="Biodata" />
      <div className="w-11/12 mx-auto">
        <div
          className="relative w-full h-[300px] bg-cover object-cover bg-center shadow-md"
          style={{
            backgroundImage: "url(https://i.ibb.co/dPctR4R/banner.jpg)",
            width: "100%",
          }}
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-black opacity-50" />
            <div className="w-full flex flex-col justify-center items-center text-center p-5 sm:p-10 text-white absolute top-1/3">
              <h4 className="font-bold text-2xl sm:text-3xl md:text-4xl  xl:text-5xl mb-2">
                All Biodata available here
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-11/12 mx-auto  my-10">
        {/* Left Side: Filters (Fixed) */}
        <div className="w-[25%] md:w-[20%] pr-8 h-[40vh] overflow-y-auto fixed left-4 lg:left-14 xl:left-20  bottom-1/4 bg-gray-200 p-5">
          <h2>Filter Options</h2>
        </div>

        {/* Right Side: All Created Biodata (Scrollable) */}
        <div className="w-3/4 ml-auto pl-8 pr-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBioData.map((bioData, idx) => (
              <Card
                key={idx}
                className=""
                imgAlt="Profile_Image"
                imgSrc={bioData?.Profile_Image}
              >
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Biodata Id: {bioData?.Biodata_Id}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Biodata Type: {bioData?.Biodata_Type}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Permanent Division: {bioData?.Permanent_Division}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Age: {bioData?.Age}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Occupation: {bioData?.Occupation}
                </p>
                <Button>
                  View Profile
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
      </div>
    </>
  );
};

export default BioData;
