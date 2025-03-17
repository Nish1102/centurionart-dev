import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const PhotographySubMenu = ({close}) => {
  return (
    <Grid container spacing={3} onMouseLeave={() => close()}>
      {/* Style */}
      <Grid item xs={4}>
        <Typography variant="subtitle1" fontWeight="bold">
          STYLE
        </Typography>
        <Typography>Color</Typography>
        <Typography>Black and White</Typography>
        <Typography>Sepia</Typography>
        <Typography>Digital</Typography>
        <Typography>Street Photo</Typography>
      </Grid>

      {/* Theme */}
      <Grid item xs={4}>
        <Typography variant="subtitle1" fontWeight="bold">
          THEME
        </Typography>
        <Typography>Landscape</Typography>
        <Typography>Urban</Typography>
        <Typography>Portrait</Typography>
        <Typography>Nature</Typography>
        <Typography>Travel</Typography>
      </Grid>

      {/* Shop By */}
      <Grid item xs={4}>
        <Typography variant="subtitle1" fontWeight="bold">
          SHOP BY
        </Typography>
        <Typography>Seasonal Promotion</Typography>
        <Typography>New In</Typography>
        <Typography>Price +</Typography>
        <Typography>Size +</Typography>
      </Grid>
    </Grid>
  );
};

export default PhotographySubMenu;
