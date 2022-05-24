import {Router} from 'express'
import { insertNew_Date } from '../controllers/DM/Insert_Dates.controller.DM'

const  router = Router()

router.post('/insert_date', insertNew_Date)

export default router