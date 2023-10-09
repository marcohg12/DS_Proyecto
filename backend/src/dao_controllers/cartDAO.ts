import Cart, { CartT } from "../schemas/cartS";

//Obtiene Carrito 
export async function getCart(idUser: String) {
    return await Cart.findOne({ user: idUser });
}

// Agrega un producto al carrito 
export async function addProduct(idProduct: string, units: Number, idUser: string){
    const cart = new Cart({
        client: idUser,
        productRef: {idProduct, units}
    })
    return await cart.save();
}

// Elimina un producto del carrito 
export async function deleteProduct(idProduct: string, units: Number, idUser: string){
    return await Cart.deleteOne({client:idProduct, productRef:{units, idUser}});
}

// Obtiene los productos del carrito 
export async function getProductsCart(idUser: String) {
  const cart: CartT | null = await Cart.findOne({ client: idUser });
  if (cart == null) {
    return null;
  }
  return {products: cart.products};
}

// Obtiene el toString de los productos del carrito
export async function getProductsToString(idUser: String) {
    const cart: CartT | null = await Cart.findOne({ client: idUser });
  if (cart == null) {
    return null;
  } 
  const productsString = cart.products.toString();
  return {productsString};
}

// Obtiene el precio del carrito FALTA
export async function getPriceCart(idUser: String) {
    return await Cart.find({ client: idUser });
}

// Compra el carrito FALTA
export async function buyCart(idUser: String) {
    return await Cart.find({ client: idUser });
}