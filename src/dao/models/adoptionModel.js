import mongoose from "mongoose";

const adoptionSchema = new mongoose.Schema({
  pet: {
    type: String,
    required: true
  },

  owner: {
    type: String,
    required: true
  },

  adoptedAt: {
    type: Date,
    default: Date.now
  }
});

const Adoption = mongoose.model("Adoption", adoptionSchema);

export default Adoption;