import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Officer Entry', 'Soldier Entry', 'Technical Entry', 'Women Entry', 'Short Service', 'Territorial Army']
  },
  eligibility: {
    type: String,
    required: true
  },
  applyBy: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Career', careerSchema);