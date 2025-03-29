const mongoose = require("mongoose");
const Medium = require("../models/mediumModel"); 

const mediums = [
  "Acrylic", "Bricks", "Cement", "Ceramics", "Chalk", "Charcoal", "Collage",
  "Colored Pencil", "Cotton", "Earth", "Embroidery", "Enamel", "Engraving",
  "Epoxy", "Felt", "Gilding", "Gold leaf", "Gouache", "Graffiti", "Graphite",
  "India Ink", "Ink", "Lacquer", "Latex", "Leather", "Lithography",
  "Marble powder", "Objects", "Oil", "Oil Pastel", "Organic material", "Pastel",
  "Pearl", "Pen", "Pencil", "Pigments", "Plaster", "Pyrofusion",
  "Reclaimed objects", "Relief Printing", "Resin", "Sand", "Screen",
  "Screen Printing", "Silver leaf", "Spray Paint", "Staining", "Tape", "Tar",
  "Tempera", "Vinyl", "Wax", "Watercolor", "Wool", "Zinc"
];

const saveMediums = async () => {
  try {
    await mongoose.connect("mongodb+srv://developer:gQkuvS4ZPaOyx1jA@cluster0.tugsa.mongodb.net/Centuionart-development?retryWrites=true&w=majority&appName=Cluster0");

    await Medium.deleteMany();

    const mediumDocs = mediums.map(name => ({ name }));
    await Medium.insertMany(mediumDocs);

    mongoose.connection.close();
  } catch (error) {
    console.error("Error:", error);
    mongoose.connection.close();
  }
};

saveMediums();
