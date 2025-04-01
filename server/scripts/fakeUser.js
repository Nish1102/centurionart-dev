const mongoose = require("mongoose");
const User = require("../models/userModel"); // Make sure this path is correct
const { faker } = require("@faker-js/faker");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://developer:gQkuvS4ZPaOyx1jA@cluster0.tugsa.mongodb.net/Centuionart-development?retryWrites=true&w=majority&appName=Cluster0");
    console.log("MongoDB connected...");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

const generateFakeUsers = async () => {
  try {
    const users = [];

    for (let i = 0; i < 1000; i++) {
      users.push({
        name: {
          first: faker.person.firstName(),
          middle: faker.person.middleName(),
          last: faker.person.lastName(),
        },
        googleId: faker.string.uuid(),
        email: faker.internet.email().toLowerCase(),
        password: faker.internet.password(),
        profilePicUrl: faker.image.avatar(),
        phone: faker.phone.number("+91 ##########"),
        secondaryPhone: faker.phone.number("+91 ##########"),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        country: faker.location.country(),
        zip: faker.location.zipCode(),
        isvendor: faker.datatype.boolean(),
        userType: faker.helpers.arrayElement(["artist", "collector"]),
      });
    }

    await User.insertMany(users);
    console.log("✅ 1000 Users inserted successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error inserting users:", err);
  }
};

const start = async () => {
  await connectDB();
  await generateFakeUsers();
};

start();
