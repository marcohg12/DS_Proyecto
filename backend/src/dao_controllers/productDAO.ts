import Product from "../schemas/productS";
import Cart from "../schemas/cartS";

// Obtiene un producto por su id
export async function getProduct(productId: String) {
  return await Product.findOne({ _id: productId });
}

// Obtiene todos los productos registrados
export async function getProducts() {
  return await Product.find();
}

// Registra un producto
export async function registerProduct(
  name: String,
  description: String,
  units: Number,
  price: Number
) {
  const product = new Product({
    name: name,
    description: description,
    units: units,
    photo: "TEMPORAL",
    price: price,
  });

  const result = await product.save();

  // Actualizamos el producto con la ruta de la foto en el sistema de archivos
  await Product.updateOne(
    { _id: result._id },
    { photo: "/photos/products/" + result._id + ".png" }
  );
  return result._id;
}

// Actualiza un producto
export async function updateProduct(
  productId: String,
  name: String,
  description: String,
  units: Number,
  price: Number
) {
  return await Product.updateOne(
    { _id: productId },
    {
      name: name,
      description: description,
      units: units,
      price: price,
    }
  );
}

// Elimina un producto
// Nota: también elimina los productos de los carritos en los que se encontrara el producto
export async function deleteProduct(productId: String) {
  // Eliminamos los productos de los carritos
  await Cart.updateMany(
    {},
    {
      $pull: {
        products: {
          productRef: productId,
        },
      },
    }
  );
  return await Product.deleteOne({ _id: productId });
}
