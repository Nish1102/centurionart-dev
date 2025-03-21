import React, { useEffect, useState } from "react";
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
import api from "../../services/api";


// item tag
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  background: "transparent",
  border: "0xp",
  boxShadow: "none",
}));

const FeaturedSec = () => {
  const [ categories, setCategories ] = useState([]);
  const [page, setPage] = useState(1);
  

  useEffect(() => {
    const getAllCategories = async() => {
      try {
        const response = await api.get(`/api/category/categories?_page=${page}&_limit=8`);
        if (response.status === 200 && response.data) {
          setCategories?.(response.data);
          // setTotalPages(Math.ceil(response.headers['x-total-count'] / 6))
        }
      } catch(error) {
        console.error(error)
      }
    }
    getAllCategories()
  }, [])

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
