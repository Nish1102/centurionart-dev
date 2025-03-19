import { Card, CardContent, CardMedia, Grid, Typography, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../../../assets/1.jpg";
import image2 from "../../../assets/2.jpg";

const NewInMenu = ({ close, menus, menuId }) => {
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

      {/* Highlighted Images */}
      <Grid item xs={3}>
        <Typography variant="subtitle1" fontWeight="bold">Highlights</Typography>
        <Card sx={{ boxShadow: 0 }}>
          <CardMedia
            component="img"
            height="80"
            image={image1}
            alt="New & Notable"
          />
          <CardContent sx={{ p: 1 }}>
            <Typography variant="body2" fontWeight="bold">New & Notable: February</Typography>
          </CardContent>
        </Card>
        <Card sx={{ boxShadow: 0, mt: 1 }}>
          <CardMedia
            component="img"
            height="80"
            image={image2}
            alt="Art Deco Dreams"
          />
          <CardContent sx={{ p: 1 }}>
            <Typography variant="body2" fontWeight="bold">Art Deco Dreams</Typography>
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  );
};

export default NewInMenu;
