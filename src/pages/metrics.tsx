import { NextPage } from "next/types";

import { withSSRAuth } from "../utils/withSSRAuth";

const Metrics: NextPage = () => {
  return <h1>Metrics</h1>;
};

export const getServerSideProps = withSSRAuth(
  async (ctx) => {
    return {
      props: {},
    };
  },
  { permissions: ["metrics.list"], roles: ["administrator"] }
);

export default Metrics;
