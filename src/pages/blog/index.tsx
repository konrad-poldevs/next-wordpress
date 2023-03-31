import Layout from "@/components/_shared/navigation/Layout";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import { NextPage } from "next";
import Link from "next/link";

const BlogPage: NextPage = ({ posts }: any) => {
  return (
    <Layout title="poldevs" description="desc">
      <section>
        <Container
          sx={{
            px: 3,
          }}
        >
          <Typography variant="h3" sx={{ mt: 4, mb: 4 }}>
            Usługi
          </Typography>
          <Grid
            container={true}
            spacing={{ xs: 2, md: 3 }}
            sx={{ mt: 3, p: 3, flexDirection: { xs: "column", md: "row" } }}
            alignItems="center"
            justifyContent="center"
          >
            {posts.map((post: any) => (
              <Grid xs={12} sm={12} md={6} lg={4} sx={{ mb: 3 }} key={post.id}>
                <Card sx={{ width: 345, height: 320 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="/service-it.jpg"
                    title="crm"
                  />
                  <CardContent>
                    <Link href={`/blog/${post.id}`}>
                      <Typography gutterBottom variant="h5" component="div">
                        {post?.title?.rendered}
                      </Typography>
                    </Link>
                    <Typography variant="body2" color="text.secondary">
                      {post?.acf?.section_hero?.text}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="contained">
                      Sprawdź
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get("http://web-wp.poldevs.com/wp-json/wp/v2/pages");

  return {
    props: {
      posts: res.data,
    },
  };
};

export default BlogPage;
