class CartDAOStub {
    // Métodos utilizados en CartAdmin
    async findProduct(productId: string, userId: string): Promise<number> {
      // Simulamos que el producto no está en el carrito
      return -1;
    }
  
    async addProduct(productId: string, units: number, userId: string): Promise<void> {
      // Simulamos la adición de un producto al carrito
      return Promise.resolve();
    }
  
    async updateUnits(productId: string, units: number, userId: string): Promise<void> {
      // Simulamos la actualización de unidades de un producto en el carrito
      return Promise.resolve();
    }
  }
  