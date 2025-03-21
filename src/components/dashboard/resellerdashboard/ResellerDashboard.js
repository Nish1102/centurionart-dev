import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  MenuItem,
  Select,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Navigation from "../../landingpage/Navigation";
// import artworks from "./artworksData"; // Assume artworksData.js contains an array of artwork objects
import image1 from "../../../assets/1.jpg";
import image2 from "../../../assets/2.jpg";

const ResellerDashboard = () => {
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("views");
  const [tabIndex, setTabIndex] = useState(0);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const filteredArtworks = [
    {
      id: 1,
      title: "Meera’s Mohan - Oil Painting By Hari Om Singh",
      image: image1, // Replace with the actual image URL
      date: "Tuesday, August 4, 2020",
      price: 400000,
      views: 6190,
      likes: 697,
    },
    {
      id: 2,
      title: "Moments of Musical Love and Divine Romance - Radha Krishna",
      image: image2,
      date: "Tuesday, August 4, 2020",
      price: 400000,
      views: 1010,
      likes: 358,
    },
    {
      id: 3,
      title: "The Eternal Melody - Lord Krishna Playing Flute",
      image: image1,
      date: "Friday, June 12, 2019",
      price: 250000,
      views: 4520,
      likes: 512,
    },
    {
      id: 4,
      title: "Serene Buddha - Peaceful Meditation Artwork",
      image: image2,
      date: "Sunday, March 15, 2021",
      price: 350000,
      views: 7230,
      likes: 812,
    },
  ]
    .filter((artwork) =>
      artwork.title.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => b[sortBy] - a[sortBy]);

  return (
    <div className="min-h-screen bg-gray-50" >
      {/* <Navigation setIsLoginOpen={setIsLoginOpen} /> */}
      <Container style={{padding:0, margin: 0}}>
       
        <Box component="main" sx={{ flexGrow: 1, p: 0, mt: 2, m:0 }}>
          {/* Portfolio Header */}
          <Typography variant="h4" fontWeight="bold">
            My Portfolio
          </Typography>
          <Box
            sx={{ mt: 2, p: 2, backgroundColor: "#e3f2fd", borderRadius: 2 }}
          >
            <Typography>
              <strong>Go live and the first 14 days are on us!</strong> Fill in
              your banking details so we can activate your profile.
            </Typography>
          </Box>

          {/* Tabs Section */}
          <Box sx={{ borderBottom: 1, borderColor: "divider", mt: 2 }}>
            <Tabs
              value={tabIndex}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="Overview" />
              <Tab label="Pricing" />
              <Tab label="Categories & Formats" />
            </Tabs>
          </Box>

          {/* Portfolio Stats */}
          <Box sx={{ p: 3, px: 0 }}>
            <Grid container spacing={3}>
              {/* Artworks for Sale */}
              <Grid item xs={12} sm={4}>
                <Card sx={{ textAlign: "center", p: 2 }}>
                  <CardContent>
                    <Typography variant="h4" fontWeight="bold">
                      101
                    </Typography>
                    <Typography variant="subtitle1">
                      Artworks for Sale
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Artworks in Draft */}
              <Grid item xs={12} sm={4}>
                <Card sx={{ textAlign: "center", p: 2 }}>
                  <CardContent>
                    <Typography variant="h4" fontWeight="bold">
                      1
                    </Typography>
                    <Typography variant="subtitle1">
                      Artworks in Draft
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Artworks Not for Sale */}
              <Grid item xs={12} sm={4}>
                <Card sx={{ textAlign: "center", p: 2 }}>
                  <CardContent>
                    <Typography variant="h4" fontWeight="bold">
                      3
                    </Typography>
                    <Typography variant="subtitle1">
                      Artworks Not for Sale
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>

          {/* Add Artwork Notice */}
          <Box
            sx={{ p: 3, backgroundColor: "#f3e5f5", borderRadius: 2, mt: 3 }}
          >
            <Typography>
              If you want to add a new artwork to your portfolio, you can do it
              in the Series section.
            </Typography>
          </Box>
        </Box>
        <Typography variant="h4" gutterBottom>
          My Artworks
        </Typography>
        <TextField
          label="Search Artworks"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => setFilter(e.target.value)}
        />
        <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <MenuItem value="views">Number of Views</MenuItem>
          <MenuItem value="likes">Likes</MenuItem>
        </Select>
        {filteredArtworks.map((artwork) => (
          <Card key={artwork.id} sx={{ display: "flex", marginTop: 2 }}>
            <CardMedia
              component="img"
              image={artwork.image}
              alt={artwork.title}
              sx={{ width: 160 }}
            />
            <CardContent>
              <Typography variant="h6" sx={{
                            fontSize: {
                xs: '0.875rem', 
                sm: '1rem',     
                md: '1.125rem', 
                lg: '1.2rem',   
                xl: '1.25rem',  
              },
              color: '#1c2b46',
              }}>{artwork.title}</Typography>
              <Typography variant="body2" sx={{fontSize:'0.775rem',fontWeight:'600',color:'#5600d3'}}>{artwork.date}</Typography>
              <Typography variant="body1"><strong>Price: ₹</strong>{artwork.price}</Typography>
              <Typography variant="body2"><storng>Views:</storng> {artwork.views}</Typography>
              <Button variant="contained" color="primary" sx={{ marginTop: 1 }}>
                Edit
              </Button>
            </CardContent>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default ResellerDashboard;
