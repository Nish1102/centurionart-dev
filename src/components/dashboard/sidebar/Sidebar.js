import * as React from "react";
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

  const handleSubmenuClick = (menuKey) => {
    setActiveSubmenu((prevKey) => (prevKey === menuKey ? null : menuKey));
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
        {/* Menu 1 */}
        <ListItem disablePadding sx={{ display: "block" }}>
        <ListItemButton
  onClick={() => handleSubmenuClick("menu1")}
  sx={{
    minHeight: 48,
    px: 1.5,
    justifyContent: open ? "initial" : "center",
    m: open ? "5px 10px" : "0",
    borderRadius: open ? "5px" : "0",
    boxShadow: open
      ? "inset 0px 0px 4px 1px rgba(86, 0, 211, 0.12), inset 0px 0px 27px 1px rgba(255, 255, 255, 0.5)"
      : "",
    '&:hover': {
      backgroundColor: '#5600d3',
      color: '#fff',
      '& .MuiListItemIcon-root': {
        color: '#fff', // Changes icon color
      },
      '& .MuiSvgIcon-root': {
        color: '#fff', // Ensures actual icon SVG color is also white
      },
      '& .MuiListItemText-primary': {
        color: '#fff',
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
      color: "#5600d3", // Default icon color
    }}
  >
    <InboxIcon />
  </ListItemIcon>
  <ListItemText primary="Menu 1" sx={{ opacity: open ? 1 : 0 }} />
  {activeSubmenu === "menu1" ? <ExpandLess /> : <ExpandMore />}
</ListItemButton>
          <Collapse
            in={activeSubmenu === "menu1"}
            timeout="auto"
            unmountOnExit
            sx={{
              borderLeft: open ? "1px solid #ab72ff" : "none",
              ml: open ? 3.5 : 0,
              pl: 1,
            }}
          >
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: open ? 4 : 2 }}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {/* <MailIcon sx={{color: '#5600d3'}} /> */}
                </ListItemIcon>
                <ListItemText
                  primary="Sub Item 1"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
              <ListItemButton sx={{ pl: open ? 4 : 2 }}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {/* <MailIcon sx={{color: '#5600d3'}} /> */}
                </ListItemIcon>
                <ListItemText
                  primary="Sub Item 2"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </List>
          </Collapse>
        </ListItem>

        {/* Menu 2 */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            onClick={() => handleSubmenuClick("menu2")}
            sx={{
    minHeight: 48,
    px: 1.5,
    justifyContent: open ? "initial" : "center",
    m: open ? "5px 10px" : "0",
    borderRadius: open ? "5px" : "0",
    boxShadow: open
      ? "inset 0px 0px 4px 1px rgba(86, 0, 211, 0.12), inset 0px 0px 27px 1px rgba(255, 255, 255, 0.5)"
      : "",
    '&:hover': {
      backgroundColor: '#5600d3',
      color: '#fff',
      '& .MuiListItemIcon-root': {
        color: '#fff', // Changes icon color
      },
      '& .MuiSvgIcon-root': {
        color: '#fff', // Ensures actual icon SVG color is also white
      },
      '& .MuiListItemText-primary': {
        color: '#fff',
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
      color: "#5600d3", // Default icon color
    }}
            >
              <InboxIcon sx={{ color: "#5600d3" }} />
            </ListItemIcon>
            <ListItemText primary="Menu 2" sx={{ opacity: open ? 1 : 0 }} />
            {activeSubmenu === "menu2" ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse
            in={activeSubmenu === "menu2"}
            timeout="auto"
            unmountOnExit
            sx={{
              borderLeft: open ? "1px solid #ab72ff" : "none",
              ml: open ? 3.5 : 0,
              pl: 1,
            }}
          >
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: open ? 4 : 2 }}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {/* <MailIcon /> */}
                </ListItemIcon>
                <ListItemText
                  primary="Sub Item 1"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
              <ListItemButton sx={{ pl: open ? 4 : 2 }}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {/* <MailIcon /> */}
                </ListItemIcon>
                <ListItemText
                  primary="Sub Item 2"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </List>
          </Collapse>
        </ListItem>
      </List>
    </>
  );

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
              The Centurion Art 2.0
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
        <ResellerDashboard />
      </Box>
    </Box>
  );
}
