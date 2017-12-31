import mongoose from 'mongoose'

module.exports = mongoose.model('transactions', {
  items: [{
    _id: {
      type: mongoose.Schema.ObjectId,
      ref: 'stores',
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }],
  total: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: new Date()
  }
})