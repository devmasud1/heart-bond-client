import { useParams } from "react-router-dom";
import PageBanner from "../../components/PageBanner/PageBanner";
import { useContext } from "react";
import { AuthContext } from "../../hook/provider/AuthProvider";
import PageTitle from "../../components/PageTitle/PageTitle";

const Checkout = () => {
    const bioId = useParams()
    const {user} = useContext(AuthContext);
   // console.log(bioId)
    return(
        <div>
             <PageTitle title='checkOut'/>
            <PageBanner title='Checkout'/>
             <div className="w-11/12 mx-auto my-20">
             <p> This is Checkout section</p>
             </div>
        </div>
    )}
export default Checkout;