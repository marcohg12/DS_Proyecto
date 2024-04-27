import { CartAdmin } from '../CartAdmin';
import CartDAOStub from './CartDaoStub'; // Importamos el stub

describe('CartAdmin', () => {
  let cartAdmin: CartAdmin;
  let cartDaoStub: CartDAOStub;

  beforeEach(() => {
    // Se crea una instancia de CartAdmin antes de cada prueba
    cartAdmin = new CartAdmin();

    // Creamos una instancia del CartDAOStub
    cartDaoStub = new CartDAOStub();

    // Sobrescribimos el método getInstance de CartDAO para devolver el stub en su lugar
    jest.spyOn(CartDAOStub.prototype, 'findProduct').mockImplementation(cartDaoStub.findProduct);
    jest.spyOn(CartDAOStub.prototype, 'addProduct').mockImplementation(cartDaoStub.addProduct);
  });

  it('should add product to cart when units are in range (0-5)', async () => {
    const userId = 'user1';
    const productId = 'product1';
    const units = 3;

    // Llamamos al método addProductToCart
    await cartAdmin.addProductToCart(userId, productId, units);

    // Verificamos que el método addProduct fue llamado con los parámetros correctos
    expect(cartDaoStub.addProduct).toHaveBeenCalledWith(productId, units, userId);
  });

  // Otros casos de prueba pueden ser escritos para cubrir más escenarios

});


