import React from "react";
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography, Link } from "@mui/material";
import { Google } from "@mui/icons-material";
import { useGoogleLogin } from '@react-oauth/google';

const RegisterForm = ({ onClose }) => {
  const googleLogin = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log('tokenResponse');
      onClose(); // Close the modal on success
    },
    onError: error => console.error(error),
  });

  return (
    <Box sx={{ p: 2, textAlign: "center" }}>
      <Box sx={{ mb: 2 }}>
        <Google sx={{ fontSize: 50, color: "primary.main" }} />
      </Box>
      <Typography variant="h5" gutterBottom>
        Create my account on Centurion Art!
      </Typography>
      <form>
        <TextField
          label="Your full name"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Your email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Your password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <Box sx={{ textAlign: "left", mt: 2 }}>
          <FormControlLabel
            control={<Checkbox required />}
            label={
              <Typography sx={{mt: 2}} variant="body2">
                By registering, I accept the <Link href="#">General terms and conditions</Link>.
              </Typography>
            }
          />
        </Box>
        <Box sx={{ textAlign: "left", mt: 2 }}>
          <FormControlLabel
            control={<Checkbox />}
            label="Subscribe to the Singulart newsletter"
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" fullWidth>
            Create Account
          </Button>
        </Box>
        {/* <Box sx={{ mt: 2 }}>
          <Button variant="outlined" onClick={() => googleLogin()} startIcon={<Google />} fullWidth>
            Continue with Google
          </Button>
        </Box> */}
      </form>
    </Box>
  );
};

export default RegisterForm;