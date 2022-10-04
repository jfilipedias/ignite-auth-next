import { NextPage } from "next/types";
import { Authorize } from "../components/Authorization";

import { useAuth } from "../contexts/AuthContext";
import { withSSRAuth } from "../utils/withSSRAuth";

const Dashboard: NextPage = () => {
  const { user, signOut } = useAuth();

  return (
    <>
      <h1>Dashboard: {user?.email}</h1>

      <button onClick={signOut}>Sign out</button>

      <Authorize permissions={["metrics.list"]}>Metrics</Authorize>
    </>
  );
};

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});

export default Dashboard;
