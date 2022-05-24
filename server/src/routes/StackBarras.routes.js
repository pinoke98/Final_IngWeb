import {Router} from 'express'
import {getStackBarras} from '../controllers/StackBarras.controller'

const router = Router()

router.get('/StackBarras', getStackBarras)

export default router