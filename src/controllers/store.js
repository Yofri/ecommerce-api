import {Store} from '../models'

const createItem = async (req, res) => {
  try {
    const item = await Store.create(req.body)
    res.status(200).send(item)
  } catch (err) {
    res.status(500).send(err)
  }
}

const listItems = async (req, res) => {
  try {
    const items = await Store.find()
    res.status(200).send(items)
  } catch (err) {
    res.status(500).send(err)
  }
}

const updateItem = async (req, res) => {
  try {
    const item = await Store.update({_id: req.params.id}, req.body)
    res.status(200).send(item)
  } catch (err) {
    res.status(500).send(err)
  }
}

const removeItem = async (req, res) => {
  try {
    const item = await Store.remove({_id: req.params.id})
    res.status(200).send(item)
  } catch (err) {
    res.status(500).send(err)
  }
}

export {createItem, listItems, updateItem, removeItem}