const mongoose = require('mongoose');

const ProviderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    service: { type: String, required: true },
    location: { type: String, required: true },
    phone: { type: String, required: true },
    rate: { type: Number, required: true },
    availability: [String],
    rating: { type: Number, default: 0 },
    totalRatings: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const Provider = mongoose.model("Provider", ProviderSchema);

const dbConnection = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://derrickngari03:N49KEowvgFNJ8D6y@cluster0.wv7pxs1.mongodb.net/bookingBuddy?retryWrites=true&w=majority&appName=Cluster0'
    );
    console.log('✅ Database connected');
  } catch (error) {
    console.error("❌ Failed to connect to database:", error.message);
  }
};

const addDummyProviders = async () => {
  const providers = [
    {
      name: "Sarah Mwangi",
      service: "Plumber",
      location: "Umoja",
      phone: "0712345678",
      rate: 450,
      availability: ["10:00 AM - 12:00 PM", "2:00 PM - 4:00 PM"],
      rating: 4.5,
      totalRatings: 12,
      isActive: true
    },
    {
      name: "Peter Otieno",
      service: "Plumber",
      location: "Umoja",
      phone: "0709876543",
      rate: 500,
      availability: ["11:00 AM - 1:00 PM", "3:00 PM - 5:00 PM"],
      rating: 4.2,
      totalRatings: 8,
      isActive: true
    },
    {
      name: "Faith Wanjiku",
      service: "Electrician",
      location: "Kasarani",
      phone: "0723456789",
      rate: 600,
      availability: ["9:00 AM - 11:00 AM", "1:00 PM - 3:00 PM"],
      rating: 4.8,
      totalRatings: 15,
      isActive: true
    },
    {
      name: "Brian Omondi",
      service: "Cleaner",
      location: "Roysambu",
      phone: "0711122233",
      rate: 300,
      availability: ["8:00 AM - 10:00 AM", "4:00 PM - 6:00 PM"],
      rating: 4.6,
      totalRatings: 10,
      isActive: true
    },
    {
      name: "Janet Achieng",
      service: "Carpenter",
      location: "Donholm",
      phone: "0733344455",
      rate: 700,
      availability: ["12:00 PM - 2:00 PM", "3:00 PM - 5:00 PM"],
      rating: 4.9,
      totalRatings: 9,
      isActive: true
    },
    {
      name: "David Maina",
      service: "Electrician",
      location: "Kahawa",
      phone: "0700111222",
      rate: 550,
      availability: ["9:00 AM - 11:00 AM", "2:00 PM - 4:00 PM"],
      rating: 4.3,
      totalRatings: 11,
      isActive: true
    }
  ];
  

  try {
    await Provider.insertMany(providers);
    console.log("✅ Dummy providers inserted successfully!");
  } catch (error) {
    console.error("❌ Failed to insert providers:", error.message);
  } finally {
    mongoose.connection.close(); // Close DB connection after insert
  }
};

// Run everything
(async () => {
  await dbConnection();
  await addDummyProviders();
})();
