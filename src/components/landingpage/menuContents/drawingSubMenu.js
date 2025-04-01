import { Card, CardContent, CardMedia, Grid, Typography, Link, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../../../assets/1.jpg";
import image2 from "../../../assets/2.jpg";
import api from "../../../services/api";


const DrawingSubMenu = ({ close, menus, menuId }) => {

  const navigate = useNavigate();

  const [subMenus, setSubMenus] = useState([]);

  // Sub-menus ko filter karna
  useEffect(() => {
    const filteredSubMenus = menus.filter((item) => item.parent_id === menuId);
    setSubMenus(filteredSubMenus);
  }, [menuId, menus]);

      const filterAndNavigate = async (menuId) => {
        console.log(13, 'filter and Navigate');
        console.log(15, 'menuId -->', menuId);
    
        try {
          const response = await api.get(`/api/artwork/filter/${menuId}`);
          console.log(20, 'Response:', response.data);
    
          // Ab response ko use karo ya navigate karo
          // navigate("/collector-dashboard", { state: { menuId, artworks: response.data } });
        } catch (error) {
          console.error(25, 'Error fetching artworks:', error);
        }
      };

  return (
    <Grid container spacing={3} 
   onMouseLeave={() => close()}
    >

      {subMenus.map((subMenu) => (
        <Grid item xs={3} key={subMenu._id} lassName="menu_row" sx={{ borderRight: '1px solid #ebebeb', px:2}}>
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


      {/* Highlights */}
      <Grid item xs={3}>
        <Card sx={{ boxShadow: 0,my:2 }} className="menu_card">
          <CardMedia
            component="img"
            height="100"
            image={image1}
            alt="Contemporary Landscapes"
          />
          <CardContent sx={{ p: 1 }}>
            <Typography variant="body2" fontWeight="bold">
              Contemporary Landscapes
            </Typography>
            <Typography color="primary">Discover →</Typography>
          </CardContent>
        </Card>

        <Card sx={{ boxShadow: 0, mt: 1 }} className="menu_card">
          <CardMedia
            component="img"
            height="100"
            image={image2}
            alt="New Romanticism"
          />
          <CardContent sx={{ p: 1 }}>
            <Typography variant="body2" fontWeight="bold">
              New Romanticism
            </Typography>
            <Typography color="primary">Discover →</Typography>
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  );
};

export default DrawingSubMenu;
