import React, { useState } from "react";
import { Dialog, DialogContent, Button, Typography, Box, IconButton } from "@mui/material";
import { Google, Close } from "@mui/icons-material";
import { useGoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import RegisterForm from "./RegistrationPage";
import { useUser } from "../../contexts/userContext";
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ open, onClose }) => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const { login } = useUser();
  const navigate = useNavigate();

  // Create separate login functions for each role
  const collectorGoogleLogin = useGoogleLogin({
    onSuccess: async tokenResponse => {
      handleLoginSuccess(tokenResponse, 'collector');
    },
    onError: error => console.error(error),
  });

  const artistGoogleLogin = useGoogleLogin({
    onSuccess: async tokenResponse => {
      handleLoginSuccess(tokenResponse, 'artist');
    },
    onError: error => console.error(error),
  });

  // Common function to handle login success
  const handleLoginSuccess = async (tokenResponse, role) => {
    try {
      const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
          'Authorization': `Bearer ${tokenResponse.access_token}`
        }
      });
      const userInfo = await userInfoResponse.json();
      console.log('User Info:', userInfo);
      
      // Add role to user info
      const userWithRole = {
        ...userInfo,
        role: role,
        token: tokenResponse.access_token
      };
      
      // Store in localStorage with role
      localStorage.setItem('user', JSON.stringify({
        ...userWithRole,
        isAuthenticated: true
      }));
      
      // Update context with user data including role
      login(userWithRole);
      if (role === 'artist') {
        navigate('/artists-dashboard');
      } else {
        navigate('/'); // Navigate to home or collector page
      }
      
      onClose(); // Close the modal on success
    } catch (error) {
      console.error('Failed to fetch user info:', error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm">
      {!isRegisterOpen && <DialogContent sx={{ display: "flex", p: 0, position: "relative" }}>
        <IconButton onClick={onClose} sx={{ position: "absolute", top: 8, right: 8 }}>
          <Close />
        </IconButton>

        {/* Left Side - Collector */}
        <Box sx={{ width: "50%", p: 3, borderRight: 1, borderColor: "divider", textAlign: "center" }}>
          <Typography variant="h5" color="primary" gutterBottom>
            I am an art lover, a collector
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Create an account to save your favorites and receive personal offers.
          </Typography>
          <Button variant="contained" onClick={() => setIsRegisterOpen(true)} fullWidth sx={{ mb: 2 }}>
            Sign up with email
          </Button>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            or
          </Typography>
          <Button 
            variant="outlined" 
            onClick={() => collectorGoogleLogin()} 
            startIcon={<Google />} 
            fullWidth 
            sx={{ mb: 1 }}
          >
            Continue with Google
          </Button>
          <Typography variant="body2" color="textSecondary" mt={2}>
            Already have an account? <a href="#" style={{ color: "blue" }}>Sign in</a>
          </Typography>
        </Box>

        {/* Right Side - Artist */}
        <Box sx={{ width: "50%", p: 3, textAlign: "center" }}>
          <Typography variant="h5" color="primary" gutterBottom>
            🖌 I am an artist
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            You are a painter, photographer, sculptor, or draftsman.
          </Typography>
          <Button 
            variant="contained" 
            onClick={() => artistGoogleLogin()} 
            startIcon={<Google />}
            fullWidth
          >
            Apply with Google
          </Button>
          <Typography variant="body2" color="textSecondary" mt={2}>
            You already are a Singulart artist? <a href="#" style={{ color: "blue" }}>Sign in</a>
          </Typography>
        </Box>
      </DialogContent>}
      {isRegisterOpen && <DialogContent sx={{width: 350, p: 0, position: "relative" }}>
        <RegisterForm onClose={onClose}/>
      </DialogContent>}
    </Dialog>
  );
};

const LoginPage = ({ open, onClose }) => {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
       <LoginModal open={open} onClose={onClose} />
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
