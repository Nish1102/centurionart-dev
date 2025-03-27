import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import api from "../../services/api";

function MobileNavigation() {
  const [state, setState] = React.useState({
    right: false,
  });

  // api state   
  const [ menus, setMenus ] = useState();
  const [ menuId, setMenuId ] = useState();

    useEffect(()=> {
        // api getmenus   
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
    }, []);

  // Open Menu 1 by default
  const [openSubMenu, setOpenSubMenu] = React.useState('menu1');

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  // Handle accordion behavior
  const handleSubMenuToggle = (menuKey) => {
    setOpenSubMenu((prev) => (prev === menuKey ? null : menuKey));
  };

  const list = (anchor) => (
    <Box sx={{ width: 250 }} role="presentation">
      {/* Sidebar Close Button inside */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton
          onClick={toggleDrawer(anchor, false)}
          sx={{
            color: '#000',
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.05)',
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider />

      <List>
        {/* Menu 1 with Submenu */}

       {menus?.filter((item) => item.parent_id === null).map((item) => (
  <React.Fragment key={item.id}>
    <ListItem disablePadding>
      <ListItemButton onClick={() => handleSubMenuToggle('menu1')}>
        <ListItemIcon><InboxIcon /></ListItemIcon>
        <ListItemText primary="Menu 1" />
        {openSubMenu === 'menu1' ? <ExpandLess /> : <ExpandMore />}
        {item.title}
      </ListItemButton>
    </ListItem>
    <Collapse in={openSubMenu === 'menu1'} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }} onClick={toggleDrawer(anchor, false)}>
          <ListItemIcon><MailIcon /></ListItemIcon>
          <ListItemText primary="Submenu 1" />
        </ListItemButton>
      </List>
    </Collapse>
  </React.Fragment>
))}


        {/* Menu 2 with Submenu */}
        {/* <ListItem disablePadding>
          <ListItemButton onClick={() => handleSubMenuToggle('menu2')}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="Menu 2" />
            {openSubMenu === 'menu2' ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem> */}
        {/* <Collapse in={openSubMenu === 'menu2'} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} onClick={toggleDrawer(anchor, false)}>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary="Submenu 2-1" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={toggleDrawer(anchor, false)}>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary="Submenu 2-2" />
            </ListItemButton>
          </List>
        </Collapse> */}

        {/* Other menu item */}
        <Divider />
        {/* <ListItem disablePadding>
          <ListItemButton onClick={toggleDrawer(anchor, false)}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem> */}
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button variant="outline" sx={{ borderRadius: 0, p: 0, minWidth: 0 }} onClick={toggleDrawer(anchor, true)}>
            <IconButton
              sx={{
                p: 0,
                color: '#fff',
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default MobileNavigation;
