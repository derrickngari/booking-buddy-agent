import mongoose  from 'mongoose';

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

export default Provider = mongoose.model("Provider", ProviderSchema);
