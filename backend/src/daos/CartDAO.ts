import Cart, { CartT } from "../schemas/cartS";

class CartDAO {
  constructor() {}

  //Obtiene Carrito
  public async getCart(idUser: string) {
    const result = await Cart.aggregate([
      {
        $match: { client: idUser },
      },
      {
        $unwind: "$products", // Unwind the array
      },
      {
        $lookup: {
          from: "products",
          localField: "products.productRef",
          foreignField: "_id",
          as: "productDetails",
        },
      },
      {
        $unwind: "$productDetails", // Unwind the result array
      },
      {
        $group: {
          _id: "$_id",
          products: {
            $push: {
              _id: "$productDetails._id",
              name: "$productDetails.name",
              price: "$productDetails.price",
              photo: "$productDetails.photo",
              units: "$products.units",
            },
          },
        },
      },
    ]);
    return result;
  }

  // Agrega un producto al carrito
  public async addProduct(idProduct: string, units: number, idUser: string) {
    const cart = new Cart({
      client: idUser,
      productRef: { idProduct, units },
    });
    return await cart.save();
  }

  // Elimina un producto del carrito
  public async deleteProduct(idProduct: string, units: number, idUser: string) {
    return await Cart.deleteOne({
      client: idProduct,
      productRef: { units, idUser },
    });
  }
}

export { CartDAO };
