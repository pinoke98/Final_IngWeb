import {Router} from 'express'
import {getMap} from '../controllers/Map.controller'

const router = Router()

router.get('/Map', getMap)

export default router