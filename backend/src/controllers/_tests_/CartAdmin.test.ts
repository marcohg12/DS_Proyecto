import { CartAdmin } from '../CartAdmin';
import { CartDAO } from '../../daos/CartDAO';
import { ToManyProductsInCart } from '../../exceptions/exceptions';

// Mock the fs module
jest.mock('fs');

// Create a mock implementation for CartDAO
jest.mock('../../daos/CartDAO', () => {
  return {
    CartDAO: jest.fn().mockImplementation(() => ({
      findProduct: jest.fn(),
      addProduct: jest.fn(),
      updateUnits: jest.fn(),
      deleteProduct: jest.fn(),
      getCart: jest.fn(),
      registerOrder: jest.fn(),
      deleteAll: jest.fn(),
    })),
  };
});

describe('CartAdmin', () => {
  let cartAdmin: CartAdmin;
  let cartDAO: CartDAO;
  
  beforeEach(() => {
    cartDAO = new CartDAO();
    cartAdmin = new CartAdmin();
  });

  describe('addProductToCart', () => {
    it('should add product to cart if units are less than or equal to 5', async () => {
      cartDAO.findProduct.mockResolvedValue(-1);
      await cartAdmin.addProductToCart('userId', 'productId', 3);
      expect(cartDAO.addProduct).toHaveBeenCalledWith('productId', 3, 'userId');
    });

    it('should throw exception if units exceed 5', async () => {
      cartDAO.findProduct.mockResolvedValue(2); // Assuming there are already 2 units in cart
      await expect(cartAdmin.addProductToCart('userId', 'productId', 4)).rejects.toThrow(ToManyProductsInCart);
    });

    // Add more test cases as needed
  });

  describe('deleteProductFromCart', () => {
    // Write test cases for deleteProductFromCart method
  });

  describe('getCart', () => {
    // Write test cases for getCart method
  });

  describe('sendOrder', () => {
    // Write test cases for sendOrder method
  });
});


