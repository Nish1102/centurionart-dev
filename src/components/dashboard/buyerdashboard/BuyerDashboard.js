import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import Sidebar from "../../landingpage/Sidebar";
import GallerySec from "../../landingpage/GallerySec";
import Navbar from "../../landingpage/Navbar";
import { useLocation } from "react-router-dom";
import api from "../../../services/api";


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
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <Box sx={{ display: "flex", p: 4 }}>
        {/* Sidebar */}
        {/* <Sidebar /> */}

        {/* Main Content */}
        {/* <Box sx={{ flexGrow: 1, ml: 32 }}> */}
        <Typography variant="h4" textAlign="center" fontWeight="bold" mb={4}>
          Original Artworks for Sale
        </Typography>
        <Typography variant="body1" textAlign="center" mb={4}>
          Discover SINGULART's selection of original artworks created by
          contemporary artists from around the world.
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {/* {categories.map((category) => (
            <Grid item xs={12} sm={6} md={3} key={category.name}>
              <Paper sx={{ backgroundColor: category.bgColor, padding: 2, textAlign: "center", borderRadius: 2 }}>
                <Typography variant="subtitle1" fontWeight="bold">{category.name}</Typography>
                <img src={category.image} alt={category.name} style={{ width: "100%", borderRadius: 8 }} />
              </Paper>
            </Grid>
          ))} */}
          <GallerySec />
        </Grid>
        <Box textAlign="center" mt={3}>
          <Button variant="outlined" color="primary">
            Explore all categories
          </Button>
        </Box>
      </Box>
      {/* </Box> */}
    </div>
  );
};

export default BuyerDashboard;
