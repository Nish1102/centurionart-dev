const mongoose = require("mongoose");
const Theme = require("../"); 

// MongoDB connection URL (Change if needed)
const MONGO_URI = "mongodb+srv://developer:gQkuvS4ZPaOyx1jA@cluster0.tugsa.mongodb.net/Centuionart-development?retryWrites=true&w=majority&appName=Cluster0"; 

const themes = [
  "Nature & Wildlife", "Fantasy & Mythology", "Love & Romance", "Space & Universe", 
  "Urban & City Life", "Historical Events", "Cultural & Heritage", "Mystical & Esoteric", 
  "Dreams & Imagination", "Abstract Concepts", "Dark & Gothic", "Light & Joyful", 
  "War & Conflict", "Spiritual & Religious", "Science & Futurism", "Music & Dance", 
  "Sports & Action", "Seasons & Weather", "Portraits & People", "Animals & Pets", 
  "Meditative & Zen", "Chaos & Disorder", "Minimalist & Simple", "Vibrant & Colorful", 
  "Black & White", "Melancholic & Emotional", "Fantasy Landscapes", "Underwater & Marine Life", 
  "Surreal & Bizarre", "Symbolic & Hidden Meanings", "Rebellion & Protest", "Cyberpunk & Tech"
];

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB...");

    for (let theme of themes) {
      const exists = await Theme.findOne({ name: theme });
      if (!exists) {
        await new Theme({ name: theme }).save();
        console.log(`Saved: ${theme}`);
      } else {
        console.log(`Already exists: ${theme}`);
      }
    }

    console.log("All themes processed.");
    mongoose.disconnect();
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });
