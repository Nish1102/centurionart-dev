import {
  Box,
  Card,
  CardContent,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Tab,
  Tabs,
  TextField,
  Typography,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React, { useState } from "react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function ArtEdit() {
  const [tabIndex, setTabIndex] = useState(0);
  const [firstQuestion, setFirstQuestion] = useState("");
  const [secondQuestion, setSecondQuestion] = useState("");
  const [saleStatus, setSaleStatus] = useState("");
  // ===============>
  const [notSale, setNotSale] = useState("");
  const [selectedOption, setSelectedOption] = useState("price_of_the_artwork");
  // ==========>
  const [open, setOpen] = useState(false);

  // Sample data for the table
  const tableData = [
    { id: 1, name: "Item 1", description: "Description 1", price: "$100" },
    { id: 2, name: "Item 2", description: "Description 2", price: "$200" },
    { id: 3, name: "Item 3", description: "Description 3", price: "$300" },
  ];

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
                    <Divider sx={{ my: 4 }} />
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
                      sx={{ mb: 1, display: "flex", gap: 2, flexWrap: "wrap" }}
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
                    <Divider sx={{ my: 4 }} />

                    <InputLabel sx={{ color: "#1c2b46", pb: "0.5rem" }}>
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
                      sx={{ color: "#1c2b46", pb: "0.5rem", pt: "1.5rem" }}
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

                <Divider sx={{ my: 4 }} />

                <Grid item xs={12} sm={12}>
                  <Typography
                    sx={{
                      color: "#1c2b46",
                      fontWeight: "600",

                      mt: 2,
                    }}
                  >
                    Category
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <Box
                    sx={{
                      mb: 1,
                      display: "flex",
                      gap: 2,
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        "&.Mui-checked": {
                          color: "#5600d3",
                        },
                      }}
                    />
                    <InputLabel
                      sx={{
                        color: "#1c2b46",
                        pb: "0",
                      }}
                    >
                      Category
                    </InputLabel>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <Box
                    sx={{
                      mb: 1,
                      display: "flex",
                      gap: 2,
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        "&.Mui-checked": {
                          color: "#5600d3",
                        },
                      }}
                    />
                    <InputLabel
                      sx={{
                        color: "#1c2b46",
                        pb: "0",
                      }}
                    >
                      Category
                    </InputLabel>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <Box
                    sx={{
                      mb: 1,
                      display: "flex",
                      gap: 2,
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        "&.Mui-checked": {
                          color: "#5600d3",
                        },
                      }}
                    />
                    <InputLabel
                      sx={{
                        color: "#1c2b46",
                        pb: "0",
                      }}
                    >
                      Category
                    </InputLabel>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <Box
                    sx={{
                      mb: 1,
                      display: "flex",
                      gap: 2,
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        "&.Mui-checked": {
                          color: "#5600d3",
                        },
                      }}
                    />
                    <InputLabel
                      sx={{
                        color: "#1c2b46",
                        pb: "0",
                      }}
                    >
                      Category
                    </InputLabel>
                  </Box>
                </Grid>

                {/* style */}

                <Grid item xs={12} sm={12}>
                  <Divider sx={{ my: 4 }} />
                  <Typography
                    sx={{
                      color: "#1c2b46",
                      fontWeight: "600",

                      mt: 2,
                    }}
                  >
                    Style
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <Box
                    sx={{
                      mb: 1,
                      display: "flex",
                      gap: 2,
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        "&.Mui-checked": {
                          color: "#5600d3",
                        },
                      }}
                    />
                    <InputLabel
                      sx={{
                        color: "#1c2b46",
                        pb: "0",
                      }}
                    >
                      Category
                    </InputLabel>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <Box
                    sx={{
                      mb: 1,
                      display: "flex",
                      gap: 2,
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        "&.Mui-checked": {
                          color: "#5600d3",
                        },
                      }}
                    />
                    <InputLabel
                      sx={{
                        color: "#1c2b46",
                        pb: "0",
                      }}
                    >
                      Category
                    </InputLabel>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <Box
                    sx={{
                      mb: 1,
                      display: "flex",
                      gap: 2,
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        "&.Mui-checked": {
                          color: "#5600d3",
                        },
                      }}
                    />
                    <InputLabel
                      sx={{
                        color: "#1c2b46",
                        pb: "0",
                      }}
                    >
                      Category
                    </InputLabel>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <Box
                    sx={{
                      mb: 1,
                      display: "flex",
                      gap: 2,
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        "&.Mui-checked": {
                          color: "#5600d3",
                        },
                      }}
                    />
                    <InputLabel
                      sx={{
                        color: "#1c2b46",
                        pb: "0",
                      }}
                    >
                      Category
                    </InputLabel>
                  </Box>
                </Grid>

                {/* specific medium */}

                <Grid item xs={12} sm={12}>
                  <Divider sx={{ my: 4 }} />
                  <Typography
                    sx={{
                      color: "#1c2b46",
                      fontWeight: "600",

                      mt: 2,
                    }}
                  >
                    Specific Medium
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <Box
                    sx={{
                      mb: 1,
                      display: "flex",
                      gap: 2,
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        "&.Mui-checked": {
                          color: "#5600d3",
                        },
                      }}
                    />
                    <InputLabel
                      sx={{
                        color: "#1c2b46",
                        pb: "0",
                      }}
                    >
                      Category
                    </InputLabel>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <Box
                    sx={{
                      mb: 1,
                      display: "flex",
                      gap: 2,
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        "&.Mui-checked": {
                          color: "#5600d3",
                        },
                      }}
                    />
                    <InputLabel
                      sx={{
                        color: "#1c2b46",
                        pb: "0",
                      }}
                    >
                      Category
                    </InputLabel>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <Box
                    sx={{
                      mb: 1,
                      display: "flex",
                      gap: 2,
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        "&.Mui-checked": {
                          color: "#5600d3",
                        },
                      }}
                    />
                    <InputLabel
                      sx={{
                        color: "#1c2b46",
                        pb: "0",
                      }}
                    >
                      Category
                    </InputLabel>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <Box
                    sx={{
                      mb: 1,
                      display: "flex",
                      gap: 2,
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        "&.Mui-checked": {
                          color: "#5600d3",
                        },
                      }}
                    />
                    <InputLabel
                      sx={{
                        color: "#1c2b46",
                        pb: "0",
                      }}
                    >
                      Category
                    </InputLabel>
                  </Box>
                </Grid>

                {/* artwork support */}

                <Grid item xs={12} sm={12}>
                  <Divider sx={{ my: 4 }} />

                  <Box>
                    <InputLabel sx={{ color: "#1c2b46", pb: "0.5rem" }}>
                      Artwork support
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

                <Grid item xs={12} sm={12}>
                  <Divider sx={{ my: 4 }} />

                  <Box>
                    <InputLabel sx={{ color: "#1c2b46", pb: "0.5rem" }}>
                      Is the artwork mounted on a solid support ?
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

                <Grid item xs={12} sm={12}>
                  <Divider sx={{ my: 2 }} />
                  <InputLabel sx={{ color: "#1c2b46" }}>
                    Is the artwork framed ?
                  </InputLabel>
                </Grid>

                {/* ----- */}

                {/* First Question */}
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <Box
                    sx={{
                      mb: 0,
                      display: "flex",
                      gap: 2,
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <FormControl>
                      <RadioGroup
                        value={firstQuestion}
                        onChange={(e) => setFirstQuestion(e.target.value)}
                      >
                        <FormControlLabel
                          value="yes"
                          control={
                            <Radio
                              sx={{ "&.Mui-checked": { color: "#5600d3" } }}
                            />
                          }
                          label="Yes"
                        />
                        <FormControlLabel
                          value="no"
                          control={
                            <Radio
                              sx={{ "&.Mui-checked": { color: "#5600d3" } }}
                            />
                          }
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Box>
                </Grid>

                {/* Divider and Second Question */}
                <Grid item xs={12} sm={12}>
                  <Divider sx={{ my: 2 }} />
                  <InputLabel sx={{ color: "#1c2b46" }}>
                    Is the artwork ready to hang?
                  </InputLabel>
                </Grid>

                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <Box
                    sx={{
                      mb: 0,
                      display: "flex",
                      gap: 2,
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <FormControl>
                      <RadioGroup
                        value={secondQuestion}
                        onChange={(e) => setSecondQuestion(e.target.value)}
                      >
                        <FormControlLabel
                          value="yes"
                          control={
                            <Radio
                              sx={{ "&.Mui-checked": { color: "#5600d3" } }}
                            />
                          }
                          label="Yes"
                        />
                        <FormControlLabel
                          value="no"
                          control={
                            <Radio
                              sx={{ "&.Mui-checked": { color: "#5600d3" } }}
                            />
                          }
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Box>
                </Grid>

                {/* Divider and Third Question */}
                <Grid item xs={12} sm={12}>
                  <Divider sx={{ my: 2 }} />
                  <InputLabel sx={{ color: "#1c2b46" }}>
                    Artwork sale status
                  </InputLabel>
                </Grid>

                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <Box
                    sx={{
                      mb: 0,
                      display: "flex",
                      gap: 2,
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <FormControl>
                      <RadioGroup
                        value={saleStatus}
                        onChange={(e) => setNotSale(e.target.value)}
                      >
                        <FormControlLabel
                          value="Not_currently_available_for_sale"
                          control={
                            <Radio
                              sx={{ "&.Mui-checked": { color: "#5600d3" } }}
                            />
                          }
                          label="Not currently available for sale"
                        />
                        <FormControlLabel
                          value="This_artwork_is_for_sale"
                          control={
                            <Radio
                              sx={{ "&.Mui-checked": { color: "#5600d3" } }}
                            />
                          }
                          label="This artwork is for sale"
                        />
                        <FormControlLabel
                          value="Artwork_already_sold"
                          control={
                            <Radio
                              sx={{ "&.Mui-checked": { color: "#5600d3" } }}
                            />
                          }
                          label="Artwork already sold"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Box>
                </Grid>

                {/* Price of the artwork Start*/}

               {notSale === "This_artwork_is_for_sale" && (
                <Grid item xs={12} sm={12}>
                  <Divider sx={{ my: 2 }} />
                  <Typography
                    sx={{
                      color: "#1c2b46",
                      fontWeight: "600",
                      pb: "0.5rem",
                      mt: 2,
                    }}
                  >
                    Price of the artwork:
                  </Typography>
                  <Box>
                    <InputLabel sx={{ color: "#1c2b46", pb: "0.5rem" }}>
                      Currency
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

                  <Box
                    sx={{
                      mb: 0,
                      // display: "flex",
                      gap: 2,
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#1c2b46",
                        fontWeight: "600",
                        pb: "0.5rem",
                        mt: 2,
                      }}
                    >
                      I calculate the price of my artwork from:
                    </Typography>

                    <Box>
                      <FormControl>
                        <RadioGroup
                          value={selectedOption}
                          onChange={(e) => setSelectedOption(e.target.value)}
                        >
                          <FormControlLabel
                            value="price_of_the_artwork"
                            control={
                              <Radio
                                sx={{ "&.Mui-checked": { color: "#5600d3" } }}
                              />
                            }
                            label="Price of the artwork"
                          />
                        </RadioGroup>
                      </FormControl>

                      {selectedOption === "price_of_the_artwork" && (
                        <Grid
                          container
                          spacing={2}
                          sx={{ alignItems: "flex-end" }}
                        >
                          <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Box sx={{ p: 1 }}>
                              <TextField
                                label="Amount"
                                variant="outlined"
                                fullWidth
                                type="number"
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      ₹
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </Box>
                          </Grid>

                          <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Box sx={{ p: 1 }}>
                              <Typography
                                sx={{
                                  color: "#1c2b46",
                                  fontWeight: "600",
                                  pb: "0.5rem",
                                  mt: 2,
                                }}
                              >
                                Your gross profit: 50.00% of the market price
                                (VAT may apply)
                              </Typography>
                              <TextField
                                label="Amount"
                                variant="outlined"
                                type="number"
                                fullWidth
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      ₹
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </Box>
                          </Grid>
                        </Grid>
                      )}

                      <br />

                      <FormControl>
                        <RadioGroup
                          value={selectedOption}
                          onChange={(e) => setSelectedOption(e.target.value)}
                        >
                          <FormControlLabel
                            value="for_sale"
                            control={
                              <Radio
                                sx={{ "&.Mui-checked": { color: "#5600d3" } }}
                              />
                            }
                            label="What I want to get from the sale:"
                          />
                        </RadioGroup>
                      </FormControl>

                      {selectedOption === "for_sale" && (
                        <Grid
                          container
                          spacing={2}
                          sx={{ alignItems: "flex-end" }}
                        >
                          <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Box sx={{ p: 1 }}>
                              <TextField
                                label="Amount"
                                variant="outlined"
                                fullWidth
                                type="number"
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      ₹
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </Box>
                          </Grid>

                          <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Box sx={{ p: 1 }}>
                              <Typography
                                sx={{
                                  color: "#1c2b46",
                                  fontWeight: "600",
                                  pb: "0.5rem",
                                  mt: 2,
                                }}
                              >
                                Price of the artwork for the customers
                              </Typography>
                              <TextField
                                label="Amount"
                                variant="outlined"
                                type="number"
                                fullWidth
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      ₹
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </Box>
                          </Grid>
                        </Grid>
                      )}

                      <Grid item xs={12} sm={12}>
                        <Box
                          sx={{
                            width: "100%",
                            mb: 3,
                            mt: 1,
                            p: 3,
                            backgroundColor: "#efefef",
                            borderRadius: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#1c2b46",
                              fontWeight: "600",
                              pb: "0.5rem",
                              mt: 2,
                            }}
                          >
                            Fine art shipping service
                          </Typography>
                          <ul
                            style={{
                              listStyleType: "disc",
                              paddingLeft: "20px",
                              margin: "0",
                              textAlign: "left",
                            }}
                          >
                            <li style={{ marginBottom: "8px", color: "#666" }}>
                              <Typography variant="body2">
                                Our premium fine art shipping services include
                                secure payment for clients, top-notch
                                international and domestic shipping, customs
                                clearance handling, client care and
                                communication, insurance coverage in case of
                                damage or loss. For every sale, our artists have
                                a personal logistics manager, who will guarantee
                                a smooth experience and who is available to help
                                answer questions and find solutions if
                                necessary.
                              </Typography>
                            </li>
                            <li style={{ marginBottom: "8px", color: "#666" }}>
                              <Typography variant="body2">
                                Please note that we have an all-inclusive
                                pricing policy. This means that the price
                                displayed for our clients includes our fine art
                                shipping service.
                              </Typography>
                            </li>
                            <li style={{ color: "#666" }}>
                              <Typography variant="body2">
                                Shipping charge depends on both client’s
                                geographical position and artist’s geographical
                                position. Therefore, the total price of the
                                artwork on the Singulart website can differ. In
                                the following, you can check out the charges
                                depending on your own location to the top 5 most
                                relevant countries for you.
                              </Typography>
                            </li>
                          </ul>
                        </Box>

                        <Box
                          sx={{
                            width: "100%",
                            mb: 3,
                            mt: 1,
                            p: 3,
                            backgroundColor: "#ffffff",
                            borderRadius: 2,
                          }}
                        >
                          <ul
                            style={{
                              listStyleType: "none",
                              paddingLeft: "0px",
                              margin: "0",
                              textAlign: "left",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "baseline",
                            }}
                          >
                            <li style={{ marginBottom: "8px", color: "#666" }}>
                              <Typography
                                variant="body2"
                                sx={{ display: "flex", alignItems: "center" }}
                              >
                                <strong
                                  style={{
                                    marginRight: "5px",
                                    color: "#1c2b46",
                                    fontWeight: "600",
                                  }}
                                >
                                  {" "}
                                  Domestic shipping{" "}
                                </strong>
                                INR 42000
                              </Typography>
                            </li>
                            <li style={{ marginBottom: "8px", color: "#666" }}>
                              <Box
                                sx={{
                                  width: "100%",
                                  maxWidth: 800,
                                  margin: "20px auto",
                                }}
                              >
                                {/* Dropdown Button */}
                                <Button
                                  onClick={() => setOpen(!open)}
                                  endIcon={
                                    open ? (
                                      <KeyboardArrowUpIcon />
                                    ) : (
                                      <KeyboardArrowDownIcon />
                                    )
                                  }
                                  sx={{
                                    width: "100%",
                                    color: "#5600d3",
                                    justifyContent: "space-between",
                                    backgroundColor: "#f5f5f5",
                                    padding: "15px",
                                    "&:hover": {
                                      backgroundColor: "#e0e0e0",
                                    },
                                  }}
                                >
                                  International fine art shipping service charge
                                </Button>

                                {/* Collapsible Table */}
                                <Collapse
                                  in={open}
                                  timeout="auto"
                                  unmountOnExit
                                >
                                  <TableContainer
                                    component={Paper}
                                    sx={{
                                      marginTop: 1,
                                      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                                      borderRadius: "4px",
                                    }}
                                  >
                                    <Table aria-label="simple table">
                                      <TableHead>
                                        <TableRow
                                          sx={{ backgroundColor: "#f5f5f5" }}
                                        >
                                          <TableCell>ID</TableCell>
                                          <TableCell>Name</TableCell>
                                          <TableCell>Description</TableCell>
                                          <TableCell>Price</TableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        {tableData.map((row) => (
                                          <TableRow
                                            key={row.id}
                                            sx={{
                                              "&:last-child td, &:last-child th":
                                                { border: 0 },
                                            }}
                                          >
                                            <TableCell>{row.id}</TableCell>
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell>
                                              {row.description}
                                            </TableCell>
                                            <TableCell>{row.price}</TableCell>
                                          </TableRow>
                                        ))}
                                      </TableBody>
                                    </Table>
                                  </TableContainer>
                                </Collapse>
                              </Box>
                            </li>
                          </ul>
                        </Box>
                      </Grid>
                    </Box>

                    </Box>

                </Grid>
               )}

                {/* Price of the artwork End*/}
              





                    <Grid item xs={12} sm={12}>
                      <Divider sx={{ my: 2 }} />
                      {/* Add Artwork Notice */}
                      <Box
                        sx={{
                          p: 2,
                          backgroundColor: "#f3e5f5",
                          borderRadius: 2,
                          mt: 3,
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <IconButton>
                          <InfoIcon />
                        </IconButton>
                        <Typography>
                          This content will be translated, please use it for the
                          description of your artwork.
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Typography
                        sx={{
                          color: "#1c2b46",
                          fontWeight: "600",
                          pb: "0.5rem",
                          mt: 2,
                        }}
                      >
                        What is the artwork about?
                      </Typography>
                      <Typography variant="body1" sx={{ color: "#8091a7" }}>
                        Tell your story behind your work/series. Sharing the
                        story of your works will help clients enter your world
                        and connect emotionally with your works and you as the
                        artist.
                      </Typography>


                      <Box
                      sx={{
                        width: "100%",
                        mb: 3,
                        mt: 1,
                        p: 3,
                        backgroundColor: "#ffffff",
                        borderRadius: 2,
                        overflow: "auto",
                        height: "150px",
                      }}
                    >
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{ color: "#1c2b46", pb: 2 }}
                        >
                          Meera is a devotee of Lord Krishna. She is drawn to
                          her deity with all her heart. <br /> No matter what
                          time of the day it is or is it the night, there is
                          nothing else in this world important to her more than
                          her Mohan. Meera doesn’t want to lose a single second
                          which can make her lose the chance to meet her Lord.
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ color: "#1c2b46", pb: 2 }}
                        >
                          Seeing the devotion and love of Meera towards himself,
                          Lord Krishna is forced to come.
                          <br /> It is not even complete dawn yet and Meera has
                          drawn Mohan to her lands.
                          <br />
                        </Typography>
                        <Typography variant="body1" sx={{ color: "#1c2b46" }}>
                          Even though Lord is there and can be seen through the
                          shadow on the wall yet she is still immersed chanting
                          his name.
                          <br />
                        </Typography>
                      </Box>
                    </Box>
                    </Grid>

                  

                    {/* <Typography variant="body2" sx={{ mt: 2, fontStyle: "italic" }}>
  Shipping service charge will be calculated in 1 minute when you submit your changes on this artwork.
</Typography> */}
                 
               

              

                <Grid item xs={12} sm={12}>
                  <Divider sx={{ my: 2 }} />
                  {/* Add Artwork Notice */}
                  <Box
                    sx={{
                      p: 2,
                      backgroundColor: "#e3f2fd",
                      borderRadius: 2,
                      mt: 3,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <IconButton>
                      <InfoIcon />
                    </IconButton>
                    <Typography>
                      Having trouble finding the right words ? Let us help by
                      generating a description for you based on your artwork
                      pictures and the main characteristics you filled! If it's
                      not up to your standards, update it, or start it all over:
                      your artwork, your rules.
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Divider sx={{ my: 2 }} />
                  <ul
                    style={{
                      listStyleType: "none",
                      paddingLeft: "0px",
                      margin: "0",
                      textAlign: "left",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                    }}
                  >
                    <li style={{ marginBottom: "8px", color: "#666" }}>
                      <Box
                        sx={{
                          mb: 1,
                          display: "flex",
                          gap: 2,
                          flexWrap: "wrap",
                          alignItems: "center",
                        }}
                      >
                        <Checkbox
                          {...label}
                          defaultChecked
                          sx={{
                            "&.Mui-checked": {
                              color: "#5600d3",
                            },
                          }}
                        />
                        <InputLabel
                          sx={{
                            color: "#1c2b46",
                            pb: "0",
                          }}
                        >
                          Put online
                        </InputLabel>
                      </Box>
                    </li>

                    <li
                      style={{
                        marginBottom: "8px",
                        color: "#666",
                        margin: "auto",
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{ backgroundColor: "#5600d3" }}
                      >
                        Submit
                      </Button>
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default ArtEdit;
