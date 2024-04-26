import { CartAdmin } from '../CartAdmin';
import  CartDAOStub from './CartDAOStub'
const { ToManyProductsInCart } = require("../exceptions/exceptions");

describe('CartAdmin', () => {
  let cartAdmin: CartAdmin;

  beforeEach(() => {
    cartAdmin = new CartAdmin();
  });

  it('should add product to cart when units are in range (0-5)', async () => {
    const userId = 'user1';
    const productId = 'product1';
    const units = 3;

    // Creamos una instancia de CartDAOStub para utilizar en la prueba
    const cartDAOStub = new CartDAOStub();
    // Simulamos el comportamiento de findProduct y addProduct en el stub
    jest.spyOn(cartDAOStub, 'findProduct').mockResolvedValue(-1);
    jest.spyOn(cartDAOStub, 'addProduct').mockResolvedValue();

    // Utilizamos el stub dentro de la prueba sin pasarlo a CartAdmin
    cartAdmin['cartDAO'] = cartDAOStub;

    // Llamamos a la función addProductToCart con los parámetros deseados
    await cartAdmin.addProductToCart(userId, productId, units);

    // Realizamos las expectativas necesarias
    expect(cartDAOStub.findProduct).toHaveBeenCalledWith(productId, userId);
    expect(cartDAOStub.addProduct).toHaveBeenCalledWith(productId, units, userId);
  });

  // Puedes agregar más pruebas aquí para cubrir otros casos de uso

});
