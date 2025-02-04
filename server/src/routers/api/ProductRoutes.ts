import express from "express";
import type{ Request, Response} from 'express';
import {Product} from '../../models/index.js';

const router = express.Router();

//Get retrieve all products from db

router.get('/', async (_req: Request, res: Response) => {
try {
    const products = await Product.findAll();
    res.json(products);

}catch (error) {
    console.error('Error fetching products',error);
    res.status(500).json({error:'Server error fetching products'});
}
});

// Get retrieves product by id

router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      return res.json(product);
    } catch (error) {
      console.error('Error fetching product:', error);
      return res.status(500).json({ error: 'Server error fetching product' });
    }
});


//Post create new product
router.post('/', async (req: Request, res: Response) => {
    try {
      const { productName, price, description } = req.body;
      const newProduct = await Product.create({ productName, price, description });
      return res.status(201).json(newProduct);
    } catch (error) {
      console.error('Error creating product:', error);
      return res.status(500).json({ error: 'Server error creating product' });
    }
  });

//Put update existing product by id
  router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { productName, price, description } = req.body;
  
    try {
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      await product.update({ productName, price, description });
      return res.json(product);
    } catch (error) {
      console.error('Error updating product:', error);
      return res.status(500).json({ error: 'Server error updating product' });
    }
  });

  // DELETE product by id
  router.delete('/:id', async (req:Request, res:Response)=> {
    const { id } = req.params;

    try {
      const product =await Product.findByPk(id);
      if(!product){
        return res.status(404).json({error:'Product not found'});
      }
      await product.destroy();
      return res.status(204).send();
    } catch (error) {
      console.error('Error deleting product:', error);
      return res.status(500).json({error:'Server error deleting product'});
    }

    });

    export { router as productRouter };
