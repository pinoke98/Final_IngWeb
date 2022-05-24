import express from 'express'
import config from './config'

import Fact_VentasRoutes from './routes/Fact_Sales.routes'
import Insert_Sales from './routes/Insert_Sales.routes'
import PastelRoutes from './routes/Pastel.routes'
import BarrasRoutes from './routes/Barras.routes'
import BarrasDoblesRoutes from './routes/BarrasDobles.routes'
import StackBarrasRoutes from './routes/StackBarras.routes'
import MapRoutes from './routes/Map.routes'

const app = express()


//settings
app.set('port', config.port)
app.use(express.json())
app.use(express.urlencoded({extended: false}))



app.use(Fact_VentasRoutes)
app.use(Insert_Sales)
app.use(PastelRoutes)
app.use(BarrasRoutes)
app.use(BarrasDoblesRoutes)
app.use(StackBarrasRoutes)
app.use(MapRoutes)

export default app