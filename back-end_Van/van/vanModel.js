const mongoose = require('mongoose');

const vanSchema = new mongoose.Schema({
  identifier: { type: String, required: true },
  type: { type: String, enum: ['small', 'classic', 'large','jumbo'],default: 'small',required: true },
  capacity: { type: Number,enum:[300, 500, 700,1000],default: 300, required: true },
  model: { type: String, required: true },
  dimensions: {
    length: { type: Number,enum:[2.00, 2.50, 3.00,4.00],default: 2.00 },
    width: { type: Number,enum:[1.25, 1.70, 1.70,2.00],default: 1.25  },
    height: { type: Number,enum:[1.55, 1.65, 1.70,2.10],default: 1.55  }
  },
  location: { type: String }, 
  basePrice: { type: Number,enum:[30,60, 80,100] ,default: 30 },
  warehouseman: { type: Number, enum: [0, 1, 2], default: 0 }
});

module.exports = mongoose.model('Van', vanSchema);
