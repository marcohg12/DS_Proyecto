import { CartAdmin } from "../CartAdmin";
import CartDAOStub from "./CartDaoStub"; // Importamos el stub

describe("CartAdmin", () => {
  let cartAdmin: CartAdmin;
  let cartDaoStub: CartDAOStub;

  beforeEach(() => {
    // Se crea una instancia de CartAdmin antes de cada prueba
    cartDaoStub = new CartDAOStub();
    cartAdmin = new CartAdmin(cartDaoStub);
  });

  it("should add product to cart when units are in range (0-5)", async () => {
    const userId = "user1";
    const productId = "product1";
    const units = 3;

    cartDaoStub.setFindProductValue(1);
    // Llamamos al método addProductToCart
    const result = await cartAdmin.addProductToCart(userId, productId, units);

    // Verificamos que el método addProduct fue llamado con los parámetros correctos
    expect(result).toBe(4);
  });

  // Otros casos de prueba pueden ser escritos para cubrir más escenarios
});
