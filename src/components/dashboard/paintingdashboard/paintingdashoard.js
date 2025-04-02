import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import GallerySec from "../../landingpage/GallerySec";
import Navbar from "../../landingpage/Navbar";
import Navigation from "../../landingpage/Navigation";

const PaintingDashboard = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Navbar />
      <Box sx={{ backgroundColor: "#0000FF", color: "white", p: 4, textAlign: "center" }}>
        <Typography variant="h3" fontWeight="bold">
            Original Paintings For Sale
        </Typography>
        <Typography variant="body1" mt={1}>
        Buy one of the unique paintings for sale by international talents from around the world. Choose from a variety of styles, such as abstract, impressionism, realism, and more.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
        <Button variant="outlined" color="primary">Filters (1)</Button>
        <Button variant="contained" color="primary" sx={{ ml: 2 }}>Save search</Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <Typography variant="body2" sx={{ backgroundColor: "#f1f1f1", p: 1, borderRadius: 1 }}>
          0 - 50,000 INR × <Button sx={{ ml: 1 }}>Clear all</Button>
        </Typography>
      </Box>
      <Grid container spacing={2} justifyContent="center" sx={{ px: 3 }}>
        <GallerySec />
      </Grid>
      <Box textAlign="center" mt={3}>
        <Button variant="outlined" color="primary">Explore all categories</Button>
      </Box>
    </div>
  );
};

export default PaintingDashboard;