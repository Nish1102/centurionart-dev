import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Grid2,
  Paper,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// item tag
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  background: "transparent",
  border: "0xp",
  boxShadow: "none",
}));

// categories
const categories = [
  { name: "Abstract", image: "../images/feature-1.jpg" },
  { name: "Landscapes", image: "../images/feature-2.jpg" },
  { name: "Portraits", image: "../images/feature-3.jpg" },
  { name: "Photography", image: "../images/feature-1.jpg" },
  { name: "Sculpture", image: "../images/feature-2.jpg" },
  { name: "Best-selling artists", image: "../images/feature-3.jpg" },
  { name: "Famous artists", image: "../images/feature-1.jpg" },
  {
    name: "Seasonal promotion",
    image: "../images/feature-2.jpg",
    color: "white",
  },
];

function FeaturedSec() {
  return (
    <>
      <Box className="featured_section">
        <Container
          maxWidth="lg"
          sx={{
            py: { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 }, // Responsive padding-y
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Item>
                <Box
                  sx={{
                    display: {
                      xs: "block",
                      sm: "block",
                      md: "flex",
                      lg: "flex",
                      xl: "flex",
                      xxl: "flex",
                    },
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: { xs: 3, sm: 3, md: 5, lg: 5, xl: 5, xxl: 5 },
                  }}
                >
                  <Typography variant="h5" className="main_title">
                    Featured artwork categories
                  </Typography>

                  
                    <Button variant="contained" className="commn_btn">
                      Explore all categories
                    </Button>
                </Box>
                {/* <Typography variant="body1" textAlign="center" mb={3}>
          Whatever your taste, style, or mood, find original art you love in these popular categories
        </Typography> */}
                <Grid container spacing={3} justifyContent="center">
                  {categories.map((category) => (
                    <Grid item xs={12} sm={6} md={3} key={category.name}>
                      <Paper
                        className="feature_card"
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
                    </Grid>
                  ))}
                </Grid>
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default FeaturedSec;
