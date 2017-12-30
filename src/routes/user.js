import express from 'express'
import {createUser, listUsers, updateUser, removeUser, login} from '../controllers'
import {isLogin, isAdmin, encode, parser, logger} from '../middlewares'

export default express.Router()
  .post('/login', encode, parser, logger, login)
  .post('/register', encode, parser, logger, createUser)
  .get('/', isLogin, isAdmin, logger, listUsers)
  .put('/:id', isLogin, encode, logger, updateUser)
  .delete('/:id', isLogin, logger, removeUser)