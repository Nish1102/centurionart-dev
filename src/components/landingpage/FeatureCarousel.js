import React, { useEffect } from "react";
import $ from "jquery";
// import OwlCarousel from "react-owl-carousel";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// Ensure jQuery is globally available
// if (typeof window !== "undefined") {
//   window.$ = window.jQuery = $;
// }

// Categories data
const categories = [
  { name: "Abstract", image: "/images/feature-1.jpg" },
  { name: "Landscapes", image: "/images/feature-2.jpg" },
  { name: "Portraits", image: "/images/feature-3.jpg" },
  { name: "Photography", image: "/images/feature-1.jpg" },
  { name: "Sculpture", image: "/images/feature-2.jpg" },
  { name: "Best-selling artists", image: "/images/feature-3.jpg" },
  { name: "Famous artists", image: "/images/feature-1.jpg" },
  { name: "Seasonal promotion", image: "/images/feature-2.jpg", color: "white" },
];

function FeatureCarousel() {
  // Owl Carousel settings
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  };

  // jQuery effects after component mounts
//   useEffect(() => {
//     const $owlCarousel = $(".owl-carousel");

//     if ($owlCarousel.length > 0) {
//       $owlCarousel.on("mouseover", function () {
//         $owlCarousel.trigger("stop.owl.autoplay");
//       });

//       $owlCarousel.on("mouseleave", function () {
//         $owlCarousel.trigger("play.owl.autoplay");
//       });

//       $owlCarousel.on("click", ".owl-nav button", function () {
//         $(this).css("background", "#ff6600");
//       });
//     }

//     return () => {
//       $owlCarousel.off("mouseover mouseleave click");
//     };
//   }, []);

  return (
    <Box className="featured_section">
      <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 } }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
              <Typography variant="h5" className="main_title">
              Featured collections
              </Typography>
              <Button variant="contained" className="commn_btn">
                Explore all categories
              </Button>
            </Box>

            {/* <OwlCarousel className="owl-carousel owl-theme" {...options}>
              {categories.map((category) => (
                <Box key={category.name} className="item" sx={{ p: 2, borderRadius: 2 }}>
                  <Paper
                    sx={{
                      boxShadow: "inherit",
                      padding: 0,
                      textAlign: "center",
                      borderRadius: 2,
                      color: category.color || "black",
                    }}
                  >
                    <Typography variant="subtitle1" fontWeight="bold">
                      {category.name}
                    </Typography>
                    <Box className="feature_img">
                      <img
                        src={category.image}
                        alt={category.name}
                        style={{ width: "100%", borderRadius: 8 }}
                      />
                    </Box>
                  </Paper>
                </Box>
              ))}
            </OwlCarousel> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default FeatureCarousel;
