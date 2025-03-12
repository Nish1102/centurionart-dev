import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";

const UserProfilePopover = ({ onClose }) => {
  return (
    <Box sx={{ p: 2, width: 300 }}>
      <Typography variant="h6" gutterBottom>
        My Account
      </Typography>
      <Divider />
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" color="textSecondary">
          First Name: Rama Krishna
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Last Name: Dasari
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Email: ramakrishnad4686@gmail.com
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Preferred Language: English
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Preferred Currency: INR
        </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Button variant="contained" color="primary" fullWidth>
          My Orders
        </Button>
        <Button variant="outlined" color="primary" fullWidth sx={{ mt: 1 }}>
          Sign Out
        </Button>
      </Box>
    </Box>
  );
};

export default UserProfilePopover;