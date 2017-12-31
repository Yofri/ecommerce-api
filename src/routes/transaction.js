import express from 'express'
import {createTransaction, listTransactions} from '../controllers'
import {isLogin, encode, parser, logger} from '../middlewares'

export default express.Router()
  .post('/', isLogin, encode, parser, logger, createTransaction)
  .get('/', isLogin, logger, listTransactions)