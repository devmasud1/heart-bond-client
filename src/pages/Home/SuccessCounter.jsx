import { Card } from "flowbite-react";
import useAnalytics from "../../hook/useAnalytics";
import CountUp from "react-countup";

const SuccessCounter = () => {
  const { analytics } = useAnalytics();

  return (
    <div className="w-11/12 mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-10 gap-6 my-16 lg:my-20 text-center">
        <Card className="bg-blue-100">
          <p className="md:text-2xl font-medium lg:font-bold tracking-tight text-gray-900">
            Total Biodata:
            <CountUp end={analytics?.totalBioData} />
          </p>
        </Card>
        <Card className="bg-pink-100">
          <p className="md:text-2xl font-medium lg:font-bold tracking-tight text-gray-900">
            Girls:
            <CountUp end={analytics?.totalFemale} />
          </p>
        </Card>
        <Card className="bg-green-100">
          <p className="md:text-2xl font-medium lg:font-bold tracking-tight text-gray-900">
            Boys:
            <CountUp end={analytics?.totalMale} />
          </p>
        </Card>
        <Card className="bg-yellow-100">
          <p className="md:text-2xl font-medium lg:font-bold tracking-tight text-gray-900">
            Completed Marriages:
            <CountUp delay={2} end={analytics?.completeMarriage} />
          </p>
        </Card>
      </div>
    </div>
  );
};

export default SuccessCounter;
