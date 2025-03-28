import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function ArtEdit() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  return (
    <>
      <Box className="min-h-screen bg-gray-50">
        {/* <Navigation setIsLoginOpen={setIsLoginOpen} /> */}
        <Container style={{ padding: 0, margin: 0, display: "contents" }}>
          <Box component="main" sx={{ flexGrow: 1, p: 0, mt: 2, m: 0 }}>
            {/* Portfolio Header */}
            <Typography
              variant="h4"
              sx={{
                fontSize: "30px",
                fontWeight: 600,
                textTransform: "capitalize",
                color: "#1c2b46",
                mb: "1.5rem",
                display: "block",
              }}
            >
              My Portfolio - About this artwork
            </Typography>
            <Box
              sx={{ mt: 2, p: 2, backgroundColor: "#e3f2fd", borderRadius: 2 }}
            >
              <Typography>
                <strong>My series > The Royal Raas Night - </strong>Radha
                Krishna (Religious) Art - Painting
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
                  label="Artwork picture"
                  sx={{
                    fontSize: "0.775rem",
                    color: "gray", // Default Color
                    "&.Mui-selected": {
                      color: "white", // Active Color
                      fontWeight: "bold",
                      backgroundColor: "#5600d3",
                      borderRadius: "5px",
                      borderBottom: "none",
                    },
                  }}
                />
                <Tab
                  label="Additional artwork pictures"
                  sx={{
                    fontSize: "0.775rem",
                    color: "gray",
                    "&.Mui-selected": {
                      color: "white", // Active Color
                      fontWeight: "bold",
                      backgroundColor: "#5600d3",
                      borderRadius: "5px",
                      borderBottom: "none",
                    },
                  }}
                />
                <Tab
                  label="Additional videos"
                  sx={{
                    fontSize: "0.775rem",
                    color: "gray",
                    "&.Mui-selected": {
                      color: "white", // Active Color
                      fontWeight: "bold",
                      backgroundColor: "#5600d3",
                      borderRadius: "5px",
                      borderBottom: "none",
                    },
                  }}
                />

                <Tab
                  label="About this artwork"
                  sx={{
                    fontSize: "0.775rem",
                    color: "gray",
                    "&.Mui-selected": {
                      color: "white", // Active Color
                      fontWeight: "bold",
                      backgroundColor: "#5600d3",
                      borderRadius: "5px",
                      borderBottom: "none",
                    },
                  }}
                />

                <Tab
                  label="Share on social media"
                  sx={{
                    fontSize: "0.775rem",
                    color: "gray",
                    "&.Mui-selected": {
                      color: "white", // Active Color
                      fontWeight: "bold",
                      backgroundColor: "#5600d3",
                      borderRadius: "5px",
                      borderBottom: "none",
                    },
                  }}
                />
              </Tabs>
            </Box>

            {/* Portfolio Stats */}
            <Box sx={{ p: 3, px: 0 }}>
              <Grid container spacing={3}>
                {/* Artworks for Sale */}
                <Grid item xs={12} sm={12}>
                  <Card
                    sx={{ textAlign: "center", p: 2 }}
                    // style={styles}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          mt: 2,
                          p: 2,
                          backgroundColor: "#e3f2fd",
                          borderRadius: 2,
                        }}
                      >
                        <Typography sx={{ textAlign: "left" }}>
                          <strong>
                            Since you do not have an active subscription,{" "}
                          </strong>
                          you cannot edit your artworks anymore. You are only
                          allowed to change their status and availability.
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>

                {/* ============ */}
                <Grid item xs={12} sm={12}>
                  <Box>
                    <InputLabel
                      sx={{ color: "#1c2b46", fontWeight: "600", pb: "0.5rem" }}
                    >
                      Title of the artwork
                    </InputLabel>
                    <TextField
                      label="Meera’s Mohan - Oil Painting By Hari Om Singh"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      // onChange={(e) => setFilter(e.target.value)}

                      sx={{
                        mt: 0,
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#ccc",
                          },
                          "&:hover fieldset": {
                            borderColor: "#5600d3",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#5600d3",
                            borderWidth: "2px",
                          },
                        },
                        // This ensures the border color also changes when dropdown is open
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#ccc",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#5600d3",
                        },
                        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            borderColor: "#5600d3",
                          },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#5600d3", // Label color when focused
                        },
                      }}
                    />
                       <Divider sx={{my:4}} />
                    <Typography
                      sx={{
                        color: "#1c2b46",
                        fontWeight: "600",
                        pb: "0.5rem",
                        mt: 2,
                      }}
                    >
                      Global dimensions once mounted (but unframed)
                    </Typography>
                   
                    <Box
                      sx={{ mb: 1, display: "flex", gap: 2, flexWrap: "wrap", }}
                    >
                      <Box>
                        <InputLabel
                          sx={{
                            color: "#1c2b46",
                            pb: "0.5rem",
                          }}
                        >
                          Unit
                        </InputLabel>
                        <Select
                          sx={{ width: "100%" }}
                          displayEmpty
                          sx={{
                            width: "200px",
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderColor: "#ccc",
                              },
                              "&:hover fieldset": {
                                borderColor: "#5600d3",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#5600d3",
                                borderWidth: "2px",
                              },
                            },
                            // This ensures the border color also changes when dropdown is open
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#ccc",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#5600d3",
                            },
                            "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                              {
                                borderColor: "#5600d3",
                              },
                            "& .MuiInputLabel-root.Mui-focused": {
                              color: "#5600d3", // Label color when focused
                            },
                          }}
                        >
                          <MenuItem value="views">Centimeters</MenuItem>
                          <MenuItem value="likes">Inches</MenuItem>
                        </Select>
                      </Box>

                      <Box>
                        <InputLabel
                          sx={{
                            color: "#1c2b46",
                            pb: "0.5rem",
                          }}
                        >
                          Height
                        </InputLabel>
                        <TextField
                          label="24.00"
                          variant="outlined"
                          fullWidth
                          margin="normal"
                          // onChange={(e) => setFilter(e.target.value)}

                          sx={{
                            mt: 0,
                            width: "100%",
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderColor: "#ccc",
                              },
                              "&:hover fieldset": {
                                borderColor: "#5600d3",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#5600d3",
                                borderWidth: "2px",
                              },
                            },
                            // This ensures the border color also changes when dropdown is open
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#ccc",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#5600d3",
                            },
                            "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                              {
                                borderColor: "#5600d3",
                              },
                            "& .MuiInputLabel-root.Mui-focused": {
                              color: "#5600d3", // Label color when focused
                            },
                          }}
                        />
                      </Box>

                      <Box>
                        <InputLabel
                          sx={{
                            color: "#1c2b46",
                            pb: "0.5rem",
                          }}
                        >
                          Width
                        </InputLabel>
                        <TextField
                          label="36.00"
                          variant="outlined"
                          fullWidth
                          margin="normal"
                          // onChange={(e) => setFilter(e.target.value)}

                          sx={{
                            mt: 0,
                            width: "100%",
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderColor: "#ccc",
                              },
                              "&:hover fieldset": {
                                borderColor: "#5600d3",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#5600d3",
                                borderWidth: "2px",
                              },
                            },
                            // This ensures the border color also changes when dropdown is open
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#ccc",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#5600d3",
                            },
                            "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                              {
                                borderColor: "#5600d3",
                              },
                            "& .MuiInputLabel-root.Mui-focused": {
                              color: "#5600d3", // Label color when focused
                            },
                          }}
                        />
                      </Box>

                      <Box>
                        <InputLabel
                          sx={{
                            color: "#1c2b46",
                            pb: "0.5rem",
                          }}
                        >
                          Depth
                        </InputLabel>
                        <TextField
                          label="0.00"
                          variant="outlined"
                          fullWidth
                          margin="normal"
                          // onChange={(e) => setFilter(e.target.value)}

                          sx={{
                            mt: 0,
                            width: "100%",
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderColor: "#ccc",
                              },
                              "&:hover fieldset": {
                                borderColor: "#5600d3",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#5600d3",
                                borderWidth: "2px",
                              },
                            },
                            // This ensures the border color also changes when dropdown is open
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#ccc",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#5600d3",
                            },
                            "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                              {
                                borderColor: "#5600d3",
                              },
                            "& .MuiInputLabel-root.Mui-focused": {
                              color: "#5600d3", // Label color when focused
                            },
                          }}
                        />
                      </Box>
                    </Box>
                    <Divider sx={{my:4}} />

                    <InputLabel
                      sx={{ color: "#1c2b46", pb: "0.5rem" }}
                    >
                      Year
                    </InputLabel>
                    <Select
                          sx={{ width: "100%" }}
                          displayEmpty
                          sx={{
                            width: "100%",
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderColor: "#ccc",
                              },
                              "&:hover fieldset": {
                                borderColor: "#5600d3",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#5600d3",
                                borderWidth: "2px",
                              },
                            },
                            // This ensures the border color also changes when dropdown is open
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#ccc",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#5600d3",
                            },
                            "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                              {
                                borderColor: "#5600d3",
                              },
                            "& .MuiInputLabel-root.Mui-focused": {
                              color: "#5600d3", // Label color when focused
                            },
                          }}
                        >
                          <MenuItem value="views">2020</MenuItem>
                          <MenuItem value="likes">2021</MenuItem>
                        </Select>

                        <InputLabel
                      sx={{ color: "#1c2b46", pb: "0.5rem", pt: '1.5rem' }}
                    >
                      Medium
                    </InputLabel>
                    <Select
                          sx={{ width: "100%" }}
                          displayEmpty
                          sx={{
                            width: "100%",
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderColor: "#ccc",
                              },
                              "&:hover fieldset": {
                                borderColor: "#5600d3",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#5600d3",
                                borderWidth: "2px",
                              },
                            },
                            // This ensures the border color also changes when dropdown is open
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#ccc",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#5600d3",
                            },
                            "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                              {
                                borderColor: "#5600d3",
                              },
                            "& .MuiInputLabel-root.Mui-focused": {
                              color: "#5600d3", // Label color when focused
                            },
                          }}
                        >
                          <MenuItem value="views">2020</MenuItem>
                          <MenuItem value="likes">2021</MenuItem>
                        </Select>
                  </Box>
                </Grid>
                {/* ============ */}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default ArtEdit;
