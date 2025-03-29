import React, { useState } from "react";
import "./login-style.css";
import {
  Dialog,
  DialogContent,
  Button,
  Typography,
  Box,
  IconButton,
  DialogTitle,
  Tabs,
  Tab,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useGoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { Google } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/userContext";
import RegisterForm from "./RegistrationPage";

const TabPanel = ({ children, value, index }) => (
  <div role="tabpanel" hidden={value !== index}>
    {value === index && <Box sx={{ p: 4 }}>{children}</Box>}
  </div>
);

function LoginModal({ open, onClose }) {
  const [tabValue, setTabValue] = useState(0);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const { login } = useUser();
  const [userType, setUserType ] = useState(null);

  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {

    if(newValue === 0) {
      setUserType('collector')
    } else {
      setUserType('artist')
    }

    setTabValue(newValue);
  };

  // Create separate login functions for each role
  const collectorGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      handleLoginSuccess(tokenResponse, "collector");
    },
    onError: (error) => console.error(error),
  });

  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log("tokenResponse"),
    onError: (error) => console.error(error),
  });

  const artistGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      handleLoginSuccess(tokenResponse, "artist");
    },
    onError: (error) => console.error(error),
  });

  // Common function to handle login success
  const handleLoginSuccess = async (tokenResponse, role) => {
    try {
      const userInfoResponse = await fetch(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        }
      );
      const userInfo = await userInfoResponse.json();

      // Add role to user info
      const userWithRole = {
        ...userInfo,
        role: role,
        token: tokenResponse.access_token,
      };

      // Store in localStorage with role
      localStorage.setItem(
        "user",
        JSON.stringify({
          ...userWithRole,
          isAuthenticated: true,
        })
      );

      // Update context with user data including role
      login(userWithRole);
      if (role === "artist") {
        navigate("/artists-dashboard");
      } else {
        navigate("/"); // Navigate to home or collector page
      }

      onClose(); // Close the modal on success
    } catch (error) {
      console.error("Failed to fetch user info:", error);
    }
  };

  const handleSignup = (userType) => {
    navigate("/registration", { state: { userType } });
  };

  const handleLogin = (userType) => {
    navigate("/login", { state: { userType } });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      sx={{
        "& .MuiPaper-root": {
          borderRadius: 3,
          background: "linear-gradient(135deg, #fff7f1 0%, #ffecd2 100%)",
          boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#5600d3",
          fontSize: "1.8rem",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        Art Community Registration
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8, color: "#000" }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          centered
          sx={{
            "& .MuiTabs-indicator": { backgroundColor: "#5600d3" },
            "& .MuiTab-root": {
              color: "#5600d3",
              fontWeight: "bold",
              "&.Mui-selected": {
                color: "#fff",
                background: "#5600d3",
                borderRadius: "5px 5px 0px 0px",
              },
            },
          }}
        >
          <Tab label="Art Lover & Collector Signup" />
          <Tab label="Artist Registration" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <Box
            component="form"
            noValidate
            sx={{
              background: "rgba(255, 255, 255, 0.7)",
              p: 3,
              borderRadius: "6px",
              boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            {!isRegisterOpen && (
              <DialogContent
                sx={{ display: "flex", p: 0, position: "relative" }}
              >
                {/* Left Side - Collector */}
                <Box
                  className="collector_box"
                  sx={{
                    width: "100%",
                    p: 4,
                    textAlign: "center",
                    // ...styles, // If you still want to keep your custom styles from `styles` object
                  }}
                >
                  <Typography
                    className="collecor_title"
                    variant="h5"
                    gutterBottom
                    align="center"
                    sx={{ fontFamily: "'Merriweather', serif", color: "#333" }}
                  >
                    I am an art lover, a collector
                  </Typography>

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    gutterBottom
                  >
                    Create an account to save your favorites and receive
                    personal offers.
                  </Typography>
                  <Button
                    className="login_commn_btn"
                    variant="contained"
                    onClick={() => setIsRegisterOpen(true)}
                    fullWidth
                    sx={{ mb: 2, mt: 3 }}
                  >
                    Sign up with email
                  </Button>

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    gutterBottom
                  >
                    or
                  </Typography>
                  <Button
                    variant="outlined"
                    className="google_button"
                    onClick={() => collectorGoogleLogin()}
                    startIcon={<Google />}
                    fullWidth
                    sx={{ mb: 1 }}
                  >
                    Continue with Google
                  </Button>
                  <Typography variant="body2" color="textSecondary" mt={2}>
                    Already have an account?{" "}
                    <a
                      href="#"
                      style={{ color: "blue" }}
                      onClick={() => handleLogin('collector')}
                    >
                      Sign in
                    </a>
                  </Typography>
                </Box>
              </DialogContent>
            )}

                        
            {isRegisterOpen && (
              <DialogContent sx={{ width: 350, p: 0, position: "relative" }}>
                <RegisterForm onClose={onClose} userType={userType} />
              </DialogContent>
            )}
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Box
            sx={{
              background: "rgba(255, 255, 255, 0.8)",
              p: 3,
              borderRadius: "6px",
              boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            {!isRegisterOpen && (
              <DialogContent
                sx={{ display: "flex", p: 0, position: "relative" }}
              >
                {/* Right Side - Artist */}
                <Box
                  sx={{ width: "100%", p: 4, textAlign: "center" }}
                  className="collector_box"
                
                >
                  <Typography
                    className="collecor_title"
                    variant="h5"
                    gutterBottom
                    align="center"
                    sx={{ fontFamily: "'Merriweather', serif", color: "#333" }}
                  >
                    🖌 I am an artist
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    gutterBottom
                  >
                    You are a painter, photographer, sculptor, or draftsman,
                    creating masterpieces.
                  </Typography>
                  <Button
                    variant="contained"
                    className="login_commn_btn"
                    onClick={() => artistGoogleLogin()}
                    startIcon={<Google />}
                    sx={{ mb: 2 }}
                    fullWidth
                  >
                    Apply with Google
                    {/* <Button variant="contained" fullWidth sx={{ mb: 2 }} onClick={() => handleSignup('artist')}>
             Apply online */}
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
                    <a
                      href="#"
                      style={{ color: "blue" }}
                      onClick={() => handleLogin()}
                    >
                      Sign in
                    </a>
                  </Typography>
                </Box>
              </DialogContent>
            )}

            {isRegisterOpen && (
              <DialogContent sx={{ width: 350, p: 0, position: "relative" }}>
                <RegisterForm onClose={onClose} userType={userType}/>
              </DialogContent>
            )}
          </Box>
        </TabPanel>
      </DialogContent>
    </Dialog>
  );
}
const LoginPage = ({ open, onClose }) => {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <LoginModal open={open} onClose={onClose} />
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
