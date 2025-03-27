import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Tab,
  Tabs,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";
import Navigation from "../../landingpage/Navigation";
import MailIcon from '@mui/icons-material/Mail'; 
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { List, ListItem, ListItemIcon, ListItemText, } from '@mui/material';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CheckIcon from '@mui/icons-material/Check';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReplayIcon from '@mui/icons-material/Replay';
// import artworks from "./artworksData"; // Assume artworksData.js contains an array of artwork objects
import image1 from "../../../assets/1.jpg";
import image2 from "../../../assets/2.jpg";

const ResellerDashboard = () => {
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("views");
  const [tabIndex, setTabIndex] = useState(0);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [showList, setShowList] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


  // card menu button
  const handleToggle = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  // ======listing icon with content
  // const items = [
  //   { icon: <MailIcon />, title: 'Inbox'},
  //   { icon: <MailIcon />, title: 'Notifications'},
  // ];

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
      image: "/images/reseller_art_1.jpg", // Replace with the actual image URL
      date: "Tuesday, August 4, 2020",
      price: 400000,
      views: 6190,
      likes: 697,
    },
    {
      id: 2,
      title: "Moments of Musical Love and Divine Romance - Radha Krishna",
      image: "/images/reseller_art_2.jpg",
      date: "Tuesday, August 4, 2020",
      price: 400000,
      views: 1010,
      likes: 358,
    },
    {
      id: 3,
      title: "The Eternal Melody - Lord Krishna Playing Flute",
      image: "/images/reseller_art_3.jpg",
      date: "Friday, June 12, 2019",
      price: 250000,
      views: 4520,
      likes: 512,
    },
    {
      id: 4,
      title: "Serene Buddha - Peaceful Meditation Artwork",
      image: "/images/reseller_art_4.jpg",
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


// bg_images
const styles = {
  backgroundImage: `url("/images/reseller_card_1.png")`,
  backgroundSize: "cover", // optional
  backgroundPosition: "center", // optional
};

// bg_images
const stylesTwo = {
  backgroundImage: `url("/images/reseller_card_2.png")`,
  backgroundSize: "cover", // optional
  backgroundPosition: "center", // optional
};


  return (
    <Box className="min-h-screen bg-gray-50">
      {/* <Navigation setIsLoginOpen={setIsLoginOpen} /> */}
      <Container style={{ padding: 0, margin: 0,display: 'contents' }}>
        <Box component="main" sx={{ flexGrow: 1, p: 0, mt: 2, m: 0,}}>
          {/* Portfolio Header */}
          <Typography variant="h4" sx={{
  fontSize: "30px",
  fontWeight: 600,
  textTransform: "capitalize",
  color: "#1c2b46",
  mb: '1.5rem', 
  display:'block'
}}>
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
    TabIndicatorProps={{
      style: { backgroundColor: "#5600d3" }, // Active Tab Bottom Border Color
    }}
  >
    <Tab
      label="Overview"
      sx={{
        fontSize: "0.775rem",
        color: "gray", // Default Color
        "&.Mui-selected": {
          color: "white", // Active Color
          fontWeight: "bold",
          backgroundColor: "#5600d3",
          borderRadius:'5px',
          borderBottom:'none'
        },
      }}
    />
    <Tab
      label="Pricing"
      sx={{
        fontSize: "0.775rem",
        color: "gray",
        "&.Mui-selected": {
          color: "white", // Active Color
          fontWeight: "bold",
          backgroundColor: "#5600d3",
          borderRadius:'5px',
          borderBottom:'none'
        },
      }}
    />
    <Tab
      label="Categories & Formats"
      sx={{
        fontSize: "0.775rem",
        color: "gray",
        "&.Mui-selected": {
          color: "white", // Active Color
          fontWeight: "bold",
          backgroundColor: "#5600d3",
          borderRadius:'5px',
          borderBottom:'none'
        },
      }}
    />
  </Tabs>
</Box>

          {/* Portfolio Stats */}
          <Box sx={{ p: 3, px: 0 }}>
            <Grid container spacing={3}>
              {/* Artworks for Sale */}
              <Grid item xs={12} sm={4}>
                <Card sx={{ textAlign: "center", p: 2 }} style={styles}>
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
                <Card sx={{ textAlign: "center", p: 2 }} style={stylesTwo}>
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
                <Card sx={{ textAlign: "center", p: 2 }} style={styles}>
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

        <Box sx={{ py: 3, px: 2, my: 2, background: "#fcfcfc", borderRadius: "10px" }}>
          <Container maxWidth={false} disableGutters>
            <Typography variant="h4" gutterBottom sx={{
  fontSize: "30px",
  fontWeight: 600,
  textTransform: "capitalize",
  color: "#1c2b46",
  mb: '1.5rem',
  display:'block'
}}>
              My Artworks
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={3} lg={3} xl={3} style={{ paddingTop: "1rem" }}>
                <Select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  displayEmpty    
                  sx={{
    width: '100%',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ccc',
      },
      '&:hover fieldset': {
        borderColor: '#5600d3',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#5600d3',
        borderWidth: '2px',
      },
    },
    // This ensures the border color also changes when dropdown is open
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ccc',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#5600d3',
    },
    '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#5600d3',
    },
  }} 
                >
                  <MenuItem value="views">Order by</MenuItem>
                  <MenuItem value="likes">Likes</MenuItem>
                </Select>
              </Grid>

              <Grid item xs={12} sm={12} md={3} lg={3} xl={3} style={{ paddingTop: "1rem" }}>
                <Select
                  value={sortBy}
                  sx={{ width: "100%" }}
                  onChange={(e) => setSortBy(e.target.value)}
                  displayEmpty  
                  sx={{
    width: '100%',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ccc',
      },
      '&:hover fieldset': {
        borderColor: '#5600d3',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#5600d3',
        borderWidth: '2px',
      },
    },
    // This ensures the border color also changes when dropdown is open
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ccc',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#5600d3',
    },
    '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#5600d3',
    },
  }} 
                >
                  <MenuItem value="views">All range</MenuItem>
                  <MenuItem value="likes">Likes</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={12} md={3} lg={3} xl={3} style={{ paddingTop: "1rem" }}>
                <Select
                  value={sortBy}
                  sx={{ width: "100%" }}
                  onChange={(e) => setSortBy(e.target.value)}
                  displayEmpty    
                  sx={{
    width: '100%',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ccc',
      },
      '&:hover fieldset': {
        borderColor: '#5600d3',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#5600d3',
        borderWidth: '2px',
      },
    },
    // This ensures the border color also changes when dropdown is open
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ccc',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#5600d3',
    },
    '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#5600d3',
    },
  }} 
                >
                  <MenuItem value="views">Order by</MenuItem>
                  <MenuItem value="likes">Likes</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={12} md={3} lg={3} xl={3} style={{ paddingTop: "1rem" }}>
                <Select
                  value={sortBy}
                  sx={{ width: "100%" }}
                  onChange={(e) => setSortBy(e.target.value)}
                  displayEmpty
                  sx={{
    width: '100%',
    '& .MuiOutlinedInput-root': { 
      '& fieldset': {
        borderColor: '#ccc',
      },
      '&:hover fieldset': {
        borderColor: '#5600d3',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#5600d3',
        borderWidth: '2px',
      },
    },
    // This ensures the border color also changes when dropdown is open
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ccc',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#5600d3',
    },
    '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#5600d3',
    },
  }} 
                >
                  <MenuItem value="views">Sorting</MenuItem>
                  <MenuItem value="likes">Likes</MenuItem>
                </Select>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={2}
                lg={2}
                xl={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                style={{ paddingTop: "1rem" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Checkbox {...label} />
                  <Typography variant="body1">only hot leads</Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                style={{ paddingTop: "1rem" }}
              >
                <TextField
                  label="Search Artworks"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={(e) => setFilter(e.target.value)}
                 
                  sx={{
                    mt: 0 ,
    width: '100%',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ccc',
      },
      '&:hover fieldset': {
        borderColor: '#5600d3',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#5600d3',
        borderWidth: '2px',
      },
    },
    // This ensures the border color also changes when dropdown is open
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ccc',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#5600d3',
    },
    '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#5600d3',
    },
  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                xl={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                style={{ paddingTop: "1rem" }}
              >
                <Box style={{ paddingTop: "0rem" }}>
                  <Button
                    variant="outlined"
                    sx={{
                      mr: 2,
                      border: "1px solid #5600d3",
                      color: "#5600d3",
                    }}
                  >
                    <ReplayIcon sx={{ color: "#5600d3" }} /> resetfilters
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#5600d3" }}
                  >
                    Apply
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        { filteredArtworks.map((artwork) => (
          <Card
            key={artwork.id}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, // column on mobile, row on larger
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "center" },
              gap: 2,
              mb: 2,
              p: 2,
              flexWrap: "wrap",
              position: "relative",
              py: 1,
            }}
          >
            {/* Show toggle button on mobile */}
            {isMobile && (
              <Box
                sx={{
                  mt: 1,
                  position: "absolute",
                  zIndex: 1,
                  top: "2rem",
                  right: "23px",
                }}
              >
                <IconButton
                  onClick={() => handleToggle(artwork.id)}
                  sx={{
                    fontSize: "0.75rem",
                    textTransform: "capitalize",
                    backgroundColor: "#eeeeee !important",
                    color: "#333",
                    borderRadius: 1,
                    width: "fit-content",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MoreVertIcon />
                </IconButton>
              </Box>
            )}

            {/* Right: Icon or List Section */}

            <Box
              sx={{
                display: {
                  xs: "block",
                  sm: "block",
                  md: "none",
                  lg: "none",
                  xl: "none",
                  xxl: "none",
                },
              }}
            >
               {activeId === artwork.id && (
                <List
                  sx={{
                    position: "absolute",
                    zIndex: 1,
                    top: "5rem",
                    right: "0.8rem",
                    backgroundColor: "white",
                    m: "10px",
                    borderRadius: "5px",
                    pr: "20px",
                    transition: isMobile ? undefined : "all 0.2s ease-in-out",
                    boxShadow: 3,
                  }}
                >
                  <ListItem disableGutters sx={{ p: 0, m: 0 }}>
                    <ListItemIcon
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <IconButton>
                        <RemoveRedEyeIcon
                          sx={{
                            fontSize: "1.25rem",
                            fontWeight: 600,
                            color: "#5600d3",
                          }}
                        />
                      </IconButton>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontSize: "0.775rem",
                            fontWeight: 600,
                            color: "black",
                          }}
                        >
                          1,222
                        </Typography>
                      }
                    />
                  </ListItem>

                  <ListItem disableGutters sx={{ p: 0, m: 0 }}>
                    <ListItemIcon
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <IconButton>
                        <AdsClickIcon
                          sx={{
                            fontSize: "1.25rem",
                            fontWeight: 600,
                            color: "#5600d3",
                          }}
                        />
                      </IconButton>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontSize: "0.775rem",
                            fontWeight: 600,
                            color: "black",
                          }}
                        >
                          1,222
                        </Typography>
                      }
                    />
                  </ListItem>

                  <ListItem disableGutters sx={{ p: 0, m: 0 }}>
                    <ListItemIcon
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <IconButton>
                        <FavoriteBorderIcon
                          sx={{
                            fontSize: "1.25rem",
                            fontWeight: 600,
                            color: "#5600d3",
                          }}
                        />
                      </IconButton>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontSize: "0.775rem",
                            fontWeight: 600,
                            color: "black",
                          }}
                        >
                          1,222
                        </Typography>
                      }
                    />
                  </ListItem>

                  <ListItem disableGutters sx={{ p: 0, m: 0 }}>
                    <ListItemIcon
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <IconButton>
                        <MailOutlineIcon
                          sx={{
                            fontSize: "1.25rem",
                            fontWeight: 600,
                            color: "#5600d3",
                          }}
                        />
                      </IconButton>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontSize: "0.775rem",
                            fontWeight: 600,
                            color: "black",
                          }}
                        >
                          1,222
                        </Typography>
                      }
                    />
                  </ListItem>

                  {/* <ListItem disableGutters sx={{ p: 0, m: 0 }}>
                    <ListItemIcon
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <IconButton>
                        <CheckIcon
                          sx={{
                            fontSize: "1.25rem",
                            fontWeight: 600,
                            color: "#5600d3",
                          }}
                        />
                      </IconButton>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontSize: "0.775rem",
                            fontWeight: 600,
                            color: "black",
                          }}
                        >
                          1,222
                        </Typography>
                      }
                    />
                  </ListItem> */}
                </List>
              )}
            </Box>
            {/* Card Image */}
            <CardMedia
              component="img"
              image={artwork.image}
              alt={artwork.title}
              sx={{
                width: { xs: "100%", sm: 260 },
                height: "auto",
                borderRadius: 2,
                objectFit: "cover",
                position: "relative",
              }}
            />

            {/* Content Section */}
            <CardContent
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center" },
                gap: 2,
                width: "100%",
                p: 0,
                pb: 0,
              }}
              style={{ paddingBottom: "0px" }}
            >
              {/* Left: Text Content */}
              <Box sx={{ flex: 1, width: "100%", pb: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: {
                      xs: "0.875rem",
                      sm: "1rem",
                      md: "1.125rem",
                      lg: "1.2rem",
                      xl: "1.75rem",
                    },
                    color: "#1c2b46",
                  }}
                >
                  {artwork.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "0.775rem",
                    fontWeight: 600,
                    color: "#5600d3",
                  }}
                >
                  {artwork.date}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    pt: 2,
                    fontSize: "0.875rem",
                    color: "#1c2b46",
                    fontWeight: 600,
                  }}
                >
                  <strong>Price: ₹</strong>{" "}
                  <span style={{ color: "#5600d3" }}>{artwork.price}</span>
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "0.875rem",
                    color: "#1c2b46",
                    fontWeight: 600,
                  }}
                >
                  <strong>Views:</strong> {artwork.views}
                </Typography>

                <Button
                  variant="contained"
                  sx={{ mt: 1, backgroundColor: "#1c2b46" }}
                >
                  Edit
                </Button>
              </Box>

              {/* Right: Icon or List Section */}

              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                    lg: "block",
                    xl: "block",
                    xxl: "block",
                  },
                }}
              >
                {(!isMobile || showList) && (
                  <List>
                    <ListItem disableGutters sx={{ p: 0, m: 0 }}>
                      <ListItemIcon
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <IconButton>
                          <RemoveRedEyeIcon
                            sx={{
                              fontSize: "1.25rem",
                              fontWeight: 600,
                              color: "#5600d3",
                            }}
                          />
                        </IconButton>
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontSize: "0.775rem",
                              fontWeight: 600,
                              color: "black",
                            }}
                          >
                            1,222
                          </Typography>
                        }
                      />
                    </ListItem>

                    <ListItem disableGutters sx={{ p: 0, m: 0 }}>
                      <ListItemIcon
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <IconButton>
                          <AdsClickIcon
                            sx={{
                              fontSize: "1.25rem",
                              fontWeight: 600,
                              color: "#5600d3",
                            }}
                          />
                        </IconButton>
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontSize: "0.775rem",
                              fontWeight: 600,
                              color: "black",
                            }}
                          >
                            1,222
                          </Typography>
                        }
                      />
                    </ListItem>

                    <ListItem disableGutters sx={{ p: 0, m: 0 }}>
                      <ListItemIcon
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <IconButton>
                          <FavoriteBorderIcon
                            sx={{
                              fontSize: "1.25rem",
                              fontWeight: 600,
                              color: "#5600d3",
                            }}
                          />
                        </IconButton>
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontSize: "0.775rem",
                              fontWeight: 600,
                              color: "black",
                            }}
                          >
                            1,222
                          </Typography>
                        }
                      />
                    </ListItem>

                    <ListItem disableGutters sx={{ p: 0, m: 0 }}>
                      <ListItemIcon
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <IconButton>
                          <MailOutlineIcon
                            sx={{
                              fontSize: "1.25rem",
                              fontWeight: 600,
                              color: "#5600d3",
                            }}
                          />
                        </IconButton>
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontSize: "0.775rem",
                              fontWeight: 600,
                              color: "black",
                            }}
                          >
                            1,222
                          </Typography>
                        }
                      />
                    </ListItem>

                    <ListItem disableGutters sx={{ p: 0, m: 0 }}>
                      <ListItemIcon
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <IconButton>
                          <CheckIcon
                            sx={{
                              fontSize: "1.25rem",
                              fontWeight: 600,
                              color: "#5600d3",
                            }}
                          />
                        </IconButton>
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontSize: "0.775rem",
                              fontWeight: 600,
                              color: "black",
                            }}
                          >
                            1,222
                          </Typography>
                        }
                      />
                    </ListItem>
                  </List>
                )}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Container>

      
    </Box>
  );
};

export default ResellerDashboard;
