import React, { useState, useEffect } from "react";
import useAxiosPublic from "../../../hook/useAxiosPublic";

const SuccessStory = () => {
  const axiosPublic = useAxiosPublic();
  const [successStories, setSuccessStories] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [story, setStory] = useState([]);

  useEffect(() => {
    const fetchSuccessStories = async () => {
      try {
        const response = await axiosPublic.get("/success-story");
        setSuccessStories(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSuccessStories();
  }, [axiosPublic]);

  const openStoryModal = (storyText) => {
    setOpenModal(true);
    setStory(storyText);
  };

  return (
    <div className="lg:p-8">
      <p className="text-xl font-medium mb-3 text-gray-500">
        Show success story:
      </p>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Biodata type</th>
              <th className="border p-2">Biodata ID</th>
              <th className="border p-2">View Story</th>
            </tr>
          </thead>
          <tbody>
            {successStories.map((story, index) => (
              <React.Fragment key={index}>
                {story.biodataIds.map((id, idx) => (
                  <tr
                    key={`${index}-${idx}`}
                    className={idx % 2 === 0 ? "bg-gray-100" : "bg-white"}
                  >
                    {story._id === "female" ? <th>Female</th> : <th>Male</th>}
                    <td className="border p-2">{id}</td>
                    <td className="border p-2">
                      <button
                        onClick={() =>
                          openStoryModal(story.successStoryText[idx])
                        }
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        View Story
                      </button>
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>

        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Married Couple review</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {story}
              </p>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default SuccessStory;
