import {Router} from 'express'
import { getPastel } from '../controllers/Pastel.controller'

const router = Router()

router.get('/Pastel', getPastel)

export default router