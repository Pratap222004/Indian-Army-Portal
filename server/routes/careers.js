import express from 'express';
import Career from '../models/Career.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Get all careers
router.get('/', async (req, res) => {
  try {
    const careers = await Career.find().sort({ applyBy: 1 });
    res.json(careers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get career by ID
router.get('/:id', async (req, res) => {
  try {
    const career = await Career.findById(req.params.id);
    if (!career) {
      return res.status(404).json({ message: 'Career opportunity not found' });
    }
    res.json(career);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Protected routes
router.post('/', auth, async (req, res) => {
  const career = new Career(req.body);
  try {
    const newCareer = await career.save();
    res.status(201).json(newCareer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch('/:id', auth, async (req, res) => {
  try {
    const career = await Career.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(career);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    await Career.findByIdAndDelete(req.params.id);
    res.json({ message: 'Career opportunity deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;