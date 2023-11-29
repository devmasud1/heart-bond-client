import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import usePremiumBioData from "../../hook/usePremiumBioData";
import { Card, Button } from "flowbite-react";

const PremiumMember = () => {
  const [premiumBio] = usePremiumBioData();

  //Sort on age in ascending order
  const sortedProfiles = premiumBio.sort((a, b) => a.age - b.age);

  return (
    <div className="w-11/12 mx-auto my-16 lg:my-20">
      <SectionTitle title="Our Premium member" />
      <div className="grid md:grid-col grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {sortedProfiles.map((profile, idx) => (
          <Card
            key={idx}
            className="full"
            imgSrc={profile.profileImage}
            horizontal
          >
            <div>
              <h5 className="text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Biodata ID: {profile.biodataId}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Permanent Division: {profile.permanentDivision}
              </p>
              <p>Occupation: {profile.occupation} </p>

              <p> Biodata Type: {profile.biodataType}</p>
            </div>
            <Link to={`/premium-member/${profile?._id}`}>
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
        ))}
      </div>
    </div>
  );
};

export default PremiumMember;
