import { Router, Request, Response } from 'express';
import { Cart } from '../../models/cart.js'; // Add cart model
import { CartItem } from '../../models/cartItem.js'; // Add Cartitem model

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  try {
      const carts = await Cart.findAll();
      res.json(carts);
  
  }catch (error) {
      console.error('Error fetching carts',error);
      res.status(500).json({error:'Server error fetching carts'});
  }
  });

router.get('/:userId', async (req: Request, res: Response) => {
const userIdNumber =parseInt(req.params.userId,10);
try {
  const carts = await Cart.findAll({
    where: { userId: userIdNumber },
  });

  return res.json(carts);
} catch (error) {
  console.error('Error fetching user carts',error);
  return res.status(500).json({error:'Server error fetching user carts'});
}
});

router.get('/cartItems', async (_req: Request, res: Response) =>{
  try {
    const cartItems = await CartItem.findAll();
    res.json(cartItems);

}catch (error) {
    console.error('Error fetching cart items',error);
    res.status(500).json({error:'Server error fetching cart items'});
}
});

router.post('/:userId', async (req: Request, res: Response) => {
  const userIdNumber =parseInt(req.params.userId,10);
  const { productName, quantity } = req.body;

  if (!productName || typeof productName !== 'string') {
    return res.status(400).json({ error: 'Invalid or missing productName' });
  }
  if (typeof quantity !== 'number' || quantity <= 0) {
    return res.status(400).json({ error: 'Invalid or missing quantity' });
  }

  try {
    let cart = await Cart.findOne({
      where: { userId: userIdNumber },
      include: [CartItem],
    });

    if (!cart){
        cart =await Cart.create({userId:userIdNumber});
    }

    const existingItem = await CartItem.findOne({
        where: {
          cartId: cart.id,
          productName, 
        },
      });
  
      if (existingItem) {
        // Update quantity
        existingItem.quantity += quantity;
        await existingItem.save();
        return res.json(existingItem);
      } else {
        // Create a new cart item
        const newItem = await CartItem.create({
          cartId: cart.id,
          productName,
          quantity,
        });
        return res.status(201).json(newItem);  
        }
    } catch (error) {
      console.error('Error adding to cart:', error);
      return res.status(500).json({ error: 'Server error adding item to cart' });
    }
  });


// //DELETE Removes a CartItem from the user's cart
router.delete('/:userId/:cartItemId', async (req: Request, res: Response) => {
   const { cartItemId } = req.params;

   try {
     // Verify the cart belongs to the user or that the cart item is in the user’s cart
     const cartItem = await CartItem.findByPk(cartItemId);
     if (!cartItem) {
       return res.status(404).json({ error: 'Cart item not found' });
     }

     await cartItem.destroy();
     return res.status(204).send();
   } catch (error) {
     console.error('Error removing item from cart:', error);
     return res.status(500).json({ error: 'Server error removing item from cart' });
   }
 });

 export {router as cartRouter};
