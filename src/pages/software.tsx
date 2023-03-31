import { NextPage } from "next";
import HeroSoftware from "@/components/sections/HeroSoftware";
import Layout from "@/components/_shared/navigation/Layout";
import axios from "axios";
import FormSoftware from "@/components/sections/FormSoftware";

const SoftwarePage: NextPage = ({ posts }: any) => {
  console.log(posts);
  return (
    <>
      <Layout title="poldevs" description="desc">
        <HeroSoftware text={posts.acf.section_hero.text} />
        <FormSoftware />
      </Layout>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get(
    "http://web-wp.poldevs.com/wp-json/wp/v2/pages/46"
  );

  return {
    props: {
      posts: res.data,
    },
  };
};

export default SoftwarePage;
