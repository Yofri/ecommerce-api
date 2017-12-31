import express from 'express'
import {createItem, listItems, updateItem, removeItem} from '../controllers'
import {isLogin, isAdmin, encode, logger} from '../middlewares'

export default express.Router()
  .post('/', /* isLogin,  */encode, logger, createItem)
  .get('/', logger, listItems)
  .put('/:id', isLogin, encode, logger, updateItem)
  .delete('/:id', isLogin, logger, removeItem)