import {Router} from 'express'
import {intertNew_Sale} from '../controllers/DM/Insert_Sales.controller.DM'

const  router = Router()

router.post('/insert_sale', intertNew_Sale)

export default router