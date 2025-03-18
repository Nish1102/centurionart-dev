import React, { use } from "react";
import { Box, Typography, Chip, Button, Divider, Avatar } from "@mui/material";
import { useUser } from "../../contexts/userContext";
import { useNavigate } from 'react-router-dom';

const UserProfilePopover = ({ onClose }) => {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const logoutUser = () => {
    logout();
    onClose();
    navigate('/')
  };
  return (
    <Box sx={{ p: 2, width: 300 }} onMouseLeave={onClose}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Avatar
          src={user?.picture || "https://via.placeholder.com/40"}
          alt={user?.name || "User"}
          sx={{
            width: 60,
            height: 60,
            mr: 2,
            border: "2px solid #1976d2",
          }}
        />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {user?.name || "Guest User"}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {user?.email || "No email available"}
          </Typography>
        </Box>
      </Box>

      <Divider />

      <Typography variant="subtitle1" sx={{ mt: 2, mb: 1, fontWeight: "bold" }}>
        Account Details
      </Typography>

      <Box sx={{ mt: 1 }}>
        <Typography variant="body2" color="textSecondary">
          First Name: {user?.given_name || user?.name || "Not available"}
        </Typography>
        {user?.family_name && (
          <Typography variant="body2" color="textSecondary">
            Last Name: {user.family_name}
          </Typography>
        )}
        <Typography variant="body2" color="textSecondary">
          Email: {user?.email || "Not available"}
        </Typography>
        {user?.role && (
          <Chip
            label={user.role.charAt(0).toUpperCase() + user.role.slice(1)}
            size="small"
            color={user.role === "artist" ? "secondary" : "primary"}
            sx={{ mt: 0.5 }}
          />
        )}
        <Typography variant="body2" color="textSecondary">
          Preferred Language: English
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Preferred Currency: INR
        </Typography>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Button variant="contained" color="primary" fullWidth sx={{ mb: 1 }}>
          My Orders
        </Button>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          onClick={logoutUser}
        >
          Sign Out
        </Button>
      </Box>
    </Box>
  );
};

export default UserProfilePopover;
