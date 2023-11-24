import About from "./About";
import Banner from "./Banner";
import PremiumMember from "./PremiumMember";
import SuccessCounter from "./SuccessCounter";
import SuccessStories from "./SuccessStories";

const Home = () => {
    return(
        <div>
             <Banner/>
             <PremiumMember/>
             <About/>
             <SuccessCounter/>
             <SuccessStories/>
        </div>
    )}
export default Home;