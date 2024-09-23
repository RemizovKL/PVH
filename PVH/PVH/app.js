import 'dotenv/config'
import express from 'express'
import methodOverride from 'method-override'
import mongoose from 'mongoose'
import morgan from 'morgan'
import { createPath, createErrorPath } from './helpers/createPath.js'
import { router as catalogRouter } from './routs/catalog-routes.js'

const app = express()
const PORT = 3000

app.set('view engine', 'ejs')

/*mongoose
    .connect(process.env.MONGO_URL)
    .then(res => console.log('Connected to PVH MONGO_DB'))
    .catch((err) => console.log(err))*/

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`connected to port ${PORT}, we are online`)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use(express.static('styles'))

app.use(express.urlencoded({ extends: false }))

app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    const title = 'Home Page'
    res.send({name: 'Kirill', text: 'Hello world'})
})

app.get('/about-us', (req, res) => {

})

app.get('/contacts', (req, res) => {

})

app.use(catalogRouter)

app.use((req, res) => {
    //������ 404 (��������� �� �������)
})
// ���� ������ �������� ��������� ������ ����� ��������� � ��� �� � ��� ���������

