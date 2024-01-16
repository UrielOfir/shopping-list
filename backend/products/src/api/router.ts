import express from 'express';
import { getCategories, getProductsByCategory, getProductById } from './service';

const router = express.Router();

// health check endpoint
router.get('/', (req, res) => {
  res.send('OK');
});

// Endpoint to get all categories
router.get('/category', async (req, res) => {
  try {
    const categories = await getCategories();
    res.json(categories);
  } catch (error) {
    res.status(500).send('Error fetching categories');
  }
});

// Endpoint to get products by category
router.get('/products/category/:categoryId', async (req, res) => {
  try {
    const { categoryId } = req.params;
    const products = await getProductsByCategory(categoryId);
    res.json(products);
  } catch (error) {
    res.status(500).send('Error fetching products for the category');
  }
});

// Endpoint to get a product by ID
router.get('/products/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await getProductById(productId);
    if (product) {
      res.json(product);
    } else {
      res.status(404).send('Product not found');
    }
  } catch (error) {
    res.status(500).send('Error fetching product');
  }
});

export default router;
