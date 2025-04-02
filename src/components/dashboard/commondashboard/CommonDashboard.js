import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { useParams, useLocation } from "react-router-dom";
import GallerySec from "../../landingpage/GallerySec";
import Navbar from "../../landingpage/Navbar";
import Navigation from "../../landingpage/Navigation";

const CommonDashboard = () => {
  const { navParam, subNavParam } = useParams();
  const location = useLocation(); // Get current location (URL)
  const [routeParam, setCurrentURL] = useState("");

  console.log("Full URL:", window.location.href); // Logs full URL
  console.log("Pathname:", location.pathname); // Logs path without query params
  console.log("Search Params:", location.search); // Logs query parameters
  console.log("Params:", { navParam, subNavParam }); // Logs dynamic params
  useEffect(() => {
    setCurrentURL(window.location.href); // Update state with full URL
    console.log("📌 Full URL:", window.location.href);
    console.log("📌 Pathname:", location.pathname);
    console.log("📌 Search Params:", location.search);
    console.log("📌 Params:", { navParam, subNavParam });
  }, [location, navParam, subNavParam]);
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Navbar />
      <Box sx={{ backgroundColor: "#0000FF", color: "white", p: 4, textAlign: "center" }}>
        <Typography variant="h3" fontWeight="bold">
          Original Paintings For Sale first
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

export default CommonDashboard;
