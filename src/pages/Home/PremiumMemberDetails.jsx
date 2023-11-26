import { useLoaderData } from "react-router-dom";
import PageBanner from "../../components/PageBanner/PageBanner";
import PageTitle from "../../components/PageTitle/PageTitle";

const PremiumMemberDetails = () => {
  const premiumMemberData = useLoaderData();
 // console.log(premiumMemberData);
  return (
    <div>
      <PageTitle title="premium member details" />
      <PageBanner heading="Premium member details" />
      <div className="w-11/12 mx-auto my-10">
        <p> This is PremiumMemberDetails section</p>
      </div>
    </div>
  );
};
export default PremiumMemberDetails;
