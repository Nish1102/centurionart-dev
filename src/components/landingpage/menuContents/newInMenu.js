import { Card, CardContent, CardMedia, Grid, Typography, Link } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../../../assets/1.jpg";
import image2 from "../../../assets/2.jpg";

const NewInMenu = () => {
  const navigate = useNavigate();

  return (
    <Grid container spacing={2}>
      {/* New Artworks */}
      <Grid item xs={3}>
        <Typography variant="subtitle1" fontWeight="bold">NEW ARTWORKS</Typography>
        <Link component="button" sx={{ '&:hover': { textDecoration: 'underline' } }} 
        onClick={() => {alert('HELLO');navigate('/collector-dashboard')}}>
          <Typography>Under ₹50,005</Typography>
        </Link>
        <Link href="#" underline="none" sx={{ '&:hover': { textDecoration: 'underline' } }} onClick={() => navigate('/collector-dashboard')}>
          <Typography>Under ₹100,000</Typography>
        </Link>
        <Link href="#" underline="none" sx={{ '&:hover': { textDecoration: 'underline' } }} onClick={() => navigate('/collector-dashboard')}>
          <Typography>Under ₹250,000</Typography>
        </Link>
        <Link href="#" underline="none" sx={{ '&:hover': { textDecoration: 'underline' } }} onClick={() => navigate('/collector-dashboard')}>
          <Typography>Over ₹250,000</Typography>
        </Link>
      </Grid>

      {/* New Collections */}
      <Grid item xs={3}>
        <Typography variant="subtitle1" fontWeight="bold">NEW COLLECTIONS</Typography>
        <Link href="#" underline="none" sx={{ '&:hover': { textDecoration: 'underline' } }} onClick={() => navigate('/collector-dashboard')}>
          <Typography>Inspired by Memphis Milano</Typography>
        </Link>
        <Link href="#" underline="none" sx={{ '&:hover': { textDecoration: 'underline' } }} onClick={() => navigate('/collector-dashboard')}>
          <Typography>Famous Artists: Shades of Blue</Typography>
        </Link>
        <Link href="#" underline="none" sx={{ '&:hover': { textDecoration: 'underline' } }} onClick={() => navigate('/collector-dashboard')}>
          <Typography>Art Brut-Inspired</Typography>
        </Link>
        <Link href="#" underline="none" sx={{ '&:hover': { textDecoration: 'underline' } }} onClick={() => navigate('/collector-dashboard')}>
          <Typography>New & Notable: February</Typography>
        </Link>
        <Link href="#" underline="none" sx={{ '&:hover': { textDecoration: 'underline' } }} onClick={() => navigate('/collector-dashboard')}>
          <Typography>Explore All Collections →</Typography>
        </Link>
      </Grid>

      {/* Featured Artists */}
      <Grid item xs={3}>
        <Typography variant="subtitle1" fontWeight="bold">FEATURED ARTISTS</Typography>
        <Link href="#" underline="none" sx={{ '&:hover': { textDecoration: 'underline' } }} onClick={() => navigate('/collector-dashboard')}>
          <Typography>Alex Senchenko</Typography>
        </Link>
        <Link href="#" underline="none" sx={{ '&:hover': { textDecoration: 'underline' } }} onClick={() => navigate('/collector-dashboard')}>
          <Typography>Barbara Pastorino</Typography>
        </Link>
        <Link href="#" underline="none" sx={{ '&:hover': { textDecoration: 'underline' } }} onClick={() => navigate('/collector-dashboard')}>
          <Typography>JADIS</Typography>
        </Link>
        <Link href="#" underline="none" sx={{ '&:hover': { textDecoration: 'underline' } }} onClick={() => navigate('/collector-dashboard')}>
          <Typography>Hüseyin Ak</Typography>
        </Link>
        <Link href="#" underline="none" sx={{ '&:hover': { textDecoration: 'underline' } }} onClick={() => navigate('/collector-dashboard')}>
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