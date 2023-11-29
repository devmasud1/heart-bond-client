import { PieChart, Pie, Cell, Legend } from "recharts";
import useAnalytics from "./../../../hook/useAnalytics";


const COLORS = ["#0088FE", "#00C49F", "#435585", "#FF8045", "#31304D"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const AdminDashboard = () => {
  const { analytics, isLoading } = useAnalytics();

  if (isLoading) {
    return <p>loading</p>
  }

  const { totalBioData, totalMale, totalFemale, premiumBioData, revenue } =
    analytics;

  const pieChartData = [
    { name: "Total BioData", value: totalBioData },
    { name: "Total Male", value: totalMale },
    { name: "Total Female", value: totalFemale },
    { name: "Premium BioData", value: premiumBioData },
    { name: "Revenue", value: revenue },
  ].filter((entry) => entry.value !== undefined);

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
        <div>
          <PieChart width={500} height={500}> border={true}
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData?.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;
