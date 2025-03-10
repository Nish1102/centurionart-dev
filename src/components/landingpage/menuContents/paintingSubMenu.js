import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import image1 from "../../../assets/1.jpg"
import image2 from "../../../assets/2.jpg"


const NewInMenu = () => {
  return (
    <Grid container spacing={3}>
      {/* Style */}
      <Grid item xs={3}>
        <Typography variant="subtitle1" fontWeight="bold">
          STYLE
        </Typography>
        <Typography>Abstract</Typography>
        <Typography>Figurative</Typography>
        <Typography>Impressionism</Typography>
        <Typography>Realism</Typography>
        <Typography>Pop Art</Typography>
      </Grid>

      {/* Theme */}
      <Grid item xs={3}>
        <Typography variant="subtitle1" fontWeight="bold">
          THEME
        </Typography>
        <Typography>Landscape</Typography>
        <Typography>Portrait</Typography>
        <Typography>Floral</Typography>
        <Typography>Urban</Typography>
        <Typography>Pop Culture</Typography>
      </Grid>

      {/* Shop By */}
      <Grid item xs={3}>
        <Typography variant="subtitle1" fontWeight="bold">
          SHOP BY
        </Typography>
        <Typography>Seasonal Promotion</Typography>
        <Typography>New In</Typography>
        <Typography>Price +</Typography>
        <Typography>Size +</Typography>
        <Typography>Color +</Typography>
        <Typography>Technique +</Typography>
      </Grid>

      {/* Highlights */}
      <Grid item xs={3}>
        <Card sx={{ boxShadow: 0 }}>
          <CardMedia
            component="img"
            height="100"
            image={image1}
            alt="Contemporary Landscapes"
          />
          <CardContent sx={{ p: 1 }}>
            <Typography variant="body2" fontWeight="bold">
              Contemporary Landscapes
            </Typography>
            <Typography color="primary">Discover →</Typography>
          </CardContent>
        </Card>

        <Card sx={{ boxShadow: 0, mt: 2 }}>
          <CardMedia
            component="img"
            height="100"
            image={image2}
            alt="New Romanticism"
          />
          <CardContent sx={{ p: 1 }}>
            <Typography variant="body2" fontWeight="bold">
              New Romanticism
            </Typography>
            <Typography color="primary">Discover →</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default NewInMenu;
