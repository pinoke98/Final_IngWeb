import express from 'express'
import config from './config'

import Fact_VentasRoutes from './routes/Fact_Sales.routes'
import Insert_Sales from './routes/Insert_Sales.routes'

const app = express()


//settings
app.set('port', config.port)
app.use(express.json())
app.use(express.urlencoded({extended: false}))



app.use(Fact_VentasRoutes)
app.use(Insert_Sales)

export default app