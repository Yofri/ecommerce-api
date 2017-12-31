import {Transaction} from '../models'

const createTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.create(req.body)
    res.status(200).send(transaction)
  } catch (err) {
    res.status(500).send(err)
  }
}

const listTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().populate('items._id')
    res.status(200).send(transactions)
  } catch (err) {
    res.status(500).send(err)
  }
}

module.exports = {createTransaction, listTransactions}