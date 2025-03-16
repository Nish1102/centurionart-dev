import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  styled,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import api from "../../services/api";

// item tag
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  background: "transparent",
  border: "0xp",
  boxShadow: "none",
}));

const artworks = [
  { id: 1, title: "Abstract Colors", image: "https://via.placeholder.com/300" },
  { id: 2, title: "Urban Graffiti", image: "https://via.placeholder.com/300" },
  {
    id: 3,
    title: "Modern Expression",
    image: "https://via.placeholder.com/300",
  },
];

// bg_images
const styles = {
  backgroundImage: `url("/images/feature-1.jpg")`,
  backgroundSize: "cover", // optional
  backgroundPosition: "center", // optional
};

function GallerySec() {
  const [search, setSearch] = useState("");
  const [artworks, setArtworks] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await api.get(
          `/api/artwork/artworks?_page=${page}&_limit=8`
        );
        setArtworks(response.data);
        // setTotalPages(Math.ceil(response.headers["x-total-count"] / 6));
      } catch (error) {
        console.error("Failed to fetch artworks:", error);
      }
    };

    fetchArtworks();
  }, [page]);

  return (
    <>
      <Box className="art_section">
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
                  Art we love
                  </Typography>

                  <Button variant="contained" className="commn_btn">
                    Explore all categories
                  </Button>
                </Box>
                <Grid container spacing={3} justifyContent="center">
                  {Array.isArray(artworks) && artworks.length > 0 ? (
                    artworks
                      .filter(
                        (art) =>
                          art.title &&
                          art.title.toLowerCase().includes(search.toLowerCase())
                      )
                      .slice(0, 12) // Limit to 8 artworks
                      .map((art) => (
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          md={3}
                          key={art.id || Math.random()}
                          
                        >
                          <Paper
                            className="art_card"
                            sx={{
                              boxShadow: "inherit",
                            //   padding: 3,
                              textAlign: "center",
                              borderRadius: 2,
                            }}
                            
                          >
                            <Box className="art_img" style={styles}>
                            <span><img src="../images/auth.jpg" alt="auth"/>{art.author}</span>
                              <img
                                src={
                                  art.image || "https://via.placeholder.com/300"
                                }
                                alt={art.title || "Artwork"}
                                // style={{ width: "100%", borderRadius: 8 }}
                              />
                               <Box  className="art_details" fontWeight="bold">
                              
                                   <Box className="auth_caption" sx={{display:"flex",justifyContent:"space-between",alignItems:"baseline"}}>
                                   <Typography variant="h6">{art.title || "Untitled"}</Typography>
                                   <strong>{art.price}</strong>
                                   </Box> 

                                  
                               </Box>
                            </Box>

                            <Typography variant="body1">
                                {art.description}
                            </Typography>
                           

                           
                          </Paper>
                         
                        </Grid>
                      ))
                  ) : (
                    <Typography
                      variant="h6"
                      textAlign="center"
                      sx={{ gridColumn: "1/-1", mt: 4 }}
                    >
                      No artworks found.
                    </Typography>
                  )}
                </Grid>
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default GallerySec;
