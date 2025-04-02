import { LocalOffer, FilterAlt } from "@mui/icons-material";

export const filters = [
  {
    text: "Price Range",
    icon: <LocalOffer />,
    isSubMenu: true,
    isRange: true,
  },
  {
    text: "Medium",
    icon: <FilterAlt />,
    isSubMenu: true,
    options: [
      { name: "Acrylic", id: "ACRYLIC" },
      { name: "Oil", id: "OIL" },
      { name: "Watercolor", id: "WATERCOLOR" },
    ],
  },
  {
    text: "Theme",
    icon: <FilterAlt />,
    isSubMenu: true,
    options: [
      { name: "Abstraction", id: "ABSTRACTION" },
      { name: "Landscape", id: "LANDSCAPE" },
      { name: "Nature", id: "NATURE" },
      { name: "Portrait", id: "PORTRAIT" },
    ],
  },
  {
    text: "Style",
    icon: <FilterAlt />,
    isSubMenu: true,
    options: [
      { name: "Modern", id: "MODERN" },
      { name: "Classic", id: "CLASSIC" },
      { name: "Impressionism", id: "IMPRESSIONISM" },
      { name: "Cubism", id: "CUBISM" },
    ],
  },
  {
    text: "Country",
    icon: <FilterAlt />,
    isSubMenu: true,
    options: [
      { name: "USA", id: "USA" },
      { name: "France", id: "FRANCE" },
      { name: "Germany", id: "GERMANY" },
      { name: "Italy", id: "ITALY" },
    ],
  },
  {
    text: "Orientation",
    icon: <FilterAlt />,
    isSubMenu: true,
    options: [
      { name: "Landscape", id: "LANDSCAPE" },
      { name: "Portrait", id: "PORTRAIT" },
    ],
  },
  {
    text: "Height",
    icon: <FilterAlt />,
    isSubMenu: true,
    isRange: true,
  },
  {
    text: "Width",
    icon: <FilterAlt />,
    isSubMenu: true,
    isRange: true,
  },
  {
    text: "Color",
    icon: <FilterAlt />,
    isSubMenu: true,
    isColor: true,
  },
];

export const colorOptions = [
  "#FF0000", // Red
  "#00FF00", // Green
  "#0000FF", // Blue
  "#FFFF00", // Yellow
  "#FFA500", // Orange
  "#800080", // Purple
  "#FFFFFF", // White
  "#000000", // Black
  "#FFC0CB", // Pink
  "#A52A2A", // Brown
];
