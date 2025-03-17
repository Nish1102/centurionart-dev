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
    <AppBar position="static" className="top_header" elevation={4}>
      <Toolbar>
        {/* Left-aligned content */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ flexGrow: 1 }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
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
              style={{ color: "white", border: "1px solid #fff" }}
              sx={{ textTransform: "none" }}
              onClick={() => navigate("/login")}
            >
              Sell my art
            </Button>
            <IconButton>
              <FavoriteBorder style={{ color: "white" }} />
            </IconButton>
            <IconButton
              onClick={!user ? () => setIsLoginOpen(true) : undefined}
              onMouseEnter={user ? (e) => handlePopoverOpen(e) : undefined}
            >
              <PersonOutline style={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <ShoppingBagOutlined style={{ color: "white" }} />
            </IconButton>
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
  );
};

export default Navigation;
