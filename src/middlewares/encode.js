import bodyParser from 'body-parser'

const encode = bodyParser.urlencoded({extended: false})
const parser = bodyParser.json()

export {encode, parser}