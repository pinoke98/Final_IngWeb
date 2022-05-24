import {Router} from 'express'
import {getBarras} from '../controllers/Barras.controller'

const router = Router()

router.get('/Barras', getBarras)

export default router