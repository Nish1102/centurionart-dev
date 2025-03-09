import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.jpg";

const PrintSubMenu = () => {
  return (
    <Grid container spacing={3}>
    {/* Famous Artists Prints */}
    <Grid item xs={3}>
      <Typography variant="subtitle1" fontWeight="bold">FAMOUS ARTISTS PRINTS</Typography>
      <Typography>Pablo Picasso</Typography>F
      <Typography>Salvador Dali</Typography>
      <Typography>Banksy</Typography>
      <Typography>Shepard Fairey</Typography>
      <Typography>Marc Chagall</Typography>
      <Typography color="primary">Explore All Famous Artists →</Typography>
    </Grid>

    {/* Style */}
    <Grid item xs={3}>
      <Typography variant="subtitle1" fontWeight="bold">STYLE</Typography>
      <Typography>Abstract</Typography>
      <Typography>Figurative</Typography>
      <Typography>Realism</Typography>
      <Typography>Pop Art</Typography>
      <Typography>Vintage</Typography>
    </Grid>

    {/* Shop By */}
    <Grid item xs={3}>
      <Typography variant="subtitle1" fontWeight="bold">SHOP BY</Typography>
      <Typography>Seasonal Promotion</Typography>
      <Typography>New In</Typography>
      <Typography>Price +</Typography>
      <Typography>Size +</Typography>
    </Grid>

    {/* Highlights */}
    <Grid item xs={3}>
      <Card sx={{ boxShadow: 0 }}>
        <CardMedia component="img" height="100" image={image1} alt="Surrealist Visions" />
        <CardContent sx={{ p: 1 }}>
          <Typography variant="body2" fontWeight="bold">Famous artists: Surrealist Visions</Typography>
          <Typography color="primary">Discover →</Typography>
        </CardContent>
      </Card>

      <Card sx={{ boxShadow: 0, mt: 2 }}>
        <CardMedia component="img" height="100" image={image2} alt="Timeless Portraits" />
        <CardContent sx={{ p: 1 }}>
          <Typography variant="body2" fontWeight="bold">Famous artists: Timeless Portraits</Typography>
          <Typography color="primary">Discover →</Typography>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
  );
};

export default PrintSubMenu;
