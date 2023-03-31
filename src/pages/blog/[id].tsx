import { NextPage } from "next";
import axios from "axios";
import Layout from "@/components/_shared/navigation/Layout";
import { Typography, Box } from "@mui/material";

const SinglePostPage: NextPage = ({ post }: any) => {
  return (
    <>
      <Layout title="poldevs" description="desc">
        <Box sx={{ mt: 4, p: 3 }}>
          <Typography variant="h2" align="center" sx={{ mb: 3 }}>
            {post?.title?.rendered}
          </Typography>
          <Typography align="center">
            {post?.acf?.section_hero?.text}
          </Typography>
        </Box>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const { id } = context.query;
  const res = await axios.get(
    `http://web-wp.poldevs.com/wp-json/wp/v2/pages/${id}`
  );

  return {
    props: {
      post: res.data,
    },
  };
};

export default SinglePostPage;
