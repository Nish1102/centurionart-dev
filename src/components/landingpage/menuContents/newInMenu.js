import { Card, CardContent, CardMedia, Grid, Typography, Link } from "@mui/material";
import React, { useState } from "react";
import image1 from "../../../assets/1.jpg";
import image2 from "../../../assets/2.jpg";

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
        <Link href="#" underline="none" sx={{ '&:hover': { textDecoration: 'underline' } }}>
          <Typography>Under ₹50,000</Typography>
        </Link>
        <Link href="#" underline="none" sx={{ '&:hover': { textDecoration: 'underline' } }}>
          <Typography>Under ₹100,000</Typography>
        </Link>
        <Link href="#" underline="none" sx={{ '&:hover': { textDecoration: 'underline' } }}>
          <Typography>Under ₹250,000</Typography>
        </Link>
        <Link href="#" underline="none" sx={{ '&:hover': { textDecoration: 'underline' } }}>
          <Typography>Over ₹250,000</Typography>
        </Link>
      </Grid>

      {/* New Collections */}
      <Grid item xs={3}>
        <Typography variant="subtitle1" fontWeight="bold">NEW COLLECTIONS</Typography>
        <Link href="#" underline="none" sx={{ '&:hover': { textDecoration: 'underline' } }}>
          <Typography>Inspired by Memphis Milano</Typography>
        </Link>
        <Link href="#" underline="none" sx={{ '&:hover': { textDecoration: 'underline' } }}>
          <Typography>Famous Artists: Shades of Blue</Typography>
        </Link>
        <Link href="#" underline="none" sx={{ '&:hover': { textDecoration: 'underline' } }}>
          <Typography>Art Brut-Inspired</Typography>
        </Link>
        <Link href="#" underline="none" sx={{ '&:hover': { textDecoration: 'underline' } }}>
          <Typography>New & Notable: February</Typography>
        </Link>
        <Link href="#" underline="none" sx={{ '&:hover': { textDecoration: 'underline' } }}>
          <Typography>Explore All Collections →</Typography>
        </Link>
      </Grid>

      {/* Featured Artists */}
      <Grid item xs={3}>
        <Typography variant="subtitle1" fontWeight="bold">FEATURED ARTISTS</Typography>
        <Link href="#" underline="none" sx={{ '&:hover': { textDecoration: 'underline' } }}>
          <Typography>Alex Senchenko</Typography>
        </Link>
        <Link href="#" underline="none" sx={{ '&:hover': { textDecoration: 'underline' } }}>
          <Typography>Barbara Pastorino</Typography>
        </Link>
        <Link href="#" underline="none" sx={{ '&:hover': { textDecoration: 'underline' } }}>
          <Typography>JADIS</Typography>
        </Link>
        <Link href="#" underline="none" sx={{ '&:hover': { textDecoration: 'underline' } }}>
          <Typography>Hüseyin Ak</Typography>
        </Link>
        <Link href="#" underline="none" sx={{ '&:hover': { textDecoration: 'underline' } }}>
          <Typography>Jan Baumeister</Typography>
        </Link>
      </Grid>

      {/* Highlighted Images */}
      <Grid item xs={3}>
        <Typography variant="subtitle1" fontWeight="bold">Highlights</Typography>
        <Card sx={{ boxShadow: 0 }}>
          <CardMedia
            component="img"
            height="80"
            image={image1}
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
            image={image2}
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

export default NewInMenu;