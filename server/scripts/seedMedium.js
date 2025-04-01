const mongoose = require("mongoose");
const Medium = require("../models/mediumModel"); 
const { mediumsList } = require("../constant/artwork"); 


const saveMediums = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect("mongodb+srv://developer:gQkuvS4ZPaOyx1jA@cluster0.tugsa.mongodb.net/Centuionart-development?retryWrites=true&w=majority&appName=Cluster0");

    // Delete all existing mediums
    await Medium.deleteMany();
    console.log("🗑️ Deleted all existing mediums!");

    // Prepare the mediums data for insertion (using name and id from the mediumsList)
    const mediumDocs = mediumsList.map(medium => ({
      name: medium.name,
      id: medium.id
    }));

    // Insert new mediums into the database
    await Medium.insertMany(mediumDocs);
    console.log(`✅ Inserted ${mediumDocs.length} new mediums.`);

    // Close the connection
    mongoose.connection.close();
    console.log("🎉 Mediums data has been successfully saved!");
  } catch (error) {
    console.error("❌ Error while saving mediums:", error);
    mongoose.connection.close();
  }
};

saveMediums();
