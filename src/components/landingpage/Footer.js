import React from "react";
import { Box, Container, Grid, Typography, Link, useTheme, IconButton, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";



const StyledFooter = styled(Box)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#ffffff",
    // color: theme.palette.mode === "dark" ? "#ffffff" : "#000000",
     padding: theme.spacing(8, 0, 0),
     marginTop: "auto",
    // borderTop: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
    // backgroundImage: theme.palette.mode === "dark" 
    //   ? "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 100%)"
    //   : "linear-gradient(to bottom, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0) 100%)"
  }));
  
  const StyledLink = styled(Link)(({ theme }) => ({
    color: theme.palette.mode === "dark" ? "#ffffff" : "#000000",
    textDecoration: "none",
    position: "relative",
    "&:before": {
      content: '""',
      position: "absolute",
      width: "0",
      height: "1px",
      bottom: "-2px",
      left: "0",
      backgroundColor: '#5600d3',
      transition: "width 0.3s ease"
    },
    "&:hover": {
      color: theme.palette.primary.main,
      "&:before": {
        width: "100%"
      }
    }
  }));
  
  const SocialIcon = styled(IconButton)(({ theme }) => ({
    color: theme.palette.mode === "dark" ? "#ffffff" : "#000000",
  //  margin: theme.spacing(0, 1),
    transition: "transform 0.2s ease-in-out, color 0.2s ease-in-out",
    "&:hover": {
      color: theme.palette.primary.main,
      transform: "scale(1.1)"
    }
  }));

function Footer() {

    const theme = useTheme();
  const currentYear = new Date().getFullYear();

  const footerData = {
    famousArtists: [
      "Pablo Picasso",
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Claude Monet",
      "Salvador Dalí"
    ],
    forArtists: [
      "Submit Artwork",
      "Artist Resources",
      "Pricing Guide",
      "Artist Community",
      "Exhibition Opportunities"
    ],
    customerService: [
      "Contact Support",
      "Shipping Info",
      "Returns & Refunds",
      "FAQ",
      "Track Order"
    ],
    aboutSingulart: [
      "Our Story",
      "Press Room",
      "Careers",
      "Blog",
      "Privacy Policy"
    ]
  };



  return (
    <StyledFooter component="footer" className="footer_sec">
    <Container maxWidth="lg">
      <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box mb={2}>
              <img 
                src="../images/logo1.png"
                alt="Singulart Logo"
                style={{ 
                  height: 80, 
                  width: "auto",
                 // filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.1))"
                }}
                loading="lazy"
              />
            </Box>
            <Typography 
              variant="body2" 
              color="text.secondary" 
              align="start"
              sx={{ 
                maxWidth: 300,
                fontStyle: "italic",
                lineHeight: 1.8
              }}
            >
              The Centurion Art 2.0 is a leading online art gallery, connecting artists and art lovers worldwide. We curate exceptional artworks and provide a platform for artists to showcase their talent to a global audience.
            </Typography>
            
            <Box mt={3} ml={1} style={{marginRight:'auto',}}>
              <SocialIcon aria-label="Facebook">
                <FacebookIcon />
              </SocialIcon>
              <SocialIcon aria-label="Twitter">
                <TwitterIcon />
              </SocialIcon>
              <SocialIcon aria-label="Instagram">
                <InstagramIcon />
              </SocialIcon>
              <SocialIcon aria-label="Pinterest">
                <PinterestIcon />
              </SocialIcon>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Typography 
            variant="h6" 
            color="text.primary" 
            gutterBottom
            sx={{ 
              fontFamily: "Playfair Display, serif",
              fontWeight: 600 
            }}
          >
            Famous Artists
          </Typography>
          {footerData.famousArtists.map((item, index) => (
            <Box key={index} mb={1}>
              <StyledLink href="#" aria-label={item}>
                {item}
              </StyledLink>
            </Box>
          ))}
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <Typography 
            variant="h6" 
            color="text.primary" 
            gutterBottom
            sx={{ 
              fontFamily: "Playfair Display, serif",
              fontWeight: 600 
            }}
          >
            For Artists
          </Typography>
          {footerData.forArtists.map((item, index) => (
            <Box key={index} mb={1}>
              <StyledLink href="#" aria-label={item}>
                {item}
              </StyledLink>
            </Box>
          ))}
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <Typography 
            variant="h6" 
            color="text.primary" 
            gutterBottom
            sx={{ 
              fontFamily: "Playfair Display, serif",
              fontWeight: 600 
            }}
          >
            Customer Service
          </Typography>
          {footerData.customerService.map((item, index) => (
            <Box key={index} mb={1}>
              <StyledLink href="#" aria-label={item}>
                {item}
              </StyledLink>
            </Box>
          ))}
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <Typography 
            variant="h6" 
            color="text.primary" 
            gutterBottom
            sx={{ 
              fontFamily: "Playfair Display, serif",
              fontWeight: 600 
            }}
          >
            About
          </Typography>
          {footerData.aboutSingulart.map((item, index) => (
            <Box key={index} >
              <StyledLink href="#" aria-label={item}>
                {item}
              </StyledLink>
            </Box>
          ))}
        </Grid>

       
      </Grid>

      
    </Container>
    <Box textAlign="center" className="coryright_sec">
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{ 
            borderTop: "1px solid rgba(0,0,0,0.1)",
            paddingTop: 2,
            paddingBottom:2,
             marginTop: 3 
          }}
        >
          © {currentYear} The Centurion Art 2.0. All Rights Reserved.
        </Typography>
      </Box>
  </StyledFooter>
  )
}

export default Footer;