import { Grid, Typography, Link, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";


const SculptureSubMenu = ({ close, menus, menuId }) => {

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
        <Grid item xs={4} key={subMenu._id} className="menu_row" sx={{ borderRight: '1px solid #ebebeb', px:2}}>
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
    </Grid>
  );
};

export default SculptureSubMenu;
