import { Router, Request, Response } from 'express';
import { Cart } from '../../models/cart.js'; // Add cart model
import { CartItem } from '../../models/cartItem.js'; // Add Cartitem model
import { Product } from '../../models/products.js'; //add product model

const router = Router();

// GET /api/cart/:userId Retrieves the cart for a user.
router.get('/:userId', async (req: Request, res: Response) => {
  const userIdNumber =parseInt(req.params.userId,10);

  try {
    let cart = await Cart.findOne({
      where: { userId: userIdNumber },
      include: [CartItem],
    });

    if (!cart){
        cart =await Cart.create({userId:userIdNumber});
    }


    const cartWithProducts = await Cart.findByPk(cart.id, {
      include: [{
        model: CartItem,
        include: [Product],
      }],
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
        productname,
        quantity,
      });
      return res.status(201).json(newItem);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).json({ error: 'Server error adding item to cart' });
  }
});

// //DELETE /api/cart/:userId/:cartItemId Removes a CartItem from the user's cart
router.delete('/:userId/:cartItemId', async (req: Request, res: Response) => {
   const { userId, cartItemId } = req.params;

   try {
     // Verify the cart belongs to the user or that the cart item is in the user’s cart
     const cartItem = await CartItem.findByPk(cartItemId);
     if (!cartItem) {
       return res.status(404).json({ error: 'Cart item not found' });
     }

     await cartItem.destroy();
     res.status(204).send();
   } catch (error) {
     console.error('Error removing item from cart:', error);
     res.status(500).json({ error: 'Server error removing item from cart' });
   }
 });

 export default router;
