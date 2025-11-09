import mongoose from "mongoose";

const { Schema } = mongoose;

const LinkSchema = new Schema({
  originalURL: {
    type: String,
    required: true,
    unique: true
  },
  customText: {
    type: String,
    unique: true,
    sparse: true,
  },
  clicks: {
    type: Number,
    default: 0,
  },
  }, 
  { timestamps: true} 
);

// Check if the model is already defined, otherwise define it
export default mongoose.models.LinkDataBase || mongoose.model('LinkDataBase', LinkSchema);
