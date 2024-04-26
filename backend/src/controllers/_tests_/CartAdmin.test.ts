import { CartAdmin } from '../controllers/CartAdmin';
import { CartDAOStub }  from './CartDaoStub';
const { ToManyProductsInCart } = require("../exceptions/exceptions");

describe('CartAdmin', () => {
  let cartAdmin: CartAdmin;

  beforeEach(() => {
    cartAdmin = new CartAdmin(new CartDAOStub());
  });

  it('should reject too low product number inputs', async () => {
    const userId = 'user1';
    const productId = 'product1';
    const units = -1; // Unidades negativas

    await expect(cartAdmin.addProductToCart(userId, productId, units)).rejects.toThrowError();
  });

  it('should reject too high product number inputs', async () => {
    const userId = 'user1';
    const productId = 'product1';
    const units = 10; // Más de 5 unidades

    await expect(cartAdmin.addProductToCart(userId, productId, units)).rejects.toThrow(ToManyProductsInCart);
  });

  it('should reject invalid product number inputs', async () => {
    const userId = 'user1';
    const productId = 'product1';
    const units = 'Cinco'; // Unidades no numéricas

    await expect(cartAdmin.addProductToCart(userId, productId, units)).rejects.toThrowError();
  });

  it('should add product to cart when units are in range (0-5)', async () => {
    const userId = 'user1';
    const productId = 'product1';
    const units = 3;

    await cartAdmin.addProductToCart(userId, productId, units);

  });

  // Otros casos de prueba pueden ser escritos para cubrir más escenarios

});
