import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

const NewInMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuType, setMenuType] = useState(null);

  const handleOpen = (event, type) => {
    setAnchorEl(event.currentTarget);
    setMenuType(type);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuType(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Grid container spacing={2}>
    {/* New Artworks */}
    <Grid item xs={3}>
      <Typography variant="subtitle1" fontWeight="bold">NEW ARTWORKS</Typography>
      <Typography>Under ₹50,000</Typography>
      <Typography>Under ₹100,000</Typography>
      <Typography>Under ₹250,000</Typography>
      <Typography>Over ₹250,000</Typography>
    </Grid>

    {/* New Collections */}
    <Grid item xs={3}>
      <Typography variant="subtitle1" fontWeight="bold">NEW COLLECTIONS</Typography>
      <Typography>Inspired by Memphis Milano</Typography>
      <Typography>Famous Artists: Shades of Blue</Typography>
      <Typography>Art Brut-Inspired</Typography>
      <Typography>New & Notable: February</Typography>
      <Typography>Explore All Collections →</Typography>
    </Grid>

    {/* Featured Artists */}
    <Grid item xs={3}>
      <Typography variant="subtitle1" fontWeight="bold">FEATURED ARTISTS</Typography>
      <Typography>Alex Senchenko</Typography>
      <Typography>Barbara Pastorino</Typography>
      <Typography>JADIS</Typography>
      <Typography>Hüseyin Ak</Typography>
      <Typography>Jan Baumeister</Typography>
    </Grid>

    {/* Highlighted Images */}
    <Grid item xs={3}>
      <Card sx={{ boxShadow: 0 }}>
        <CardMedia
          component="img"
          height="80"
          image="https://source.unsplash.com/100x80/?abstract-art"
          alt="New & Notable"
        />
        <CardContent sx={{ p: 1 }}>
          <Typography variant="body2" fontWeight="bold">New & Notable: February</Typography>
        </CardContent>
      </Card>
      <Card sx={{ boxShadow: 0, mt: 1 }}>
        <CardMedia
          component="img"
          height="80"
          image="https://source.unsplash.com/100x80/?modern-art"
          alt="Art Deco Dreams"
        />
        <CardContent sx={{ p: 1 }}>
          <Typography variant="body2" fontWeight="bold">Art Deco Dreams</Typography>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
  );
};

export default NewInMenu
