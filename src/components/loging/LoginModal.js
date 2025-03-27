import React, { useState } from "react";
import {
  Box,
  Typography,
  Tab,
  Tabs,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Button
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import GoogleIcon from "@mui/icons-material/Google";
import { useGoogleLogin } from "@react-oauth/google";

import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/userContext"; // Ensure correct path

const TabPanel = ({ children, value, index }) => (
  <div role="tabpanel" hidden={value !== index}>
    {value === index && <Box sx={{ p: 4 }}>{children}</Box>}
  </div>
);

function LoginModal({ open, onClose }) {
  const [tabValue, setTabValue] = useState(0);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const { login } = useUser();
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleLoginSuccess = async (tokenResponse, role) => {
    try {
      const userInfoResponse = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
      });
      const userInfo = await userInfoResponse.json();

      const userWithRole = {
        ...userInfo,
        role,
        token: tokenResponse.access_token,
        isAuthenticated: true,
      };
      localStorage.setItem("user", JSON.stringify(userWithRole));
      login(userWithRole);
      navigate(role === "artist" ? "/artists-dashboard" : "/");
      onClose();
    } catch (error) {
      console.error("Failed to fetch user info:", error);
    }
  };

  const collectorGoogleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => handleLoginSuccess(tokenResponse, "collector"),
    onError: (error) => console.error(error),
  });

  const artistGoogleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => handleLoginSuccess(tokenResponse, "artist"),
    onError: (error) => console.error(error),
  });

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ textAlign: "center", fontWeight: "bold", color: "#5600d3" }}>
        Art Community Registration
        <IconButton onClick={onClose} sx={{ position: "absolute", right: 8, top: 8, color: "#5600d3" }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="Art Lover & Collector Signup" />
          <Tab label="Artist Registration" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          {!isRegisterOpen && (
            <Box sx={{ textAlign: "center", p: 3 }}>
              <Typography variant="h5" sx={{ color: "#5600d3" }}>
                Join Our Art Community
              </Typography>
              <Button variant="contained" onClick={() => setIsRegisterOpen(true)} fullWidth sx={{ mt: 3 }}>
                Sign up with Email
              </Button>
              <Button
                variant="outlined"
                startIcon={<GoogleIcon />}
                onClick={collectorGoogleLogin}
                fullWidth
                sx={{ mt: 2 }}
              >
                Continue with Google
              </Button>
            </Box>
          )}
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          {!isRegisterOpen && (
            <Box sx={{ textAlign: "center", p: 3 }}>
              <Typography variant="h5" sx={{ color: "#5600d3" }}>
                Welcome to Our Art Community
              </Typography>
              <Button
                variant="contained"
                startIcon={<GoogleIcon />}
                onClick={artistGoogleLogin}
                fullWidth
                sx={{ mt: 3 }}
              >
                Apply with Google
              </Button>
            </Box>
          )}
        </TabPanel>
      </DialogContent>
    </Dialog>
  );
}

export default LoginModal;
