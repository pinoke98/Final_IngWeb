import {Router} from 'express'
import {getBarrasDobles} from '../controllers/BarrasDobles.controller'

const router = Router()

router.get('/BarrasDobles', getBarrasDobles)

export default router