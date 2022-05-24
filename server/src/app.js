import express from 'express'
import config from './config'

import PastelRoutes from './routes/Pastel.routes'
import BarrasRoutes from './routes/Barras.routes'
import BarrasDoblesRoutes from './routes/BarrasDobles.routes'
import StackBarrasRoutes from './routes/StackBarras.routes'
import MapRoutes from './routes/Map.routes'

const app = express()


//settings
app.set('port', config.port)

app.use(PastelRoutes)
app.use(BarrasRoutes)
app.use(BarrasDoblesRoutes)
app.use(StackBarrasRoutes)
app.use(MapRoutes)

export default app