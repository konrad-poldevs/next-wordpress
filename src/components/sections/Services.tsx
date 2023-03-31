import { FC } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

interface Props {
  data: any;
}

const Services: FC<Props> = (props) => {
  return (
    <section>
      <Container
        sx={{
          px: 3,
        }}
      >
        <Typography variant="h3">Usługi</Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={12}
          sx={{ mt: 3, p: 3, flexDirection: { xs: "column", md: "row" } }}
        >
          <Grid xs={12} sm={12} md={6} lg={4} sx={{ mb: 3 }}>
            <Card sx={{ maxWidth: 345, height: 450 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/laptop1.jpg"
                title="crm"
              />
              <CardContent sx={{ height: 250 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {props.data?.acf?.section_services?.service_crm?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {props.data?.acf?.section_services?.service_crm?.text}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained">
                  Sprawdź
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={4} sx={{ mb: 3 }}>
            <Card sx={{ maxWidth: 345, height: 450 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/laptop2.jpg"
                title="crm"
              />
              <CardContent sx={{ height: 250 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {props.data?.acf?.section_services?.service_landing?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {props.data?.acf?.section_services?.service_landing?.text}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained">
                  Sprawdź
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={4} sx={{ mb: 3 }}>
            <Card sx={{ maxWidth: 345, height: 450 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/laptop3.jpg"
                title="crm"
              />
              <CardContent sx={{ height: 250 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {props.data?.acf?.section_services?.service_website?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {props.data?.acf?.section_services?.service_website?.text}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained">
                  Sprawdź
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Services;
