import { Router } from "express";
const router = Router();
import mpesaMiddleware from '../middlewares/mpesaMiddleware.js';
import { sendStkPush } from '../controllers/mpesaControllers.js';

router.post('/stk', mpesaMiddleware, sendStkPush)

export default router;