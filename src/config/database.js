import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
// mongoose.connect(process.env.MLAB_URI)
mongoose.connect('mongodb://localhost/ecommerce')
mongoose.Promise = global.Promise
const db = mongoose.connection

export {mongoose, db}