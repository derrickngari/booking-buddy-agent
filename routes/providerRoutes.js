const mongoose = require('mongoose')
const Providers = require('../models/providerModel');

const dbConnection = async () => {
    try {
        await mongoose.connect('mongodb+srv://derrickngari03:N49KEowvgFNJ8D6y@cluster0.wv7pxs1.mongodb.net/bookingBuddy?retryWrites=true&w=majority&appName=Cluster0')
        console.log('Database connected')
    } catch (error) {
        console.log("Failed to connect to database", error.message);
    }

}

const addProviders = async(req, res) =>{
    try {
        const provider = await Providers.create({
            name: "John Mutisya",
            service: "Plumber",
            location: "Lanet",
            phone:"0712334455",
            rate: 500,
            availability: ["10AM-12PM"],
        });
        console.log("Provider added successfully");
    } catch (errr){
        console.log("Failed to add provider", errr.message);
    }
}

dbConnection()
addProviders()