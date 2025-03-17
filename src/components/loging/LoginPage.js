import React from "react";
import { Dialog, DialogContent, Button, Typography, Box, IconButton } from "@mui/material";
import { Google, Close } from "@mui/icons-material";
import { useGoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
// import FacebookLogin from 'react-facebook-login';
import { useNavigate } from "react-router-dom";

const LoginModal = ({ open, onClose }) => {

  const navigate = useNavigate();

  const googleLogin = useGoogleLogin({
    onSuccess: tokenResponse => console.log('tokenResponse'),
    onError: error => console.error(error),
  });

  // const responseFacebook = (response) => {
  //   console.log(response);
  // };

  const handleSignup = (userType) => {
    navigate("/registration", { state: { userType } });
  }  

  const handleLogin = (userType) => {
    navigate("/login", { state: { userType } })
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent sx={{ display: "flex", p: 0, position: "relative" }}>
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
          <Button variant="contained" fullWidth sx={{ mb: 2 }} onClick={() => handleSignup('collector')}>
            Sign up with email
          </Button>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            or
          </Typography>
          <Button variant="outlined" onClick={() => googleLogin()} startIcon={<Google />} fullWidth sx={{ mb: 1 }}>
            Continue with Google
          </Button>
          {/* <FacebookLogin
            appId="YOUR_FACEBOOK_APP_ID"  
            autoLoad={false}
            callback={responseFacebook}
            render={renderProps => (
              <Button variant="outlined" onClick={renderProps.onClick} startIcon={<Facebook />} fullWidth>
                Continue with Facebook
              </Button>
            )}
          /> */}
          <Typography variant="body2" color="textSecondary" mt={2}>
            Already have an account? <a href="#" style={{ color: "blue" }} onClick={() => handleLogin()}>Sign in</a>
          </Typography>
        </Box>

        {/* Right Side - Artist */}
        <Box sx={{ width: "50%", p: 3, textAlign: "center" }}>
          <Typography variant="h5" color="primary" gutterBottom>
            🖌 I am an artist
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            You are a painter, photographer, sculptor, or draftsman, creating masterpieces.
          </Typography>
          <Button variant="contained" fullWidth sx={{ mb: 2 }} onClick={() => handleSignup('artist')}>
            Apply online
          </Button>
          {/* <Typography variant="body2" color="textSecondary" gutterBottom>
            or
          </Typography>
          <Button variant="outlined" onClick={() => googleLogin()} startIcon={<Google />} fullWidth sx={{ mb: 1 }}>
            Continue with Google
          </Button> */}
          {/* <FacebookLogin
            appId="YOUR_FACEBOOK_APP_ID"  
            autoLoad={false}
            callback={responseFacebook}
            render={renderProps => (
              <Button variant="outlined" onClick={renderProps.onClick} startIcon={<Facebook />} fullWidth>
                Continue with Facebook
              </Button>
            )}
          /> */}
          <Typography variant="body2" color="textSecondary" mt={2}>
            You already are a centurion artist? <a href="#" style={{ color: "blue" }} onClick={() => handleLogin()} >Sign in</a>
          </Typography>
        </Box>
      </DialogContent>
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