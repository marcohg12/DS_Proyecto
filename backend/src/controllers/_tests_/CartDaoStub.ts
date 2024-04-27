class CartDAOStub {
  async findProduct(productId: string, userId: string): Promise<number> {
    return 1; // Simulamos que el producto no está en el carrito
  }

  async addProduct(productId: string, units: number, userId: string): Promise<void> {
    // Simulamos la adición de un producto al carrito
    return Promise.resolve();
  }

  async updateUnits(productId: string, units: number, userId: string): Promise<void> {
    // Simulamos la actualización de unidades de un producto en el carrito
    return Promise.resolve();
  }

  // Stub para el método getCart
  async getCart(userId: string): Promise<any> {
    return Promise.resolve([]);
  }

  // Stub para el método deleteProduct
  async deleteProduct(productId: string, userId: string): Promise<void> {
    return Promise.resolve();
  }

  // Stub para el método deleteAll
  async deleteAll(userId: string): Promise<void> {
    return Promise.resolve();
  }

  // Stub para el método registerOrder
  async registerOrder(userId: string, date: Date, address: string, totalPrice: Number, lineProducts: any, state: Number): Promise<void> {
    return Promise.resolve();
  }
}

export default CartDAOStub;
