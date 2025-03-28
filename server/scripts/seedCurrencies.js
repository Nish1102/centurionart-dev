const mongoose = require("mongoose");
const Currency = require("../models/currencyModel"); 
const currencies = require("../constant/currency");

console.log(5, ' currencies constants -> ', currencies);

const seedCurrencies = async () => {
  try {
    await mongoose.connect("mongodb+srv://developer:gQkuvS4ZPaOyx1jA@cluster0.tugsa.mongodb.net/Centuionart-development?retryWrites=true&w=majority&appName=Cluster0");

    console.log("✅ Database Connected!");

    await Currency.deleteMany(); 
    console.log("🗑️ Old Currencies Removed!");

    await Currency.insertMany(currencies);
    console.log("✅ All Currencies Added!");

    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Error Seeding Currencies:", error);
    mongoose.connection.close();
  }
};

seedCurrencies();
