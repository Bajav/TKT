// models/User.js
import mongoose from "mongoose";

const flightSearchSchema = new mongoose.Schema(
  {
    origin: { type: String, required: true },
    destination: { type: String, required: true },
    departureDate: { type: String, required: true },
    isOneWay: { type: Boolean, required: true },
    returnDate: { type: String },
  },
  { _id: false }
);

const hotelSearchSchema = new mongoose.Schema(
  {
    locationSearched: { type: String, required: true },
    checkInDate: { type: String, required: true },
    checkOutDate: { type: String },
  },
  { _id: false }
);

const staySearchSchema = new mongoose.Schema(
  {
    locationSearched: { type: String, required: true },
    checkInDate: { type: String, required: true },
    checkOutDate: { type: String },
  },
  { _id: false }
);

const activitySearchSchema = new mongoose.Schema(
  {
    locationSearched: { type: String, required: true },
    checkInDate: { type: String, required: true },
    checkOutDate: { type: String },
  },
  { _id: false }
);

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  session: {
  sessionId: { type: String },
  createdAt: { type: Date, default: Date.now },
},
  recentSearches: {
    flights: [flightSearchSchema],
    hotels: [hotelSearchSchema],
    stays: [staySearchSchema],
    activities: [activitySearchSchema],
  },
});

const User = mongoose.model("User", userSchema);

export default User;
