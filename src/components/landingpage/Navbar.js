import {
  FavoriteBorder,
  PersonOutline,
  Search,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  InputBase,
  Popover,
  Toolbar,
  Modal,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import ArtistsSubMenu from "./menuContents/artistsSubMenu";
import DrawingSubMenu from "./menuContents/drawingSubMenu";
import MoreSubMenu from "./menuContents/moreSubMenu";
import NewInMenu from "./menuContents/newInMenu";
import PaintingSubMenu from "./menuContents/paintingSubMenu";
import PrintSubMenu from "./menuContents/printSubMenu";
import SculptureSubMenu from "./menuContents/sculptureSubMenu";
import PhotographySubMenu from "./menuContents/photoGraphySubMenu";
import LoginModal from "../loging/LoginPage";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverContent, setPopoverContent] = useState("");
  const [search, setSearch] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [artworks, setArtworks] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handlePopoverOpen = (event, content) => {
    setAnchorEl(event.currentTarget);
    setPopoverContent(content);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setPopoverContent("");
  };

  const open = Boolean(anchorEl);

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (anchorEl && !anchorEl.contains(event.target)) {
        handlePopoverClose();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, anchorEl]);

  return (
    <AppBar
      position="static"
      color="inherit"
      sx={{ boxShadow: 0, borderBottom: "1px solid #ddd" }}
    >
      {/* Icons & Sell My Art Button */}
      <Box
        sx={{
          justifyContent: "right",
          marginTop: 2,
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
          color="primary"
          sx={{ textTransform: "none" }}
        >
          Sell my art
        </Button>
        <IconButton>
          <FavoriteBorder />
        </IconButton>
        <IconButton>
          <PersonOutline onClick={() => setIsLoginOpen(true)} />
        </IconButton>
        <IconButton>
          <ShoppingBagOutlined />
        </IconButton>
      </Box>

      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Navigation Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {[
            "New In",
            "Painting",
            "Print",
            "Photography",
            "Sculpture",
            "Drawing",
            "More",
            "Artists",
          ].map((item) => (
            <Button
              key={item}
              sx={{ color: "black", textTransform: "none" }}
              onMouseEnter={(e) => handlePopoverOpen(e, item)}
            >
              {item}
            </Button>
          ))}
        </Box>

        {/* Search Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "#f1f1f1",
            borderRadius: 2,
            px: 2,
          }}
        >
          <Search color="disabled" />
          <InputBase
            placeholder="Search for Photography"
            sx={{ ml: 1, width: 500 }}
          />
        </Box>
      </Toolbar>

      {/* Popover for Submenus */}
      <Popover
        sx={{ pointerEvents: "none" }}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        disableRestoreFocus={false}
        PaperProps={{ sx: { p: 2, display: "flex" } }}
      >
        {popoverContent === "New In" && <NewInMenu />}
        {popoverContent === "Photography" && <PhotographySubMenu />}
        {popoverContent === "Painting" && <PaintingSubMenu />}
        {popoverContent === "Print" && <PrintSubMenu />}
        {popoverContent === "Sculpture" && <SculptureSubMenu />}
        {popoverContent === "Drawing" && <DrawingSubMenu />}
        {popoverContent === "More" && <MoreSubMenu />}
        {popoverContent === "Artists" && <ArtistsSubMenu />}
      </Popover>

      {/* Login Modal */}
      <Modal open={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
        <LoginModal open={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      </Modal>
    </AppBar>
  );
};

export default Navbar;
