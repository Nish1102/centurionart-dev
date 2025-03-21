import {
  Search
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  InputBase,
  Modal,
  Popover,
  Toolbar
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/userContext";
import LoginModal from "../loging/LoginPage";
import ArtistsSubMenu from "./menuContents/artistsSubMenu";
import DrawingSubMenu from "./menuContents/drawingSubMenu";
import MoreSubMenu from "./menuContents/moreSubMenu";
import NewInMenu from "./menuContents/newInMenu";
import PaintingSubMenu from "./menuContents/paintingSubMenu";
import PhotographySubMenu from "./menuContents/photoGraphySubMenu";
import PrintSubMenu from "./menuContents/printSubMenu";
import SculptureSubMenu from "./menuContents/sculptureSubMenu";
import api from "../../services/api";
import '../landingpage/menuContents/menu-style.css';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverContent, setPopoverContent] = useState("");
  const [search, setSearch] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [artworks, setArtworks] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
  const { user } = useUser();
  const [ menus, setMenus ] = useState();
  const [ menuId, setMenuId ] = useState();

  const handlePopoverOpen = (event, content, id) => {
    setMenuId(id)
    setAnchorEl(event.currentTarget);
    setPopoverContent(content);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setPopoverContent("");
  };

  const open = Boolean(anchorEl);

  // Fetch Menus
  const getMenus = async () => {
    try {
      const response = await api.get("/api/menu/");
    
      if (response.status === 200 && response.data) {
        setMenus?.(response.data); 
      }
    } catch (error) {
      console.error("Error fetching menus:", error);
    }
  };  

  // Close popover when clicking outside
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (anchorEl && !anchorEl.contains(event.target)) {
  //       handlePopoverClose();
  //     }
  //   };

  //   if (open) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [open, anchorEl]);

  useEffect(() => {
    getMenus()
  }, [])

  return (
    <AppBar
      position="static"
      color="inherit"
      sx={{ boxShadow: 0, borderBottom: "1px solid #ddd" }}
    >
     

      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* logo */}
        <img className="header_logo" src="../images/logo1.png" alt="header logo" />
        {/* Navigation Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {
            menus?.filter((item) => item.parent_id === null).map((item) => (
                <Button
                  key={item.id}
                  sx={{ color: "black", textTransform: "none" }}
                  onMouseEnter={(e) => handlePopoverOpen(e, item.title, item._id)}
                >
                  {item.title || "Unnamed"}
                </Button>
              )
            )
          }
        </Box>


        {/* Search Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "#f1f1f1",
            borderRadius: 2,
            px: 2,
            width:{
              xs: '40%',     // Full width on mobile
      sm: '50%',    // Medium width on small screens
      md: '200px',    // Wider on tablets
      lg: '300px',    // Even wider on large screens
      xl: '300px',    // Max width on extra-large screens

            }
          }}
        >
          <Search color="disabled" />
          <InputBase
            placeholder="Search for Photography"
            sx={{ ml: 1, width: 300 }}
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
             PaperProps={{ sx: { p: 2, display: "flex", pointerEvents: "auto" } }} 
           >
             {popoverContent === "New In" && (
               <NewInMenu close={handlePopoverClose} sx={{ pointerEvents: "auto" }} menus={menus}  menuId={menuId} />
             )}
             {popoverContent === "Photography" && (
               <PhotographySubMenu close={handlePopoverClose} sx={{ pointerEvents: "auto" }} menus={menus}  menuId={menuId}/>
             )}
             {popoverContent === "Painting" && (
               <PaintingSubMenu close={handlePopoverClose} sx={{ pointerEvents: "auto" }} menus={menus}  menuId={menuId}/>
             )}
             {popoverContent === "Print" && (
               <PrintSubMenu close={handlePopoverClose} sx={{ pointerEvents: "auto" }} menus={menus}  menuId={menuId}/>
             )}
             {popoverContent === "Sculpture" && (
               <SculptureSubMenu close={handlePopoverClose} sx={{ pointerEvents: "auto" }} menus={menus}  menuId={menuId}/>
             )}
             {popoverContent === "Drawing" && (
               <DrawingSubMenu close={handlePopoverClose} sx={{ pointerEvents: "auto" }} menus={menus}  menuId={menuId}/>
             )}
             {popoverContent === "More" && (
               <MoreSubMenu close={handlePopoverClose} sx={{ pointerEvents: "auto" }} menus={menus}  menuId={menuId}/>
             )}
             {popoverContent === "Artists" && (
               <ArtistsSubMenu close={handlePopoverClose} sx={{ pointerEvents: "auto" }} menus={menus}  menuId={menuId}/>
             )}
             {/* {user && (
               <UserProfilePopover sx={{ pointerEvents: "auto" }} />
             )} */}
           </Popover>

      {/* Login Modal */}
      <Modal open={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
        <LoginModal open={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      </Modal>
    </AppBar>
  );
};

export default Navbar;
