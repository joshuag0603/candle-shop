import { Router, Request, Response } from 'express';
import { Cart } from '../../models/cart'; // Add cart model
import { CartItem } from '../../models/cartItem'; // Add Cartitem model
import { Product } from '../../models/products'; //add product model

const router = Router();

// GET /api/cart/:userId Retrieves the cart for a user.
router.get('/:userId', async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    let cart = await Cart.findOne({
      where: { userId },
      include: [CartItem],
    });

    if (!cart) {
      cart = await Cart.create({ userId });
    }

    const cartWithProducts = await Cart.findByPk(cart.id, {
      include: [{
        model: CartItem,
        include: [Product],
      }],
    });

    res.json(cartWithProducts);
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({ error: 'Server error fetching cart' });
  }
});

//POST /api/cart/:userId Adds a product to the user's cart or updates quantity
router.post('/:userId', async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { productId, quantity = 1 } = req.body;

  try {
    // Find or create the cart for this user
    const [cart] = await Cart.findOrCreate({ where: { userId } });

    // Check if the product already exists in the cart
    const existingItem = await CartItem.findOne({
      where: { cartId: cart.id, productId },
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
        productId,
        quantity,
      });
      return res.status(201).json(newItem);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).json({ error: 'Server error adding item to cart' });
  }
});

//DELETE /api/cart/:userId/:cartItemId Removes a CartItem from the user's cart
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
