import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
  Avatar,
  Collapse,
  styled
} from '@mui/material';
import {
  ExpandMore,
  ExpandLess,
  Home,
  Person,
  Settings,
  Shop,
  Article,
  Share,
  LocationOn,
  Category
} from '@mui/icons-material'; 
import AdminHeader from '../AdminHeader';


const drawerWidth = 280;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    borderRight: `1px solid ${theme.palette.divider}`,
    top: '65px',
    position: 'fixed',
  },
}));

const UserSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2.5),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

const InfoSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.25, 2.5),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
}));

const ShareButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1.25, 2.5),
  width: `calc(100% - ${theme.spacing(5)})`,
}));

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const[isOpen ,setIsOpen] = useState(false);
  const onToggleSidebar = () => setIsOpen (!isOpen);

 
   

  const handleMenuClick = (menuId) => {
    setOpenMenu(prev => (prev === menuId ? null : menuId));
  };

  const menus = [
    {
      id: 'dashboard',
      icon: <Home />,
      label: 'Dashboard',
      subItems: ['Overview', 'Analytics', 'Reports'],
    },
    {
      id: 'profile',
      icon: <Person />,
      label: 'Profile',
      subItems: ['Edit Profile', 'Privacy', 'Security'],
    },
    {
      id: 'products',
      icon: <Shop />,
      label: 'Products',
      subItems: ['All Products', 'Add New', 'Categories'],
    },
    {
      id: 'articles',
      icon: <Article />,
      label: 'Articles',
      subItems: ['All Articles', 'Draft', 'Published'],
    },
    {
      id: 'settings',
      icon: <Settings />,
      label: 'Settings',
      subItems: ['General', 'Notifications', 'Security'],
    },
  ];

  return (
    <>
     
 {/* <AdminHeader/> */}
     <StyledDrawer  anchor="left" variant="permanent" className='sidebar'>
      {/* User Section */}
      <UserSection>
        <Avatar
          src="/path-to-user-image.jpg"
          sx={{ width: 60, height: 60 }}
          alt="User Avatar"
        />
        <Box>
          <Typography variant="h6">John Doe</Typography>
          <Typography variant="body2" color="text.secondary">
            @johndoe
          </Typography>
        </Box>
      </UserSection>

      {/* Location */}
      <InfoSection>
        <LocationOn color="action" />
        <Box>
          <Typography variant="body2" color="text.secondary">
            Location
          </Typography>
          <Typography variant="body1">New York, USA</Typography>
        </Box>
      </InfoSection>

      {/* Category */}
      <InfoSection>
        <Category color="action" />
        <Box>
          <Typography variant="body2" color="text.secondary">
            Category
          </Typography>
          <Typography variant="body1">Digital Artist</Typography>
        </Box>
      </InfoSection>

      {/* Share Button */}
      <ShareButton variant="contained" color="primary" startIcon={<Share />}>
        Share My Page
      </ShareButton>

      {/* Menu List */}
      <List sx={{ mt: 2 }}>
        {menus.map((menu) => (
          <React.Fragment key={menu.id}>
            <ListItem
              button
              onClick={() => handleMenuClick(menu.id)}
              sx={(theme) => ({
                bgcolor: openMenu === menu.id ? theme.palette.action.selected : 'transparent',
                '&:hover': {
                  bgcolor: openMenu === menu.id
                    ? theme.palette.action.selected
                    : theme.palette.action.hover,
                },
              })}
            >
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.label} />
              {openMenu === menu.id ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={openMenu === menu.id} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {menu.subItems.map((subItem) => (
                  <ListItem
                    key={subItem}
                    button
                    sx={{
                      pl: 4,
                      '&:hover': {
                        bgcolor: 'action.hover',
                      },
                    }}
                  >
                    <ListItemText
                      primary={subItem}
                      sx={{
                        '& .MuiTypography-root': {
                          fontSize: '0.9rem',
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </StyledDrawer>
   </>
  );
};

export default Sidebar;
