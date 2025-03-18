import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import image1 from "../../../assets/1.jpg";
import image2 from "../../../assets/2.jpg";

const ArtistsSubMenu = ({close}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuType, setMenuType] = useState(null);

  const handleOpen = (event, type) => {
    setAnchorEl(event.currentTarget);
    setMenuType(type);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuType(null);
  };

  const open = Boolean(anchorEl);

  return (
        <Grid container spacing={2} onMouseLeave={() => close()}>
          {/* Artist Categories */}
          <Grid item xs={3}>
            <Typography variant="subtitle1" fontWeight="bold">ARTIST CATEGORIES</Typography>
            <Typography>Famous artists</Typography>
            <Typography>Best-selling artists</Typography>
            <Typography>Curator's Selection</Typography>
            <Typography>Featured Artists</Typography>
          </Grid>

          {/* Featured Artists */}
          <Grid item xs={3}>
            <Typography variant="subtitle1" fontWeight="bold">FEATURED ARTISTS</Typography>
            <Typography>Jorge Nava</Typography>
            <Typography>Pasquale Rapicano</Typography>
            <Typography>Silvia Ingrid Hummer</Typography>
            <Typography>Marc Crössmann</Typography>
            <Typography>Ulrike Gaiser</Typography>
            <Typography>Daniela Schreiber</Typography>
            <Typography>Hector Bouchet</Typography>
            <Typography>Jose Rizzo</Typography>
            <Typography>ozziuaan</Typography>
            <Typography>Whitney Shirley</Typography>
          </Grid>

          {/* Highlighted Images */}
          <Grid item xs={3}>
            <Card sx={{ boxShadow: 0 }}>
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
            <Card sx={{ boxShadow: 0 }}>
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
