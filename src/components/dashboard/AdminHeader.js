import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  styled,
} from '@mui/material';
import {
  Menu as MenuIcon,
  AccountCircle,
  Notifications,
  Settings,
} from '@mui/icons-material';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)',
  zIndex: theme.zIndex.drawer + 1,
}));

const LogoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

const Logo = styled('img')({
  height: '50px',
  width: 'auto',
});

const RightIcons = styled(Box)({
  marginLeft: 'auto',
  display: 'flex',
  gap: '8px',
});

const AdminHeader = ({ onToggleSidebar }) => {
  return (
    <StyledAppBar position="fixed">
      {/* <Toolbar>
        <LogoContainer>
          <Logo src="../images/logo1.png" alt="Logo" /> 
        </LogoContainer>

        <IconButton
          color="inherit"
          aria-label="toggle sidebar"
          onClick={onToggleSidebar}
          edge="start"
          sx={{ mx: 8 }}
        >
          <MenuIcon />
        </IconButton>

        <RightIcons>
          <IconButton color="inherit" size="large">
            <Notifications />
          </IconButton>
          
          <IconButton color="inherit" size="large">
            <Settings />
          </IconButton>

          <IconButton color="inherit" size="large">
            <AccountCircle />
          </IconButton>
        </RightIcons>
      </Toolbar> */}

      <AppBar position="fixed" open={open}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={[
                    {
                      marginRight: 5,
                    },
                    open && { display: 'none' },
                  ]}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                  Mini variant drawer
                </Typography>
              </Toolbar>
            </AppBar>
    </StyledAppBar>
  );
};

export default AdminHeader;