import express from 'express'
import {createItem, listItems, updateItem, removeItem} from '../controllers'
import {isLogin, isAdmin, encode, logger} from '../middlewares'

export default express.Router()
  .post('/', isLogin, isAdmin, encode, logger, createItem)
  .get('/', logger, listItems)
  .put('/:id', isLogin, isAdmin, encode, logger, updateItem)
  .delete('/:id', isLogin, isAdmin, logger, removeItem)