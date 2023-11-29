import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import useAxiosPublic from "./../../../hook/useAxiosPublic";
import { toast } from "react-toastify";
import { useState } from "react";

const GotMarried = () => {
  const axiosPublic = useAxiosPublic();
  const [selectedGender, setSelectedGender] = useState("");

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  const handleAddReview = async (e) => {
    e.preventDefault();
    const form = e.target;
    const selfBiodata = form.selfBiodata.value;
    const partnerBiodata = form.partnerBiodata.value;
    const coupleImage = form.image.value;
    const marriageDate = form.date.value;
    const reviewStar = form.reviewStar.value;
    const successStoryText = form.successStoryText.value;

    const reviewInfo = {
      selfBiodata,
      partnerBiodata,
      coupleImage,
      marriageDate,
      gender: selectedGender,
      reviewStar,
      successStoryText,
    };

    axiosPublic.post("/review", reviewInfo).then((res) => {
      if (res.data.insertedId) {
        toast.success("review done!");
        form.reset();
      }
    });
  };
  return (
    <div className="lg:p-8">
      <p className="text-xl font-semibold mb-4">
        Provide your marriage experience.
      </p>
      <div>
        <form
          onSubmit={handleAddReview}
          className="lg:w-3/4 flex flex-col gap-4 space-y-1"
        >
          <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-5 space-y-4 lg:space-y-0">
            <div className="lg:w-1/2 ">
              <div className="mb-2 block">
                <Label htmlFor="selfBiodata" value="Self Biodata Number" />
              </div>
              <TextInput
                id="selfBiodata"
                type="text"
                name="selfBiodata"
                placeholder="type here..."
                required
              />
            </div>
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label
                  htmlFor="partnerBiodata"
                  value="Partner Biodata Number"
                />
              </div>
              <TextInput
                id="partnerBiodata"
                type="text"
                name="partnerBiodata"
                placeholder="type here..."
                required
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-5 space-y-4 lg:space-y-0">
            <div className="lg:w-1/2 ">
              <div className="mb-2 block">
                <Label htmlFor="image" value="Couple Image Link" />
              </div>
              <TextInput
                id="image"
                type="text"
                name="image"
                placeholder="image url here..."
                required
              />
            </div>
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="date" value="Select Your Marriage Date" />
              </div>
              <TextInput id="date" type="date" name="date" required />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-5 space-y-4 lg:space-y-0">
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="gender" value="Biodata type" />
              </div>
              <Select onChange={handleGenderChange} id="gender" required>
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </Select>
            </div>
            <div className="lg:w-1/2 ">
              <div className="mb-2 block">
                <Label htmlFor="rating" value="Rating" />
              </div>
              <TextInput
                id="rating"
                type="text"
                name="reviewStar"
                placeholder="type rating number 5"
                required
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Your message" />
            </div>
            <Textarea
              id="comment"
              name="successStoryText"
              placeholder="Leave a comment..."
              required
              rows={4}
            />
          </div>
          <Button type="submit" className="lg:w-1/2 mx-auto mt-5">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};
export default GotMarried;
