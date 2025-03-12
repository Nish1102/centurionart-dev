import React, { useState } from 'react';
import { useRoute } from '../../contexts/RouteContext';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Typography, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem,
  useTheme,
  useMediaQuery 
} from '@mui/material';
import {
  FavoriteBorder,
  PersonOutline,
  Search,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import BrushIcon from '@mui/icons-material/Brush';
import { color, motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

const Navigation = ({setIsLoginOpen}) => {
  const { routes, setCurrentRoute, currentRoute } = useRoute();
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = (
    routes.map((route) => (
      <motion.div 
        key={route.path} 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }}
      >
        <Button
          color={currentRoute === route.path ? 'secondary' : 'inherit'}
          onClick={() => {
            setCurrentRoute(route.path);
            if (mobileOpen) handleDrawerToggle();
          }}
          variant={currentRoute === route.path ? 'contained' : 'text'}
          fullWidth={isMobile}
          sx={{ my: isMobile ? 1 : 0 }}
        >
          {route.name}
        </Button>
      </motion.div>
    ))
  );

  return (
    <AppBar position="static" className='top_header' elevation={4}>
      <Toolbar>
        {/* Left-aligned content */}
        <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ flexGrow: 1 }}>
         <Box display="flex" alignItems="center" justifyContent="space-between">
         <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
            The Centurion Art 2.0
          </Typography>
          <BrushIcon sx={{ ml: 1, fontSize: 30 }} />
         </Box>

           {/* Icons & Sell My Art Button */}
                <Box
                  sx={{
                    justifyContent: "right",
                   // marginTop: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ borderRadius: 3, textTransform: "none" }}
                  >
                    Seasonal promotion
                  </Button>
                  <Button
                    variant="outlined"
                    style={{color:'white',border: '1px solid #fff'}}
                    sx={{ textTransform: "none" }}
                    onClick={() => navigate("/login")}
                  >
                    Sell my art
                  </Button>
                  <IconButton>
                    <FavoriteBorder style={{color:'white',}} />
                  </IconButton>
                  <IconButton>
                    <PersonOutline onClick={() => setIsLoginOpen(true)} style={{color:'white',}} />
                  </IconButton>
                  <IconButton>
                    <ShoppingBagOutlined style={{color:'white',}} />
                  </IconButton>
                </Box>
        </Box> 
 
        {/* Right-aligned menu items */}
        {/* {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              sx={{
                '& .MuiDrawer-paper': { 
                  width: 240,
                  boxSizing: 'border-box',
                  padding: 2
                },
              }}
            >
              <List>
                <ListItem sx={{ flexDirection: 'column', gap: 1 }}>
                  {menuItems}
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {menuItems}
          </Box>
        )} */}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
