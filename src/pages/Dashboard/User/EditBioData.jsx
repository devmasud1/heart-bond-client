import { Button, Label, Select, TextInput } from "flowbite-react";
import { useState } from "react";
import useAuth from "./../../../hook/useAuth";

const EditBioData = () => {
  const { user } = useAuth();
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedHeight, setSelectedHeight] = useState("");
  const [selectedWeight, setSelectedWeight] = useState("");
  const [occupation, setOccupation] = useState("");
  const [race, setRace] = useState("");
  const [permanentDivision, setPermanentDivision] = useState("");
  const [presentDivision, setPresentDivision] = useState("");
  const [expectedPartnerHeight, setExpectedPartnerHeight] = useState("");
  const [expectedPartnerWeight, setExpectedPartnerWeight] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };
  const handleHeightChange = (e) => {
    setSelectedHeight(e.target.value);
  };
  const handleWeightChange = (e) => {
    setSelectedWeight(e.target.value);
  };
  const handleOccupationChange = (e) => {
    setOccupation(e.target.value);
  };
  const handleRaceChange = (e) => {
    setRace(e.target.value);
  };
  const handlePermanentDivisionChange = (e) => {
    setPermanentDivision(e.target.value);
  };
  const handlePresentDivisionChange = (e) => {
    setPresentDivision(e.target.value);
  };
  const handleExpectedPartnerHeightChange = (e) => {
    setExpectedPartnerHeight(e.target.value);
  };

  const handleExpectedPartnerWeightChange = (e) => {
    setExpectedPartnerWeight(e.target.value);
  };
  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleAddBio = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const dataOfBirth = form.dataOfBirth.value;
    const age = form.age.value;
    const fatherName = form.fatherName.value;
    const motherName = form.motherName.value;
    const expectedPartnerAge = form.expectedPartnerAge.value;
    const contactEmail = form.contactEmail.value;

    const bioData = {
      name,
      image,
      dataOfBirth,
      age,
      fatherName,
      motherName,
      expectedPartnerAge,
      contactEmail,
      selectedGender,
      selectedHeight,
      selectedWeight,
      race,
      permanentDivision,
      occupation,
      presentDivision,
      expectedPartnerHeight,
      expectedPartnerWeight,
      mobileNumber,
    };

    console.log("Bio Data Object:", bioData);
  };

  return (
    <div>
      <p className="text-xl mb-1"> Add Biodata:</p>

      <div>
        <form onSubmit={handleAddBio} className="flex flex-col  gap-4">
          {/* first */}
          <div className="flex flex-col lg:flex-row gap-5">
            {/* gender */}
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="gender" value="Biodata Type" />
              </div>
              <Select
                id="gender"
                value={selectedGender}
                onChange={handleGenderChange}
                required
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Select>
            </div>
            {/* name */}
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your Name" />
              </div>
              <TextInput
                id="name"
                type="text"
                name="name"
                placeholder="name here..."
                required
              />
            </div>
          </div>
          {/* second */}
          <div className="flex flex-col lg:flex-row gap-5">
            {/* name */}
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="image" value="Profile Image" />
              </div>
              <TextInput
                id="image"
                type="text"
                name="image"
                placeholder="Profile Image Url here..."
                required
              />
            </div>

            {/* Date of birth */}
            <div className="lg:w-1/2">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="DateOfBirth" value="Date of birth" />
                </div>
                <TextInput
                  id="DateOfBirth"
                  type="date"
                  name="dataOfBirth"
                  placeholder="your birth date"
                  required
                />
              </div>
            </div>
          </div>
          {/* third */}
          <div className="flex flex-col lg:flex-row gap-5">
            {/* Height */}
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="height" value="Height" />
              </div>
              <Select
                id="height"
                value={selectedHeight}
                onChange={handleHeightChange}
                required
              >
                <option value="">Height</option>
                <option value="5.0">5.0</option>
                <option value="5.2">5.2</option>
                <option value="5.4">5.4</option>
                <option value="5.6">5.6</option>
                <option value="5.8">5.8</option>
                <option value="6.0">6.0</option>
              </Select>
            </div>
            {/* Weight */}
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="weight" value="Weight" />
              </div>
              <Select
                id="weight"
                value={selectedWeight}
                onChange={handleWeightChange}
                required
              >
                <option value="">Weight</option>
                <option value="50">50</option>
                <option value="55">55</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
                <option value="90">90</option>
              </Select>
            </div>
          </div>
          {/* fourth */}
          <div className="flex flex-col lg:flex-row gap-5">
            {/* Age */}
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="age" value="Age" />
              </div>
              <TextInput
                id="age"
                type="text"
                name="age"
                placeholder="Enter your age"
                required
              />
            </div>
            {/* Occupation */}
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="occupation" value="Occupation" />
              </div>
              <Select
                id="occupation"
                value={occupation}
                onChange={handleOccupationChange}
                required
              >
                <option value="">Select Occupation</option>
                <option value="Engineer">Engineer</option>
                <option value="Developer">Developer</option>
                <option value="Doctor">Doctor</option>
                <option value="Teacher">Teacher</option>
                <option value="Student">Student</option>
                <option value="HouseWife">HouseWife</option>
              </Select>
            </div>
          </div>
          {/* five */}
          <div className="flex flex-col lg:flex-row gap-5">
            {/* Race */}
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="race" value="Race" />
              </div>
              <Select
                id="race"
                value={race}
                onChange={handleRaceChange}
                required
              >
                <option value="">Select Race</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
                {/* Add other race options */}
              </Select>
            </div>
            {/* Father's Name */}
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="fatherName" value="Father's Name" />
              </div>
              <TextInput
                id="fatherName"
                type="text"
                name="fatherName"
                placeholder="Enter father's name"
                required
              />
            </div>
          </div>
          {/* six */}
          <div className="flex flex-col lg:flex-row gap-5">
            {/* Mother's Name */}
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="motherName" value="Mother's Name" />
              </div>
              <TextInput
                id="motherName"
                type="text"
                name="motherName"
                placeholder="Enter mother's name"
                required
              />
            </div>
            {/* Permanent Division */}
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="permanentDivision" value="Permanent Division" />
              </div>
              <Select
                id="permanentDivision"
                value={permanentDivision}
                onChange={handlePermanentDivisionChange}
                required
              >
                <option value="">Select Permanent Division</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chattagram">Chattagram</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Barisal">Barisal</option>
                <option value="Khulna">Khulna</option>
                <option value="Maymansign">Maymansign</option>
                <option value="Sylhet">Sylhet</option>
                {/* Add other division options */}
              </Select>
            </div>
          </div>
          {/* seven */}
          <div className="flex flex-col lg:flex-row gap-5">
            {/* Present Division */}
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="presentDivision" value="Present Division" />
              </div>
              <Select
                id="presentDivision"
                value={presentDivision}
                onChange={handlePresentDivisionChange}
                required
              >
                <option value="">Select Present Division</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chattagram">Chattagram</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Barisal">Barisal</option>
                <option value="Khulna">Khulna</option>
                <option value="Maymansign">Maymansign</option>
                <option value="Sylhet">Sylhet</option>
                {/* Add other division options */}
              </Select>
            </div>
            {/* Expected Partner Age */}
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label
                  htmlFor="expectedPartnerAge"
                  value="Expected Partner Age"
                />
              </div>
              <TextInput
                id="expectedPartnerAge"
                type="ext"
                name="expectedPartnerAge"
                placeholder="Enter expected partner's age"
                required
              />
            </div>
          </div>
          {/* eight */}
          <div className="flex flex-col lg:flex-row gap-5">
            {/* Expected Partner Height */}
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label
                  htmlFor="expectedPartnerHeight"
                  value="Expected Partner Height"
                />
              </div>
              <Select
                id="expectedPartnerHeight"
                value={expectedPartnerHeight}
                onChange={handleExpectedPartnerHeightChange}
                required
              >
                <option value="">Select Expected Partner Height</option>
                <option value="5.0">5.0</option>
                <option value="5.2">5.2</option>
                <option value="5.4">5.4</option>
                <option value="5.6">5.6</option>
                <option value="5.8">5.8</option>
                <option value="6.0">6.0</option>
                {/* Add other height options */}
              </Select>
            </div>
            {/* Expected Partner Weight */}
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label
                  htmlFor="expectedPartnerWeight"
                  value="Expected Partner Weight"
                />
              </div>
              <Select
                id="expectedPartnerWeight"
                value={expectedPartnerWeight}
                onChange={handleExpectedPartnerWeightChange}
                required
              >
                <option value="">Select Expected Partner Weight</option>
                <option value="50">50</option>
                <option value="55">55</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
                <option value="90">90</option>
                {/* Add other weight options */}
              </Select>
            </div>
          </div>
          {/* nine */}
          <div className="flex flex-col lg:flex-row gap-5">
            {/* Contact Email */}
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="contactEmail" value="Contact Email" />
              </div>
              <TextInput
                id="contactEmail"
                type="email"
                name="contactEmail"
                placeholder="Enter contact email"
                defaultValue={user?.email}
                readOnly
                required
              />
            </div>
            {/* Mobile Number */}
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="mobileNumber" value="Mobile Number" />
              </div>
              <TextInput
                id="mobileNumber"
                type="tel"
                name="mobileNumber"
                placeholder="Enter mobile number"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
                required
              />
            </div>
          </div>

          <Button className="lg:w-1/4 mx-auto mt-2" type="submit">
            Save And Publish Now
          </Button>
        </form>
      </div>
    </div>
  );
};
export default EditBioData;
