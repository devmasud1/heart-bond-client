import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>HeartBond - {title}</title>
    </Helmet>
  );
};
export default PageTitle;
