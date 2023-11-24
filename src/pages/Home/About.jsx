import SectionTitle from "../../components/SectionTitle/SectionTitle";

const About = () => {
  const workInfo = [
    {
      title: "Register",
      time: "TIMING: 7:00 PM",
      description:
        "Create your account to begin your journey in finding a life partner. Registration is simple and secure.",
      image: "https://i.ibb.co/QMmGW4r/rings.png",
    },
    {
      title: "Find your Match",
      time: "TIMING: 7:00 PM",
      description:
        "Discover potential matches based on your preferences and criteria. Find someone who shares your values and interests.",
      image: "https://i.ibb.co/sCnkdcW/wedding-couple.png",
    },
    {
      title: "Send Interest",
      time: "TIMING: 7:00 PM",
      description:
        "Express your interest in someone you're attracted to. Show that you're interested in getting to know them better.",
      image: "https://i.ibb.co/BzFDDBP/love-birds.png",
    },
    {
      title: "Get Profile Information",
      time: "TIMING: 7:00 PM",
      description:
        "Access detailed profile information of potential matches. Get insights into their personality, lifestyle, and more.",
      image: "https://i.ibb.co/B3nXfdL/network.png",
    },
    {
      title: "Start Meetups",
      time: "TIMING: 7:00 PM",
      description:
        "Initiate meetups to get to know each other better. Arrange meetings to build a deeper connection and understanding.",
      image: "https://i.ibb.co/R6FfQhL/chat.png",
    },
    {
      title: "Getting Marriage",
      time: "TIMING: 7:00 PM",
      description:
        "Embark on the beautiful journey of marriage with your perfect match. Take the next step towards a lifelong commitment.",
      image: "https://i.ibb.co/cDhDfcC/wedding-2.png",
    },
  ];

  return (
    <div className="w-11/12 mx-auto my-16 lg:my-20">
      <SectionTitle title="How it works" />
      <div className="max-w-3xl lg:max-w-5xl mx-auto grid lg:grid-cols-2 lg:gap-10 gap-5">
        {workInfo.map((item, index) => (
          <div key={index} className=" border-2 p-5 shadow-xl">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-1/6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 rounded-full m-auto"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <span className="text-gray-500 text-xs">{item.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default About;
