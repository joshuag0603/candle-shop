import { cartRouter } from './CartRoutes.js';
import { productRouter } from './ProductRoutes.js';
import { userRouter } from './UserRoutes.js';
import express from 'express';

const router = express.Router();

router.use('/carts', cartRouter);
router.use('/products', productRouter);
router.use('/users', userRouter);

export default router;

