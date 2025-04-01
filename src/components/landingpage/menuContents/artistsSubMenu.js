import { Card, CardContent, CardMedia, Grid, Typography, Link, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../../../assets/1.jpg";
import image2 from "../../../assets/2.jpg";
import api from "../../../services/api";


const ArtistsSubMenu = ({ close, menus, menuId }) => {

  const navigate = useNavigate();

  const [subMenus, setSubMenus] = useState([]);

  // Sub-menus ko filter karna
  useEffect(() => {
    const filteredSubMenus = menus.filter((item) => item.parent_id === menuId);
    setSubMenus(filteredSubMenus);
  }, [menuId, menus]);

    const filterAndNavigate = async (menuId) => {
  
      try {
        const response = await api.get(`/api/artwork/filter/${menuId}`);
  
        // Ab response ko use karo ya navigate karo
        // navigate("/collector-dashboard", { state: { menuId, artworks: response.data } });
      } catch (error) {
        console.error(25, 'Error fetching artworks:', error);
      }
    };

  return (
    <Grid container spacing={2} 
   onMouseLeave={() => close()}
    >

      {subMenus.map((subMenu) => (
        <Grid item xs={3} key={subMenu._id} className="menu_row" sx={{ borderRight: '1px solid #ebebeb', px:2}}>
          <Typography variant="subtitle1" className="menu_title" fontWeight="bold">
            {subMenu.title}
          </Typography>

          <Box className="menu_bg">
          {menus
            .filter((subMenuItem) => subMenuItem.parent_id === subMenu._id)
            .map((subMenuItem) => (
              <Link
                key={subMenuItem._id}
                underline="none"
                sx={{ "&:hover": { textDecoration: "underline" }, display: "block" }}
                component="button"
                onClick={() => filterAndNavigate(subMenuItem._id)}
              >
                <Typography display="block" className="submenu_title">{subMenuItem.title}</Typography>
              </Link>
            ))}
          </Box>
        </Grid>
      ))}


      {/* Highlighted Images */}
      <Grid item xs={3}>
        <Card sx={{ boxShadow: 0,my:0 }} className="menu_card">
          <CardMedia
            component="img"
            height="80"
            image={image1}
            alt="Sell Your Art"
          />
          <CardContent sx={{ p: 1 }}>
            <Typography variant="body2" fontWeight="bold">Artists: Sell your art worldwide with Singulart.</Typography>
            <Typography color="primary">Discover →</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={3}>
        <Card sx={{ boxShadow: 0 }} className="menu_card">
          <CardMedia
            component="img"
            height="80"
            image={image2}
            alt="Inspired by Pierre Soulages"
          />
          <CardContent sx={{ p: 1 }}>
            <Typography variant="body2" fontWeight="bold">Inspired by Pierre Soulages</Typography>
            <Typography color="primary">Discover →</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ArtistsSubMenu
