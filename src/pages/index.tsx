import { NextPage } from "next";

const HomePage: NextPage = ({ posts }: any) => {
  console.log("posts component", posts);
  return <h1>Wordpress Next</h1>;
};
export default HomePage;
