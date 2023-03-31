import Hero from "@/components/sections/Hero";
import axios from "axios";
import Services from "@/components/sections/Services";
import Layout from "@/components/_shared/navigation/Layout";

const Home = ({ posts }: any) => {
  return (
    <>
      <Layout title="poldevs" description="desc">
        <Hero title={posts.acf.section_hero.text} />
        <Services data={posts} />
      </Layout>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get(
    "http://web-wp.poldevs.com/wp-json/wp/v2/pages/2"
  );

  return {
    props: {
      posts: res.data,
    },
  };
};

export default Home;
