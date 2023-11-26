import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";

const ErrorPage = () => {
  const goTo = useNavigate();

  const goHome = () => {
    goTo("/");
  };
  return (
    <div className="h-screen flex justify-center items-center">
        <PageTitle title='not found'/>
      <div className="flex flex-col space-y-5">
        <p className="text-xl font-semibold"> page not found</p>
        <Button onClick={goHome}> Go To Home </Button>
      </div>
    </div>
  );
};
export default ErrorPage;
