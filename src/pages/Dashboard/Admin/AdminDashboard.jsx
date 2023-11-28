import useAnalytics from "../../../hook/useAnalytics";

const AdminDashboard = () => {
  const { analytics } = useAnalytics();
  return (
    <div className="w-full h-full">
      <div className="lg:p-8">
        <p className="text-xl font-medium mb-3 text-gray-500">
          All information here
        </p>
        <div className="lg:grid  lg:grid-cols-3 gap-4 space-y-6 lg:space-y-0">
          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-lg font-medium">Total Biodata</p>
            <p className="text-3xl font-bold">{analytics?.totalBioData}</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <p className="text-lg font-medium">Male Biodata</p>
            <p className="text-3xl font-bold">{analytics?.totalMale}</p>
          </div>
          <div className="bg-pink-100 p-4 rounded-lg">
            <p className="text-lg font-medium">Female Biodata</p>
            <p className="text-3xl font-bold">{analytics?.totalFemale}</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <p className="text-lg font-medium">Premium Biodata</p>
            <p className="text-3xl font-bold">{analytics?.premiumBioData}</p>
          </div>
          <div className="col-span-2 bg-purple-100 p-4 rounded-lg">
            <p className="text-lg font-medium">Total Revenue</p>
            <p className="text-3xl font-bold">{analytics?.revenue} Tk</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;
