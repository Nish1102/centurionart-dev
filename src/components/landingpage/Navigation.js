import {
  FavoriteBorder,
  PersonOutline,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import BrushIcon from "@mui/icons-material/Brush";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Popover,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRoute } from "../../contexts/RouteContext";
import { useUser } from "../../contexts/userContext";
import UserProfilePopover from "./UserProfilePopover";
import MobileNavigation from "./MobileNavigation";

const Navigation = ({ setIsLoginOpen }) => {
  const { routes, setCurrentRoute, currentRoute } = useRoute();
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [page, setPage] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [userPopHover, setuserPopHover] = useState(1);
  const navigate = useNavigate();
  const { user } = useUser();
  const open = Boolean(anchorEl);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
    // setuserPopHover(content);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <AppBar position="static" className="top_header" elevation={4}>
      <Toolbar>
        {/* Left-aligned content */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ flexGrow: 1,
          display:{xs:'block',lg:'flex',md:'flex',sm:'flex'}
           }}
        >
        <Box sx={{display:{xxl:'block',xl:'block',lg:'block', md:'block',sm:'block',xs:'none'} }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between" 
          >
            <Typography variant="h6" sx={{ textTransform: "uppercase",
              fontSize: {
      xs: '0.875rem', 
      sm: '1rem',     
      md: '1.125rem', 
      lg: '1.25rem',  
      // xl: '1.5rem',   
              }
             }}>
              The Centurion Art 2.0
            </Typography>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              <BrushIcon sx={{ fontSize: 40, color: 'white', my: 1 }} />
            </motion.div>
          </Box>
       </Box>

          {/* Icons & Sell My Art Button */}
          <Box
            sx={{
              justifyContent: "space-between",
              // marginTop: 2,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
           
          >
            <Button
              variant="contained"
              color="error"
              sx={{ borderRadius: 1, textTransform: "none",
             padding: {
    xs: 1,
    sm: 1,
    md: 1,
    lg: 1,
  },
                fontSize: {
      xs: '0.575rem', 
      sm: '0.875rem',     
      md: '1rem', 
      lg: '1rem',  
      // xl: '1.5rem',   
              } 
              }}
            >
              Seasonal promotion
            </Button>
            <Button
              variant="outlined"
              style={{ color: "white", border: "1px solid #fff" }}
              sx={{ textTransform: "none",
                display:{lg:'block', md:'block',sm:'block',xs:'block'},
                fontSize: {
      xs: '0.575rem', 
      sm: '0.875rem',     
      md: '1rem', 
      lg: '1rem',  
      // xl: '1.5rem',   
              } 
               }}
              onClick={() => navigate("/login")}
            >
              Sell my art
            </Button>
            <IconButton
            style={{display:'flex',alignItems:'center'}}
             sx={{ 
              display:{lg:'block', md:'block',sm:'block',xs:'block'},
              px:0
              }}
            >
              <FavoriteBorder style={{ color: "white" }} sx={{
                fontSize: {
      xs: '1.375rem', 
      sm: '1.375rem',     
      md: '1.575rem', 
      lg: '1.575rem',
                }  
              }} />
            </IconButton>
            <IconButton
             style={{display:'flex',alignItems:'center'}}
             sx={{ 
              display:{lg:'block', md:'block',sm:'block',xs:'block'},
              px:0
              }}
              onClick={!user ? () => setIsLoginOpen(true) : undefined}
              onMouseEnter={user ? (e) => handlePopoverOpen(e) : undefined}
            >
              <PersonOutline style={{ color: "white" }} sx={{
                fontSize: {
      xs: '1.375rem', 
      sm: '1.375rem',     
      md: '1.575rem', 
      lg: '1.575rem',
                }  
              }}  />
            </IconButton>
            <IconButton
            style={{display:'flex',alignItems:'center'}}
              sx={{ 
              display:{lg:'block', md:'block',sm:'block',xs:'block'},
              px:0
              }}
            >
              <ShoppingBagOutlined style={{ color: "white" }} sx={{
                fontSize: {
      xs: '1.375rem', 
      sm: '1.375rem',     
      md: '1.575rem', 
      lg: '1.575rem',
                }  
              }}  />
            </IconButton>

            <Box sx={{ display: { lg: 'none', md: 'none', sm: 'block', xs: 'block' } }}>
  <MobileNavigation />
</Box>
          </Box>
        </Box>
      </Toolbar>
      <Popover
        sx={{ pointerEvents: "none" }}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        disableRestoreFocus={false}
        PaperProps={{ sx: { p: 2, display: "flex", pointerEvents: "auto" } }} // Allow interaction
      >
        {<UserProfilePopover onClose={handlePopoverClose} sx={{ pointerEvents: "auto" }} />}
      </Popover>
    </AppBar>

     <AppBar position="static" className="top_header" elevation={4} sx={{  display:{lg:'none', md:'none',sm:'none',xs:'none'}}}>
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
              variant="outlined"
              style={{ color: "white", border: "1px solid #fff" }}
              sx={{ textTransform: "none",}}
              onClick={() => navigate("/login")}
            >
              Sell my art
            </Button>
            <IconButton
            >
              <FavoriteBorder style={{ color: "white" }} />
            </IconButton>
            <IconButton
              onClick={!user ? () => setIsLoginOpen(true) : undefined}
              onMouseEnter={user ? (e) => handlePopoverOpen(e) : undefined}
            >
              <PersonOutline style={{ color: "white" }} />
            </IconButton>
            <IconButton
            >
              <ShoppingBagOutlined style={{ color: "white" }} />
            </IconButton>
          </Box>
     </AppBar>
    </>
  );
};

export default Navigation;
