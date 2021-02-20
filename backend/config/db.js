import mongoose from "mongoose";

// async function
const connectDB = async () => {
  try {
    const connexion = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB connected: ${connexion.connection.host}`);
  } catch (error) {
    console.error(`error: ${error.message}`);
    // with one exit with failure
    process.exit(1);
  }
};

export default connectDB;
