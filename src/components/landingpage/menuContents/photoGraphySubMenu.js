import { Grid, Typography, Link } from "@mui/material";
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
    <Grid container spacing={2} onMouseLeave={() => close()}>
      {subMenus.map((subMenu) => (
        <Grid item xs={3} key={subMenu._id}>
          <Typography variant="subtitle1" fontWeight="bold">
            {subMenu.title}
          </Typography>

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
                <Typography display="block">{subMenuItem.title}</Typography>
              </Link>
            ))}
        </Grid>
      ))}

    </Grid>
  );
};

export default PhotographySubMenu;
