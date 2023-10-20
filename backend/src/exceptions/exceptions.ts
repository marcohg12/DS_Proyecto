class EmailInUse extends Error {
  constructor() {
    super("El correo electrónico ya se encuentra en uso");
    this.name = "EmailInUse";
    Object.setPrototypeOf(this, EmailInUse.prototype);
  }
}

class ProductNotInStock extends Error {
  constructor(productName: String) {
    super("No hay suficientes unidades del producto");
    this.name = "ProductNotInStock";
    Object.setPrototypeOf(this, ProductNotInStock.prototype);
  }
}

class ProductDoesNotExists extends Error {
  constructor(productId: String) {
    super("No existe el producto en el inventario con el Id: " + productId);
    this.name = "ProductDoesNotExists";
    Object.setPrototypeOf(this, ProductDoesNotExists.prototype);
  }
}

export { EmailInUse, ProductNotInStock,ProductDoesNotExists };
