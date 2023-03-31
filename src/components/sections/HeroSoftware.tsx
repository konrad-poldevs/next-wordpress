import { FC } from "react";
import { Box, Container, Typography } from "@mui/material";

const styles = {
  container: {
    backgroundImage: `url(/software-page-photo.jpg)`,
  },
};

interface HeroSoftwareProps {
  text: string;
}

const HeroSoftware: FC<HeroSoftwareProps> = ({ text }: any) => {
  return (
    <section>
      <Container
        style={styles.container}
        sx={{
          minHeight: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <Typography
            variant="h3"
            color="white"
            bgcolor="rgba(130, 68, 180, 0.823)"
            padding={"10px"}
          >
            {text}
          </Typography>
        </Box>
      </Container>
    </section>
  );
};

export default HeroSoftware;
