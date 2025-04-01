import { Card, CardContent, CardMedia, Grid, Typography, Link, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../../../assets/1.jpg";
import image2 from "../../../assets/2.jpg";
import api from "../../../services/api";

const PrintSubMenu = ({ close, menus, menuId }) => {
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
    <Grid container spacing={3} onMouseLeave={() => close()}>
      {/* Submenus */}
      <Grid item lg={9} md={9} sm={9} xs={9}>
        <Grid container>
          {subMenus.map((subMenu) => (
            <Grid
              item
              key={subMenu._id}
              lg={3}
              md={3}
              sm={6}
              xs={12}
              className="menu_row"
              sx={{ borderRight: '1px solid #ebebeb', px: 2 }}
            >
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
                      <Typography display="block" className="submenu_title">
                        {subMenuItem.title}
                      </Typography>
                    </Link>
                  ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
  
      {/* Highlights Section */}
      <Grid item lg={3} md={3} sm={3} xs={3}>
        <Typography variant="subtitle1" className="menu_title" fontWeight="bold">
          Famous artists
        </Typography>
  
        <Card sx={{ boxShadow: 0, my: 2 }} className="menu_card">
          <CardMedia component="img" height="80" image={image1} alt="Surrealist Visions" />
          <CardContent sx={{ p: 1 }}>
            <Typography variant="body2" fontWeight="bold">
              Famous artists: Surrealist Visions
            </Typography>
            <Typography color="primary">Discover →</Typography>
          </CardContent>
        </Card>
  
        <Card sx={{ boxShadow: 0, mt: 2 }} className="menu_card">
          <CardMedia component="img" height="80" image={image2} alt="Timeless Portraits" />
          <CardContent sx={{ p: 1 }}>
            <Typography variant="body2" fontWeight="bold">
              Famous artists: Timeless Portraits
            </Typography>
            <Typography color="primary">Discover →</Typography> 
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
  
  
};
 
export default PrintSubMenu;
