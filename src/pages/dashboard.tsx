import { NextPage } from "next/types";

import { useAuth } from "../contexts/AuthContext";
import { useAuthorization } from "../hooks/useAuthorization";
import { withSSRAuth } from "../utils/withSSRAuth";

const Dashboard: NextPage = () => {
  const { user } = useAuth();

  const userCanSeeMetrics = useAuthorization({
    permissions: ["metrics.list"],
  });

  return (
    <>
      <h1>Dashboard: {user?.email}</h1>
      {userCanSeeMetrics && <div>Metrics</div>}
    </>
  );
};

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});

export default Dashboard;
