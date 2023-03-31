import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import { FC } from "react";
import { Container, Typography } from "@mui/material";

interface Props {
  title: string;
}

const Hero: FC<Props> = ({ title }) => {
  return (
    <section>
      <Container
        sx={{
          maxWidth: "container",
          mx: "auto",
          px: 3,
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 12, sm: 8 }}
          sx={{ mt: 3, mb: 8, flexDirection: { xs: "column", md: "row" } }}
        >
          <Grid xs={2} sm={4}>
            <Box>
              <img src="" alt="" />
            </Box>
          </Grid>
          <Grid xs={2} sm={4}>
            <Box>
              <Typography variant="body1">{title}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Hero;
