import { Card } from "flowbite-react";

const SuccessCounter = () => {
  const totalBiodataCount = 1000;
  const girlsBiodataCount = 600;
  const boysBiodataCount = 400;
  const marriagesCompletedCount = 300;

  return (
    <div className="w-11/12 mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-10 gap-6 my-16 lg:my-20 text-center">
        <Card className="">
          <p className="md:text-2xl font-bold tracking-tight text-gray-900">
            Total Biodata: {totalBiodataCount}
          </p>
        </Card>
        <Card className="">
          <p className="md:text-2xl font-bold tracking-tight text-gray-900">
            Girls: {girlsBiodataCount}
          </p>
        </Card>
        <Card className="">
          <p className="md:text-2xl font-bold tracking-tight text-gray-900">
            Boys: {boysBiodataCount}
          </p>
        </Card>
        <Card className="">
          <p className="md:text-2xl font-bold tracking-tight text-gray-900">
            Marriages Completed: {marriagesCompletedCount}
          </p>
        </Card>
      </div>
    </div>
  );
};

export default SuccessCounter;
