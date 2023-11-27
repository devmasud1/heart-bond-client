import useAuth from "../../hook/useAuth";

const Dashboard = () => {
    const {user} = useAuth();
    return(
        <div>
             <h1 className="text-3xl font-semibold text-gray-600 mb-2">Hi, {user?.displayName}</h1>
             <h2 className="text-2xl font-medium text-gray-600">Welcome to Heart Bond</h2>
        </div>
    )}
export default Dashboard;