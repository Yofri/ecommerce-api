import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import {mongoose, connection} from './config'
import {user, store, transaction} from './routes'

dotenv.config()
const app = express()
const port = process.env.PORT

app.use(cors())
app.use('/user', user)
app.use('/store', store)
app.use('/transaction', transaction)

connection.on('error', () => console.log('Error connecting to database'))
connection.once('open', () => console.log('Connected to database'))
app.listen(port, () => console.log(`Express listening on port ${port}`))