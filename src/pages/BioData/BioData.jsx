import { useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import useAllBioData from "../../hook/useAllBioData";
import { Button, Card, Label, Select } from "flowbite-react";
import MultiRangeSlider from "multi-range-slider-react";
import "./BioData.css";
import { Link } from "react-router-dom";
import PageBanner from "../../components/PageBanner/PageBanner";

const BioData = () => {
  const [allBioData] = useAllBioData();
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");
  const [rangeValues, setRangeValues] = useState({
    minValue: 0,
    maxValue: 100,
  });

  const { minValue, maxValue } = rangeValues;

  const filteredBioData = allBioData.filter((bioData) => {
    const isGenderMatch =
      !selectedGender ||
      bioData.Biodata_Type.toLowerCase() === selectedGender.toLowerCase();
    const isDivisionMatch =
      !selectedDivision ||
      bioData.Permanent_Division.toLowerCase() ===
        selectedDivision.toLowerCase();

    const isAgeInRange = bioData.Age >= minValue && bioData.Age <= maxValue;

    return isGenderMatch && isDivisionMatch && isAgeInRange;
  });

  const handleRangeChange = (values) => {
    setRangeValues(values);
  };

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };
  const handleDivisionChange = (e) => {
    setSelectedDivision(e.target.value);
  };

  return (
    <>
      <PageTitle title="Biodata" />
      <PageBanner heading='All Biodata available here'/>
      <div className="flex flex-col lg:flex-row  w-11/12 mx-auto  my-10">
        {/* Left Side: Filters (Fixed) */}
        <div className="lg:w-[22%] md:w-1/2 md:mx-auto pr-8 h-[40vh] overflow-y-auto lg:fixed left-4 lg:left-14 xl:left-20  bottom-1/4 mb-8 lg:mb-0 bg-gray-200 p-5">
          {/* age */}
          <div className="flex flex-col gap-4">
            <div className="mb-1 block">
              <Label htmlFor="sm-range" value="Filter by age" />
            </div>

            <MultiRangeSlider
              step={5}
              values={{ minValue, maxValue }}
              onChange={handleRangeChange}
            />
            <div className="flex justify-evenly">
              <p >Min Age: {minValue}</p>
              <p >Max Age: {maxValue}</p>
            </div>
          </div>

          {/* gender */}
          <div className="mt-2">
            <div className="mb-2 block">
              <Label htmlFor="gender" value="Filter biodata type" />
            </div>
            <Select
              id="gender"
              value={selectedGender}
              onChange={handleGenderChange}
              required
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
          </div>

          {/* division */}
          <div className="mt-2">
            <div className="mb-2 block">
              <Label htmlFor="division" value="Filter by division" />
            </div>
            <Select
              id="division"
              value={selectedDivision}
              onChange={handleDivisionChange}
              required
            >
              <option value="">Select division</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chattagram">Chattagram</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Barisal">Barisal</option>
              <option value="Maymansign">Maymansign</option>
              <option value="Sylhet">Sylhet</option>
            </Select>
          </div>
        </div>

        {/* Right Side: All Created Biodata */}
        <div className="w-full lg:w-3/4 ml-auto pl-8 pr-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBioData.length ? (
              filteredBioData.map((bioData, idx) => (
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
                  <Link to={`/biodata/${bioData?._id}`}>
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
                  </Link>
                </Card>
              ))
            ) : (
              <p className="flex justify-center items-center h-[37vh] w-full mx-auto text-2xl">
                No data matches
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BioData;
