import React from "react";
import { Box, Typography, FormControlLabel, Checkbox, Radio, RadioGroup, Slider, Divider, Link } from "@mui/material";

const Sidebar = () => {
  return (
    <Box sx={{ width: 250, mr: 4, height: '100vh', overflowY: 'auto', position: 'fixed' }}>
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Filters
      </Typography>
      <Divider />
      <Box sx={{ mt: 2 }}>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Show only available artworks"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Show only Special Deals"
        />
      </Box>
      <Divider sx={{ my: 2 }} />
      <Typography variant="subtitle1" fontWeight="bold" mb={1}>
        Medium
      </Typography>
      <RadioGroup defaultValue="all">
        <FormControlLabel value="all" control={<Radio />} label="All Mediums" />
        <FormControlLabel value="painting" control={<Radio />} label="Painting" />
        <FormControlLabel value="sculpture" control={<Radio />} label="Sculpture" />
        <FormControlLabel value="photography" control={<Radio />} label="Photography" />
        <FormControlLabel value="drawing" control={<Radio />} label="Drawing" />
        <FormControlLabel value="print" control={<Radio />} label="Print" />
      </RadioGroup>
      <Link href="#" variant="body2" sx={{ display: "block", mt: 1 }}>
        Show more
      </Link>
      <Divider sx={{ my: 2 }} />
      <Typography variant="subtitle1" fontWeight="bold" mb={1}>
        Price
      </Typography>
      <Slider
        defaultValue={100000}
        min={0}
        max={100000}
        step={1000}
        valueLabelDisplay="auto"
        sx={{ color: "primary.main" }}
      />
      <Divider sx={{ my: 2 }} />
      <Typography variant="subtitle1" fontWeight="bold" mb={1}>
        Themes
      </Typography>
      <RadioGroup defaultValue="all">
        <FormControlLabel value="all" control={<Radio />} label="All Themes" />
        <FormControlLabel value="abstraction" control={<Radio />} label="Abstraction" />
        <FormControlLabel value="landscape" control={<Radio />} label="Landscape" />
        <FormControlLabel value="nature" control={<Radio />} label="Nature" />
        <FormControlLabel value="portrait" control={<Radio />} label="Portrait" />
        <FormControlLabel value="pop-culture" control={<Radio />} label="Pop Culture" />
      </RadioGroup>
      <Link href="#" variant="body2" sx={{ display: "block", mt: 1 }}>
        Show more
      </Link>
      <Divider sx={{ my: 2 }} />
      <Typography variant="subtitle1" fontWeight="bold" mb={1}>
        Orientation
      </Typography>
      <RadioGroup defaultValue="all">
        <FormControlLabel value="all" control={<Radio />} label="All Orientations" />
        <FormControlLabel value="horizontal" control={<Radio />} label="Horizontal" />
        <FormControlLabel value="vertical" control={<Radio />} label="Vertical" />
        <FormControlLabel value="square" control={<Radio />} label="Square" />
      </RadioGroup>
      <Divider sx={{ my: 2 }} />
      <Typography variant="subtitle1" fontWeight="bold" mb={1}>
        Size
      </Typography>
      <RadioGroup defaultValue="all">
        <FormControlLabel value="all" control={<Radio />} label="All Sizes" />
        <FormControlLabel value="small" control={<Radio />} label="Small" />
        <FormControlLabel value="medium" control={<Radio />} label="Medium" />
        <FormControlLabel value="large" control={<Radio />} label="Large" />
      </RadioGroup>
      <Divider sx={{ my: 2 }} />
      <Typography variant="subtitle1" fontWeight="bold" mb={1}>
        Height
      </Typography>
      <Slider
        defaultValue={500}
        min={0}
        max={500}
        step={10}
        valueLabelDisplay="auto"
        sx={{ color: "primary.main" }}
      />
      <Divider sx={{ my: 2 }} />
      <Typography variant="subtitle1" fontWeight="bold" mb={1}>
        Width
      </Typography>
      <Slider
        defaultValue={500}
        min={0}
        max={500}
        step={10}
        valueLabelDisplay="auto"
        sx={{ color: "primary.main" }}
      />
      <Divider sx={{ my: 2 }} />
      <Typography variant="subtitle1" fontWeight="bold" mb={1}>
        Color
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {["#FFFFFF", "#FFCDD2", "#F8BBD0", "#E1BEE7", "#D1C4E9", "#C5CAE9", "#BBDEFB", "#B3E5FC", "#B2EBF2", "#B2DFDB", "#C8E6C9", "#DCEDC8", "#F0F4C3", "#FFF9C4", "#FFECB3", "#FFE0B2", "#FFCCBC", "#D7CCC8", "#CFD8DC", "#000000"].map((color) => (
          <Box key={color} sx={{ width: 24, height: 24, backgroundColor: color, borderRadius: "50%" }} />
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;