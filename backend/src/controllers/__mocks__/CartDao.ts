import cartS from "../../schemas/cartS";

export class CartDAO {
    public async getCart(idUser: string) {
      return {
        _id: 'mockedCartId',
        products: [
          { _id: 'mockedProductId1', name: 'MockedProduct1', price: 10, photo: 'mockedPhoto1', units: 2 },
          { _id: 'mockedProductId2', name: 'MockedProduct2', price: 15, photo: 'mockedPhoto2', units: 1 }
        ]
      };
    }

    findProduct(idProduct: String, idUser: String) {
        return 1
    }

    updateUnits(idProduct: String, units: Number, idUser: String) {
        return 2
    }

    addProduct(idProduct: string, units: Number, idUser: string){
        return 2
    }

    deleteProduct(idProduct: string, idUser: string) {
        return 2
    }

    deleteAll(idUser: String) {
        return 1
    }

    registerOrder(
        client: string,
        orderDate: Date,
        address: string,
        priceWithDelivery: Number,
        lineProducts: { id: string; name: string; units: number; price: number; }[],
        state: Number
      ) {
        return 1
    }
  }