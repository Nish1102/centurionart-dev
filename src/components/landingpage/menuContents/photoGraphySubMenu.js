import { Grid, Typography, Link, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PhotographySubMenu = ({ close, menus, menuId }) => {
  const navigate = useNavigate();
  const [subMenus, setSubMenus] = useState([]);

  // Sub-menus ko filter karna
  useEffect(() => {
    const filteredSubMenus = menus.filter((item) => item.parent_id === menuId);
    setSubMenus(filteredSubMenus);
  }, [menuId, menus]);


  return (
    <Grid container spacing={2} 
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
                onClick={() => navigate("/collector-dashboard")}
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

export default PhotographySubMenu;
