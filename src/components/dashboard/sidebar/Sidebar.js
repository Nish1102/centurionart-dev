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
<<<<<<< Updated upstream
import ArtEdit from "../resellerdashboard/ArtEdit";
import { useLocation, useNavigate } from "react-router-dom";
=======
import { Avatar, Button, Card, CardContent, Link, Chip } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import AddHomeIcon from "@mui/icons-material/AddHome";
import WorkIcon from "@mui/icons-material/Work";
import CampaignIcon from "@mui/icons-material/Campaign";
import FlagIcon from "@mui/icons-material/Flag";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Person2Icon from "@mui/icons-material/Person2";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LogoutIcon from "@mui/icons-material/Logout";
>>>>>>> Stashed changes

const drawerWidth = 320;

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
  const [menus, setMenus] = useState();
  const [subMenus, setSubMenus] = useState([]);
<<<<<<< Updated upstream
  const location = useLocation(); // Get the current route
  
=======
>>>>>>> Stashed changes

  const handleSubmenuClick = (mainMenu) => {
    setActiveSubmenu((prevKey) =>
      prevKey === mainMenu.title ? null : mainMenu.title
    );
    const filteredSubMenus = menus.filter(
      (item) => item.parent_id === mainMenu._id
    );
    setSubMenus(filteredSubMenus);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const staticMenus = [
    {
      id: 1,
      title: "My Dashboard",
      parent_id: null,
      icon: <AddHomeIcon />,
      subMenus: [
        { id: 4, title: "Visibility", parent_id: 1 },
        { id: 5, title: "Interest", parent_id: 1 },
      ],
    },

    {
      id: 2,
      title: "My Portfolio",
      parent_id: null,
      icon: <WorkIcon />,
      subMenus: [
        { id: 6, title: "My Series", parent_id: 2 },
        { id: 7, title: "My Artworks", parent_id: 2 },
      ],
    },
    //

    {
      id: 3,
      title: "Promotion",
      parent_id: null,
      icon: <CampaignIcon />,
      subMenus: [
        { id: 8, title: "Spotlight", parent_id: 3 },
        { id: 9, title: "E-mail", parent_id: 3 },
        { id: 10, title: "Exhibitions", parent_id: 3 },
      ],
    },

    {
      id: 4,
      title: "Opportunities",
      parent_id: null,
      icon: <FlagIcon />,
      subMenus: [
        { id: 11, title: "Portfolio review", parent_id: 4 },
        { id: 12, title: "My opportunities", parent_id: 4 },
      ],
    },

    {
      id: 5,
      title: "My Sales",
      parent_id: null,
      icon: <AddShoppingCartIcon />,
      subMenus: [],
    },

    {
      id: 6,
      title: "My Profile",
      parent_id: null,
      icon: <Person2Icon />,
      subMenus: [
        { id: 13, title: "My information", parent_id: 6 },
        { id: 14, title: "Photos & videos of me", parent_id: 6 },
        { id: 15, title: "My biography", parent_id: 6 },
        { id: 16, title: "My CV", parent_id: 6 },
        { id: 17, title: "Security", parent_id: 6 },
        { id: 18, title: "Preview my page", parent_id: 6 },
      ],
    },

    {
      id: 7,
      title: "Billing & Subscription",
      parent_id: null,
      icon: <CreditCardIcon />,
      subMenus: [
        { id: 6, title: "My banking details", parent_id: 2 },
        { id: 7, title: "Subscribe", parent_id: 2 },
        { id: 7, title: "My contract", parent_id: 2 },
      ],
    },

    {
      id: 2,
      title: "Logout",
      parent_id: null,
      icon: <LogoutIcon />,
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

      {/* user profile */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            borderRadius: "0px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            background: "linear-gradient(145deg, #ffffff, #e6e6e6)",
            p: 0,
            "&:hover": {
              boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
            },
          }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", mb: 1, color: "#5600d3" }}
            >
              Exclusiveartz
            </Typography>

            <Avatar
              src="https://via.placeholder.com/100"
              alt="Hariom Singh"
              sx={{
                width: 80,
                height: 80,
                mx: "auto",
                mb: 1,
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              }}
            />

            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              Hariom Singh
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={1}>
              Painter, Sculptor | India
            </Typography>

            <Chip
              label="DEACTIVATED"
              color="error"
              size="small"
              sx={{ mb: 1, fontWeight: "bold" }}
            />

            <Button
              variant="outlined"
              startIcon={<ShareIcon />}
              sx={{
                mb: 2,
                margin: "0 auto",
                borderRadius: "8px",
                borderColor: "#5600d3",
                color: "#5600d3",
                display: "flex",
                textTransform: "none",
                "&:hover": { backgroundColor: "#f0f0f0" },
              }}
            >
              Share my page
            </Button>

            <Link
              href="#"
              underline="none"
              sx={{
                my: "3",
                whiteSpace: "normal",
                display: "inline-block",
                fontSize: "14px",
                color: "#333",
                "&:hover": { color: "#5600d3" },
              }}
            >
              <strong>Exclusiveartz Success Guide</strong>
            </Link>

            <Typography
              color="text.secondary"
              mb={1}
              sx={{ whiteSpace: "normal", fontSize: "14px", fontWeight: "500" }}
            >
              <strong>is here to help you with your questions.</strong>
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* end user profile */}

      <List sx={{ background: "#f3f3f3" }}>
        {staticMenus.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => handleSubmenuClick(item)}
              sx={{
                minHeight: 45,
                px: 1,

                justifyContent: open ? "initial" : "center",
                m: open ? "5px 10px" : "0",
                borderRadius: open ? "5px" : "0",

                "&:hover": {
                  backgroundColor: "#919eab14",
                  color: "#333",
                  "& .MuiListItemIcon-root": {
                    color: "#333", // Changes icon color
                  },
                  "& .MuiSvgIcon-root": {
                    color: "#333", // Ensures actual icon SVG color is also white
                  },
                  "& .MuiListItemText-primary": {
                    color: "#333",
                  },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 1 : "auto",
                  justifyContent: "center",
                  display: "flex", // Important for proper alignment
                  color: "#8b8585", // Default icon color
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                sx={{ opacity: open ? 1 : 0 }}
              />
              {item.subMenus.length > 0 &&
                (activeSubmenu === item.title ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                ))}
            </ListItemButton>

            {item.subMenus.length > 0 && (
              <Collapse
                in={activeSubmenu === item.title}
                timeout="auto"
                unmountOnExit
                sx={{
                  borderLeft: open ? "1px solid #8b8585" : "none",
                  ml: open ? 3.5 : 0,
                  pl: 1,
                }}
              >
                {item.subMenus.map((subMenu) => (
                  <List key={subMenu.id} component="div" disablePadding>
                    <ListItemButton sx={{ pl: open ? 4 : 2 }}>
                      <ListItemText
                        primary={subMenu.title}
                        primaryTypographyProps={{
                          fontSize: "0.875rem",
                          textTransform: "capitalize",
                        }}
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

      {/* <List sx={{ background:'#f3f3f3' }}>
        

        {
          menus?.filter((item) => item.parent_id === null).map((item) => (

            <ListItem disablePadding sx={{ display: "block" }} >
              <ListItemButton
                onClick={() => handleSubmenuClick(item)}
                sx={{
                  minHeight: 45,
                  px: 1,
                  
                  justifyContent: open ? "initial" : "center",
                  m: open ? "5px 10px" : "0",
                  borderRadius: open ? "5px" : "0",
                  
                  '&:hover': {
                    backgroundColor: '#919eab14',
                    color: '#333',
                    '& .MuiListItemIcon-root': {
                      color: '#333', // Changes icon color
                    },
                    '& .MuiSvgIcon-root': {
                      color: '#333', // Ensures actual icon SVG color is also white
                    },
                    '& .MuiListItemText-primary': {
                      color: '#333',
                    },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 1 : "auto",
                    justifyContent: "center",
                    display: "flex", // Important for proper alignment
                    color: "#8b8585", // Default icon color                  
                  }}
                >
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={item.title || "No Name"} sx={{ opacity: open ? 1 : 0 }} />
                {activeSubmenu === item.title ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse
                in={activeSubmenu === item.title}
                timeout="auto"
                unmountOnExit
                sx={{
                  borderLeft: open ? "1px solid #ab72ff" : "none",
                  ml: open ? 3.5 : 0,
                  pl: 1,
                }}
              >

                {subMenus.map((subMenu) => (
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: open ? 4 : 2, paddingLeft: '0'}}>
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        <MailIcon sx={{color: '#5600d3'}} />
                      </ListItemIcon>
                      <ListItemText
                        primary={subMenu.title}
                        primaryTypographyProps={{ fontSize: "0.875rem", textTransform:'capitalize' }} // ✅ Correct font size setting
                        sx={{ opacity: open ? 1 : 0,fontSize:'0.675rem'}}
                      />
                    </ListItemButton>

                  </List>
                ))}
              </Collapse>
            </ListItem>

            
          ))}
      </List> */}
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
    getMenus();
  }, []);

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
              The Centurion <span style={{ color: "d32f2f" }}>Art 2.0</span>
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
