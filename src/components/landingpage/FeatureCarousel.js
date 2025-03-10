import React from "react";
import { Box, Button, Container, Grid, Typography, IconButton } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// ✅ Categories data (Updated paths)
const categories = [
  { name: "Abstract", image: "/images/slider-1.jpg" },
  { name: "Landscapes", image: "/images/slider-2.jpg" },
  { name: "Portraits", image: "/images/slider-3.jpg" },
  { name: "Photography", image: "/images/slider-4.jpg" },
  { name: "Sculpture", image: "/images/slider-1.jpg" },
  { name: "Best-selling artists", image: "/images/slider-2.jpg" },
  { name: "Famous artists", image: "/images/slider-3.jpg" },
  { name: "Seasonal promotion", image: "/images/slider-4.jpg" },
];

// ✅ Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      right: -20,
      transform: "translateY(-50%)",
      backgroundColor: "#fff",
      boxShadow: 2,
      zIndex: 1,
      "&:hover": { backgroundColor: "#f0f0f0" },
      // display: "flex",
      // justifyContent: 'center',
      // alignItems:'center'
    }}
  >
   <ArrowForwardIosIcon
      style={{
        position: "relative",
        left: "4px",
      }}
    />
  </IconButton>
);

const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      left: -20,
      transform: "translateY(-50%)",
      backgroundColor: "#fff",
      boxShadow: 2,
      zIndex: 1,
      "&:hover": { backgroundColor: "#f0f0f0" },
    }}
  >
    <ArrowBackIosIcon />
  </IconButton>
);

function FeatureCarousel() {
  // Carousel settings
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box className="featured_section" position="relative">
      <Container
        maxWidth="lg"
        sx={{ py: { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 } }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between",
                 marginBottom: { xs: 3, sm: 3, md: 5, lg: 5, xl: 5, xxl: 5 },
               }}
            >
              <Typography variant="h5" className="main_title">
                Featured collections
              </Typography>
              <Button variant="contained" className="commn_btn">
                Explore all
              </Button>
            </Box>

            <Box sx={{ position: "relative" }}>
              <Slider {...settings}>
                {categories.map((item, index) => (
                  <Box key={index}>
                    <Grid container spacing={2} sx={{ p: 0 }}>
                      <Grid item xs={12}>
                        <Box className="featured_slider_row" sx={{ px: 2 }}>
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{
                              width: "100%",
                              height: "auto",
                              borderRadius: 12,
                              display: "block",
                            }}
                          />
                          <Typography variant="h6" align="center" mt={1}>
                            {item.name}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                ))}
              </Slider>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default FeatureCarousel;
