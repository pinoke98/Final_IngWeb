import {Router} from 'express'
import { getFact_Sales } from '../controllers/DM/Fact_Sales.controller.DM'

const router = Router()

router.get('/Fact_Ventas', getFact_Sales)
router.get('/Fact_Venta', getFact_Sales)


export default router