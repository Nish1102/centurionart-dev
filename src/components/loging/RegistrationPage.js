import React, { useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography, Link } from "@mui/material";
import { Google } from "@mui/icons-material";
import { useGoogleLogin } from '@react-oauth/google';
import { authService } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const RegisterForm = ({ onClose, userType }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    try {
      await authService.register(name , email, password, userType);
      navigate('/login');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 2, textAlign: "center" }}>
      <Box sx={{ mb: 2 }}>
        <Google sx={{ fontSize: 50, color: "primary.main" }} />
      </Box>
      <Typography variant="h5" gutterBottom>
        Create my account on Centurion Art!
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Your full name"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Your email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Your password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Confirm Your password"
          onChange={(e) => setConfirmPassword(e.target.value)}
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
          <Button variant="contained" color="primary" fullWidth type="submit">
            Create Account
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default RegisterForm;