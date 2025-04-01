import React, { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { motion } from "framer-motion";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import BrushIcon from "@mui/icons-material/Brush";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ResellerDashboard from "../resellerdashboard/ResellerDashboard";
import useMediaQuery from "@mui/material/useMediaQuery";
import api from "../../../services/api";
import ArtEdit from "../resellerdashboard/ArtEdit";
import { useLocation, useNavigate } from "react-router-dom";


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [activeSubmenu, setActiveSubmenu] = React.useState(null);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [ menus, setMenus ] = useState();
  const [subMenus, setSubMenus] = useState([]);
  const location = useLocation(); // Get the current route
  

  const handleSubmenuClick = (mainMenu) => {
    setActiveSubmenu((prevKey) => (prevKey === mainMenu.title ? null : mainMenu.title));
    const filteredSubMenus = menus.filter((item) => item.parent_id === mainMenu._id);
    setSubMenus(filteredSubMenus);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };




  // ========>

    const staticMenus = [
      {
        id: 1,
        title: "Dashboard",
        parent_id: null,
        icon: <InboxIcon />,
        subMenus: [
          { id: 4, title: "Overview", parent_id: 1 },
          { id: 5, title: "Reports", parent_id: 1 },
        ],
      },
      {
        id: 2,
        title: "Settings",
        parent_id: null,
        icon: <InboxIcon />,
        subMenus: [
          { id: 6, title: "Profile", parent_id: 2 },
          { id: 7, title: "Security", parent_id: 2 },
        ],
      },
      {
        id: 3,
        title: "Support",
        parent_id: null,
        icon: <InboxIcon />,
        subMenus: [],
      },
    ];

  const renderDrawerContent = (
    <>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon sx={{ color: "#5600d3" }} />
          ) : (
            <ChevronLeftIcon sx={{ color: "#5600d3" }} />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
      {staticMenus.map((item) => (
        <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            onClick={() => handleSubmenuClick(item)}
            sx={{
              minHeight: 48,
              px: 1.5,
              justifyContent: open ? "initial" : "center",
              m: open ? "5px 10px" : "0",
              borderRadius: open ? "5px" : "0",
              "&:hover": {
                backgroundColor: "#5600d3",
                color: "#fff",
                "& .MuiListItemIcon-root": { color: "#fff" },
                "& .MuiSvgIcon-root": { color: "#fff" },
                "& .MuiListItemText-primary": { color: "#fff" },
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 1 : "auto",
                justifyContent: "center",
                color: "#5600d3",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
            {item.subMenus.length > 0 &&
              (activeSubmenu === item.title ? <ExpandLess /> : <ExpandMore />)}
          </ListItemButton>

          {item.subMenus.length > 0 && (
            <Collapse
              in={activeSubmenu === item.title}
              timeout="auto"
              unmountOnExit
              sx={{ borderLeft: open ? "1px solid #ab72ff" : "none", ml: open ? 3.5 : 0, pl: 1 }}
            >
              {item.subMenus.map((subMenu) => (
                <List key={subMenu.id} component="div" disablePadding>
                  <ListItemButton sx={{ pl: open ? 4 : 2 }}>
                    <ListItemText
                      primary={subMenu.title}
                      primaryTypographyProps={{ fontSize: "0.875rem", textTransform: "capitalize" }}
                      sx={{ opacity: open ? 1 : 0, fontSize: "0.675rem" }}
                    />
                  </ListItemButton>
                </List>
              ))}
            </Collapse>
          )}
        </ListItem>
      ))}
    </List>
    </>
  );

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

    useEffect(() => {
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
      getMenus()
    }, [])
  
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={!isMobile && open}
        sx={{ background: "white" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ marginRight: 5, ...(open && { display: "none" }) }}
          >
            <MenuIcon sx={{ color: "#5600d3" }} />
          </IconButton>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h6"
              sx={{
                textTransform: "uppercase",
                fontSize: {
                  xs: "0.875rem",
                  sm: "1rem",
                  md: "1.125rem",
                  lg: "1.25rem",
                },
                color: "#5600d3",
              }}
            >
              The Centurion <span style={{color:'d32f2f'}}>Art 2.0</span>
            </Typography>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              <BrushIcon sx={{ fontSize: 40, color: "#5600d3", my: 1 }} />
            </motion.div>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Responsive Drawer */}
      {isMobile ? (
        <MuiDrawer
          anchor="left"
          open={open}
          onClose={handleDrawerClose}
          variant="temporary"
          ModalProps={{ keepMounted: true }}
        >
          {renderDrawerContent}
        </MuiDrawer>
      ) : (
        <Drawer variant="permanent" open={open}>
          {renderDrawerContent}
        </Drawer>
      )}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {location.pathname === '/artists-dashboard' ? (<><ResellerDashboard /> </>):(<></>)}
        
        {/* {location.pathname === '/artedit' ? (<> <ArtEdit /></>):(<></>)} */}

        <ArtEdit />
      </Box>
    </Box>
  );
}
