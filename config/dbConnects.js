const dbConnection = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('✅ Database connected');
    } catch (error) {
      console.error("❌ Failed to connect to database:", error.message);
    }
  }

