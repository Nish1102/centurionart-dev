import { Close, ExpandLess, ExpandMore, Menu as MenuIcon, StarBorder } from "@mui/icons-material";
import { Box, Checkbox, Collapse, Divider, Drawer, FormControlLabel, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Modal, Radio, Slider, Typography } from "@mui/material";
import { useState, useContext } from "react";
import { colorOptions, filters } from '../../constants/filterConfig'; // Import the filters array
import LoginModal from '../loging/LoginPage';
import ExpertAdvisor from "./ExpertAdvisor";
import FeatureCarousel from "./FeatureCarousel";
import FeaturedSec from "./FeaturedSec";
import Footer from "./Footer";
import GallerySec from "./GallerySec";
import HeroSec from "./HeroSec";
import './landingstyle.css';
import Navbar from './Navbar';
import Navigation from "./Navigation";
import { DrawerContext } from '../../context/DrawerContext'; // Import the context

export default function ArtGalleryLanding() {
  const { isDrawerOpen, toggleDrawer } = useContext(DrawerContext); // Use the context

    const [isLoginOpen, setIsLoginOpen] = useState(false);
    // const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [filterStates, setFilterStates] = useState({
        medium: false,
        theme: false,
        style: false,
        country: false,
        orientation: false,
        height: false,
        width: false,
        color: false,
    });
    const [selectedFilters, setSelectedFilters] = useState({
        medium: '',
        theme: '',
        style: '',
        country: '',
        orientation: '',
        price: [0, 100], // Assuming Price range from 0 to 100
        height: [0, 500], // Assuming height range from 0 to 100
        width: [0, 500],   // Assuming width range from 0 to 100
        color: '#000000',  // Default color
    });
    const [showAvailable, setShowAvailable] = useState(false); // State for checkbox

    // const toggleDrawer = () => {
    //   setIsDrawerOpen(!isDrawerOpen);
    // };

    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation setIsLoginOpen={setIsLoginOpen} />
        
        {/* <IconButton 
          color="inherit" 
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{ 
            position: 'fixed', 
            top: '100px', // Adjust this value based on the height of your Navigation
            left: '10px', 
            zIndex: 1100,
            backgroundColor: 'white',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
            '&:hover': {
              backgroundColor: '#f5f5f5'
            }
          }}
        >
          <MenuIcon />
        </IconButton> */}

        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={toggleDrawer}
          sx={{
            '& .MuiDrawer-paper': {
              width: { xs: '80%', sm: 350 },
              boxSizing: 'border-box',
            },
          }}
        >
          <Box sx={{ p: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" component="div">
            Filters
            </Typography>
            <IconButton onClick={toggleDrawer}>
              <Close />
            </IconButton>
          </Box>
          
          <Divider />
          
          <Box sx={{ p: 2 }}>
            <FormControlLabel
             sx={{p: 1}}
             control={
                <Checkbox
                  checked={showAvailable}
                  onChange={() => setShowAvailable(!showAvailable)}
                  color="primary"
                />
              }
              label="Show only available artworks"
            />
             <Divider />
             <FormControlLabel
             sx={{p: 1}}
              control={
                <Checkbox
                  checked={showAvailable}
                  onChange={() => setShowAvailable(!showAvailable)}
                  color="primary"
                />
              }
              label="Show only Special Deals"
            />
          </Box>
          <Divider />
          
          <List>
            {filters.map((filter, index) => (
              <div key={filter.text}>
                <ListItemButton onClick={() => {
                  if (filter.isSubMenu) {
                    setFilterStates((prev) => ({ ...prev, [filter.text.toLowerCase()]: !prev[filter.text.toLowerCase()] }));
                  }
                }}>
                  {/* <ListItemIcon>{filter.icon}</ListItemIcon> */}
                  <ListItemText primary={filter.text} />
                  {filter.isSubMenu && (filterStates[filter.text.toLowerCase()] ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>
                {filter.isSubMenu && (
                  <Collapse in={filterStates[filter.text.toLowerCase()]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {filter.options && filter.options.map((option) => (
                        <ListItemButton sx={{ pl: 4 }} key={option.id}>                          
                          <FormControlLabel
                            control={
                              <Radio
                                checked={selectedFilters[filter.text.toLowerCase()] === option.id}
                                onChange={() => setSelectedFilters((prev) => ({ ...prev, [filter.text.toLowerCase()]: option.id }))}
                                value={option.id}
                              />
                            }
                            label={option.name}
                          />
                        </ListItemButton>
                      ))}
                      {filter.isRange && filter.text === 'Price Range' && (
                            <Box sx={{ pl: 2, pt: 1 }}>
                                {/* <Typography gutterBottom>{filter.text} Range</Typography> */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                                    <Typography variant="body2">{selectedFilters.price[0]}</Typography>
                                    <Typography variant="body2">{selectedFilters.price[1]}</Typography>
                                </Box>
                                <Slider
                                    value={selectedFilters.price || [0, 100]} // Default value for price range
                                    onChange={(event, newValue) => setSelectedFilters((prev) => ({ ...prev, price: newValue }))}
                                    valueLabelDisplay="auto"
                                    min={0}
                                    max={100} // Adjust max value as needed
                                    sx={{ width: '95%', height: '2px' }} // Set width for better visibility
                                />
                            </Box>
                        )}
                      {filter.isRange && filter.text !== 'Price Range'&& (
                        <Box sx={{ pl: 2, pt: 1 }}>
                          {/* <Typography gutterBottom>{filter.text} Range</Typography> */}
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                            <Typography variant="body2">
                                {selectedFilters[filter.text.toLowerCase()] ? selectedFilters[filter.text.toLowerCase()][0] : 0} CM {/* Min value */}
                            </Typography>
                            <Typography variant="body2">
                                {selectedFilters[filter.text.toLowerCase()] ? selectedFilters[filter.text.toLowerCase()][1] : 500} +CM {/* Max value */}
                            </Typography>
                        </Box>
                          <Slider
                            value={selectedFilters[filter.text.toLowerCase()]}
                            onChange={(event, newValue) => setSelectedFilters((prev) => ({ ...prev, [filter.text.toLowerCase()]: newValue }))}
                            valueLabelDisplay="auto"
                            min={0}
                            max={100} // Adjust max value as needed
                            sx={{ width: '95%', height: '2px' }} // Set width to 100% for better visibility
                          />
                        </Box>
                      )}
                      {filter.isColor && (
                        <Box sx={{ pl: 4, pt: 2 }}>
                          <Typography gutterBottom>Color</Typography>
                          <input
                            type="color"
                            value={selectedFilters.color}
                            onChange={(e) => setSelectedFilters((prev) => ({ ...prev, color: e.target.value }))}
                          />
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 1 }}>
                            {colorOptions.map((color) => (
                              <Box
                                key={color}
                                sx={{
                                  width: 30,
                                  height: 30,
                                  backgroundColor: color,
                                  border: selectedFilters.color === color ? '2px solid black' : 'none',
                                  cursor: 'pointer',
                                  margin: '2px',
                                }}
                                onClick={() => setSelectedFilters((prev) => ({ ...prev, color }))}
                              />
                            ))}
                          </Box>
                        </Box>
                      )}
                    </List>
                  </Collapse>
                )}
                  {/* Add a divider after each filter except the last one */}
                  {index < filters.length - 1 && <Divider sx={{ my: 1 }} />}
                  </div>
            ))}
          </List>
        </Drawer>

        <Navbar />
        <HeroSec/>
        <FeaturedSec/>
        <GallerySec/>
        <FeatureCarousel/>
        <ExpertAdvisor/>
        <Footer/>

        <Modal open={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
          <LoginModal open={isLoginOpen} onClose={() => setIsLoginOpen(false)}/>
        </Modal>
      </div>
    );
}
