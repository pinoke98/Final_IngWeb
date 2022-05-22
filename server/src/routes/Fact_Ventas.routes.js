import {Router} from 'express'
import { getFact_Ventas } from '../controllers/DM/Fact_Ventas.controller.DM'

const router = Router()

router.get('/Fact_Ventas', getFact_Ventas)
router.get('/Fact_Venta', getFact_Ventas)


export default router