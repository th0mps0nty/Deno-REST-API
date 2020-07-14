import { Router } from 'https://deno.land/x/oak/mod.ts';
import {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from './controllers/products.ts';

const router = new Router();

router
  .get('/app/v1/products', getProducts)
  .get('/app/v1/products/:id', getProduct)
  .post('/app/v1/products', addProduct)
  .put('/app/v1/product/:id', updateProduct)
  .delete('/app/v1/products/:id', deleteProduct);

export default router;
