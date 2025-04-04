import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Box, Button, Container, Typography } from "@mui/material";

// item tag
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  background: "transparent",
  border: "0xp",
  boxShadow: "none",
}));

function HeroSec() {
  return (
    <>
       <Box className="hero_section">
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 }, // Responsive padding-y
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} 
          sx={{
            order: { xs: 2, sm: 2, md: 0, lg: 0, xl: 0, xxl: 0 }, // Responsive order
            display:'flex',alignItems:'center' // Align center
          }}
          >
            <Item className="hero_caption">
              <Typography variant="h1" sx={{
                fontSize: {
    xs: '1.825rem',  // Extra small devices (phones)
    sm: '2rem',  // Small devices (tablets)
    md: '2.3rem',  // Medium devices (small laptops)
    lg: '2.8rem',  // Large devices (desktops)
    xl: '2.8rem',    // Extra large devices (large screens)
  }
              }}>
                30% off
              </Typography>
              <Typography variant="body1">
                Our seasonal promotion is now on
              </Typography>

              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                  my: 2,
                }}
              >
                <ListItem sx={{ display: "block", padding: 0 }}>
                  <ListItemAvatar
                    className="hero_list_text"
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                    }}
                  >
                    <TaskAltIcon className="hero_list_icon" />
                    <Typography variant="body1" className="ps-3">
                      Lorem Ipsum is simply dummy text
                    </Typography>
                  </ListItemAvatar>
                  <ListItemAvatar
                    className="hero_list_text"
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                    }}
                  >
                    <TaskAltIcon className="hero_list_icon" />
                    <Typography variant="body1" className="ps-3">
                      Lorem Ipsum is simply dummy text
                    </Typography>
                  </ListItemAvatar>
                  <ListItemAvatar
                    className="hero_list_text"
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                    }}
                  >
                    <TaskAltIcon className="hero_list_icon" />
                    <Typography variant="body1" className="ps-3">
                      Lorem Ipsum is simply dummy text
                    </Typography>
                  </ListItemAvatar>
                </ListItem>
              </List>

              <Button variant="contained" className="commn_btn" size="large">
                Shop Now
              </Button>
            </Item>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Item className="hero_img">
                  <img
                    src="../images/product-1.jpg" // Add image path
                    alt="hero_img"  // Add alt tag
                  />
                  <Box className="hero_img_text">
                    <Typography variant="body1">Rendering by the Water</Typography>
                    <span variant="body2">by <a href="#">John Doe</a></span>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={4} 
                sx={{
                      display: { xxl: "block", xl:"block", lg:"block", md:"block", sm:"none", xs:"none",} // Hide on xxl screens
                    }}
              >
              <Item className="hero_img"
              sx={{
                      mb: { xs: 2, sm: 2, md: 3, lg: 3, xl: 3 }, // Responsive padding-y
                      display: { xxl: "block", xl:"block", lg:"block", md:"block", sm:"none", xs:"none",} // Hide on xxl screens
                    }}
              >
                  <img
                    src="../images/product-2.jpg" // Add image path
                    alt="hero_img"  // Add alt tag
                    style={{width: "100%", height: "100%"}}
                  />
                  <Box className="hero_img_text">
                    <Typography variant="body1">Rendering by the Water</Typography>
                    <span variant="body2">by <a href="#">John Doe</a></span>
                  </Box>
                </Item>

                <Item className="hero_img">
                  <img
                    src="../images/product-3.jpg" // Add image path
                    alt="hero_img"  // Add alt tag
                    style={{width: "100%", height: "100%"}}
                  />
                  <Box className="hero_img_text">
                    <Typography variant="body1">Rendering by the Water</Typography>
                    <span variant="body2">by <a href="#">John Doe</a></span>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      </Box>
    </>
  );
}

export default HeroSec;
