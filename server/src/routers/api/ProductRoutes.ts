// import {Router, Request, Response} from 'express';
// import {Product} from '../../models/products';

// const router =Router();

// //Get /api/products *retrieves all products from db

// router.get('/', async (req: Request, res: Response) => {
// try {
//     const products = await Product.findAll();
//     res.json (products);
// }
// catch (error) {
//     console.error('Error fetching products',error);
//     res.status(500).json({error:'Server error fetching products'});
// }
// });

// // Get api/products/:id *retrieves product by id

// router.get('/:id', async (req: Request, res: Response) => {
//     const { id } = req.params;
//     try {
//       const product = await Product.findByPk(id);
//       if (!product) {
//         return res.status(404).json({ error: 'Product not found' });
//       }
//       res.json(product);
//     } catch (error) {
//       console.error('Error fetching product:', error);
//       res.status(500).json({ error: 'Server error fetching product' });
//     }
// });


// //Post api/products *create new product
// router.post('/', async (req: Request, res: Response) => {
//     try {
//       const { productname, price, description } = req.body;
//       const newProduct = await Product.create({ productname, price, description });
//       res.status(201).json(newProduct);
//     } catch (error) {
//       console.error('Error creating product:', error);
//       res.status(500).json({ error: 'Server error creating product' });
//     }
//   });

// //Put /api/products/:id *update existing product by id
//   router.put('/:id', async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const { productname, price, description } = req.body;
  
//     try {
//       const product = await Product.findByPk(id);
//       if (!product) {
//         return res.status(404).json({ error: 'Product not found' });
//       }
//       await product.update({ productname, price, description });
//       res.json(product);
//     } catch (error) {
//       console.error('Error updating product:', error);
//       res.status(500).json({ error: 'Server error updating product' });
//     }
//   });

//   // DELETE /api/products/:id *delete product by id
//   router.delete('/:id', async (req:Request, res:Response)=> {
//     const { id } = req.params;

//     try {
//       const product =await Product.findByPk(id);
//       if(!product){
//         return res.status(404).json({error:'Product not found'});
//       }
//       await product.destroy();
//       res.status(204).send();
//     } catch (error) {
//       console.error('Error deleting product:', error);
//       res.status(500).json({error:'Server error deleting product'});
//     }

//     });

//     export default router;
