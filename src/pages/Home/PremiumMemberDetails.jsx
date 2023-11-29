import { useLoaderData } from "react-router-dom";
import PageBanner from "../../components/PageBanner/PageBanner";
import PageTitle from "../../components/PageTitle/PageTitle";

const PremiumMemberDetails = () => {
  const premiumMemberData = useLoaderData();

  return (
    <div>
      <PageTitle title="premium member details" />
      <PageBanner heading="Premium member details" />
      <div className="w-3/4 mx-auto my-10 ">
        <div className="flex flex-col lg:flex-row justify-around gap-8">
          <div className="lg:w-1/2 border-2 mx-auto text-center">
            <img
              src={premiumMemberData.profileImage}
              alt=""
              className="max-h-sm"
            />
          </div>
          <div className="lg:w-1/2 space-y-5">
            <h5 className="text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Biodata ID: {premiumMemberData.biodataId}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Permanent Division: {premiumMemberData.permanentDivision}
            </p>
            <p>Occupation: {premiumMemberData.occupation} </p>

            <p> Biodata Type: {premiumMemberData.biodataType}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PremiumMemberDetails;

{
  /* <Card
key={idx}
className="full "
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
</Card> */
}
