import express from 'express'
import config from './config'

import Fact_VentasRoutes from './routes/Fact_Ventas.routes'

const app = express()


//settings
app.set('port', config.port)

app.use(Fact_VentasRoutes)

export default app