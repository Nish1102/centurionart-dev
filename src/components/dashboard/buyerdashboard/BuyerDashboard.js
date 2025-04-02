import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import Sidebar from "../../landingpage/Sidebar";
import GallerySec from "../../landingpage/GallerySec";
import Navbar from "../../landingpage/Navbar";
import { useLocation } from "react-router-dom";
import api from "../../../services/api";
import Navigation from "../../landingpage/Navigation";


const categories = [
  {
    name: "Painting",
    image: "https://via.placeholder.com/300",
    bgColor: "#f1f1f1",
  },
  {
    name: "Sculpture",
    image: "https://via.placeholder.com/300",
    bgColor: "#f1f1f1",
  },
  {
    name: "Photography",
    image: "https://via.placeholder.com/300",
    bgColor: "#f1f1f1",
  },
  {
    name: "Drawing",
    image: "https://via.placeholder.com/300",
    bgColor: "#f1f1f1",
  },
  {
    name: "Print",
    image: "https://via.placeholder.com/300",
    bgColor: "#f1f1f1",
  },
];



const BuyerDashboard = () => {
  const location = useLocation();
  const menuId = location.state?.menuId || null;
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    // Get All Artworks Using Filter
    const getArtworksUsingFilter = async () => {
      try {
        const response = await api.get("/api/menu/");

        if (response.status === 200 && response.data) {
          setArtworks?.(response.data);
        }
      } catch (error) {
        console.error("Error fetching menus:", error);
      }
    };
    getArtworksUsingFilter()
  }, [menuId])


  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Navbar />
      <Box sx={{ backgroundColor: "#0000FF", color: "white", p: 4, textAlign: "center" }}>
        <Typography variant="h3" fontWeight="bold">
          Original Artworks for Sale
        </Typography>
        <Typography variant="body1" mt={1}>
          Discover SINGULART's selection of original artworks created by contemporary artists from around the world.
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

export default BuyerDashboard;
