import React from "react";
import {
  Dialog,
  DialogContent,
  Button,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { Google, Close } from "@mui/icons-material";
import { useGoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import "./login-style.css";
// import FacebookLogin from 'react-facebook-login';
import { useNavigate } from "react-router-dom";

const LoginModal = ({ open, onClose }) => {
  const navigate = useNavigate();

  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log("tokenResponse"),
    onError: (error) => console.error(error),
  });

  // const responseFacebook = (response) => {
  //   console.log(response);
  // };

  const handleSignup = (userType) => {
    navigate("/registration", { state: { userType } });
  };

  const handleLogin = (userType) => {
    navigate("/login", { state: { userType } });
  };


  // bg_images
const styles = {
  backgroundImage: `url("/images/collector.jpg")`,
  backgroundSize: "cover", // optional
  backgroundPosition: "center", // optional
};

// ========>

 // bg_images
 const artiststyles = {
  backgroundImage: `url("/images/artist-bg.jpg")`,
  backgroundSize: "cover", // optional
  backgroundPosition: "center", // optional
};  

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth  
    //style={styles}
    >
     <Box className="login_logo">
          <img src="../images/logo1.png" alt="logo"/>
        </Box>
      <DialogContent sx={{ display: "flex", p: 0, position: "relative" }} >
        <IconButton
        className="login_cancel_btn"
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <Close  style={{position:'absolute', zIndex:'9', Top: 10, right: 8}}/>
        </IconButton>

       

        {/* Left Side - Collector */}
        <Box className="collector_box"
         sx={{
    width: "50%",
    p: 4,
    borderColor: "divider",
    borderRight: "1px solid #1c2b46",
    textAlign: "center",
    ...styles, // If you still want to keep your custom styles from `styles` object
  }}
        >
          <Typography className="collecor_title" variant="h5" gutterBottom>
            I am an art lover, a collector
          </Typography>

          <Typography variant="body2" color="textSecondary" gutterBottom>
            Create an account to save your favorites and receive personal
            offers.
          </Typography>

          <Button
            className="login_commn_btn"
            variant="contained"
            fullWidth
            sx={{ mb: 2, mt: 3 }}
            onClick={() => handleSignup("collector")}
          >
            Sign up with email
          </Button>

          <Typography variant="body2" color="textSecondary" gutterBottom>
            or
          </Typography>

          <Button
            className="google_button"
            variant="outlined"
            onClick={() => googleLogin()}
            startIcon={<Google />}
            fullWidth
            sx={{ mb: 1 }}
          >
            Continue with Google
          </Button>

          <Typography variant="body2" color="textSecondary" mt={2}>
            Already have an account?{" "}
            <a href="#" style={{ color: "blue" }} onClick={() => handleLogin()}>
              Sign in
            </a>
          </Typography>
        </Box>

        {/* Right Side - Artist */}
        <Box sx={{ width: "50%", p: 4, textAlign: "center" }}  className="collector_box" style={artiststyles}>
          <Typography className="collecor_title" variant="h5" gutterBottom>
            🖌 I am an artist
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            You are a painter, photographer, sculptor, or draftsman, creating
            masterpieces.
          </Typography>
          <Button
            className="login_commn_btn"
            variant="contained"
            fullWidth
            sx={{ mb: 2 }}
            onClick={() => handleSignup("artist")}
          >
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
            You already are a centurion artist?{" "}
            <a href="#" style={{ color: "blue" }} onClick={() => handleLogin()}>
              Sign in
            </a>
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
