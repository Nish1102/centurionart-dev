const mongoose = require("mongoose");
const Style = require("../models/styleModel"); 

// MongoDB connection URL (Change if needed)
const MONGO_URI = "mongodb+srv://developer:gQkuvS4ZPaOyx1jA@cluster0.tugsa.mongodb.net/Centuionart-development?retryWrites=true&w=majority&appName=Cluster0"; 

const styles = [
  "Aboriginal", "Abstract", "Comics", "Cubism", "Expressionism",
  "Fauvism", "Figurative", "Fine Art", "Futuristic", "Geometric",
  "Impressionism", "Metaphysical", "Minimalism", "Naïve", "Oriental",
  "Other", "Outsider", "Pop Art", "Primitivism", "Realism",
  "Semi-abstract", "Surrealism", "Symbolic", "Vintage"
];

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB...");

    for (let style of styles) {
      const exists = await Style.findOne({ name: style });
      if (!exists) {
        await new Style({ name: style }).save();
        console.log(`Saved: ${style}`);
      } else {
        console.log(`Already exists: ${style}`);
      }
    }

    console.log("All styles processed.");
    mongoose.disconnect();
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });
