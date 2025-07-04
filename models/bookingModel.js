import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    provider: { type: mongoose.Schema.Types.ObjectId, ref: "Provider" },
    service: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    amount: { type: Number, required: true },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Completes", "Canceled"],
    },
    paymentStatus: {
      type: String,
      enum: ["Pending", "Confirmed", "Completes", "Canceled"],
    },
    paymentPhone: String,
    tranactionId: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Booking", BookingSchema);