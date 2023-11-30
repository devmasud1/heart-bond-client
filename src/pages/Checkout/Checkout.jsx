import { useParams } from "react-router-dom";
import PageBanner from "../../components/PageBanner/PageBanner";
import PageTitle from "../../components/PageTitle/PageTitle";
import useAuth from "../../hook/useAuth";
import useAllBioData from "../../hook/useAllBioData";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutFrom from "./CheckOutFrom";

const stripePromise = loadStripe(import.meta.env.VITE_payment_api_key);

const Checkout = () => {
  const bioData = useParams();

  const { user } = useAuth();
  const [allBioData] = useAllBioData();

  const filteredBioData = allBioData.find((bio) => bio.Email === user.email);
  let bioDataId = bioData.biodataId;
  let selfBioDataID = filteredBioData?.Biodata_Id;
  let price = 500;

  const filteredBioData2 = allBioData.find(bio => {
    return bio.Biodata_Id.toString() === bioDataId
  });

  const info = {
    bioDataId: bioDataId,
    selfBioDataID: selfBioDataID,
    find_name: filteredBioData2?.Name,
    find_email:filteredBioData2?.Email,
    find_phone: filteredBioData2?.Phone,
    price: price,
  };
  //console.log(info)

  return (
    <div>
      <PageTitle title="checkOut" />
      <PageBanner heading="Checkout" />
      <div className="w-11/12 mx-auto my-20">
        <Elements stripe={stripePromise}>
          <CheckOutFrom info={info} />
        </Elements>
      </div>
    </div>
  );
};
export default Checkout;
