import Product from "../schemas/productS";

//Obtener un producto por su id
export async function getProduct(productId: String) {
  return await Product.findOne({ _id: productId });
}

//Obtener todos los productos
export async function getProducts() {
  return await Product.find();
}

//Registrar un producto
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
  await Product.updateOne(
    { _id: result._id },
    { photo: "/photos/products/" + result._id + ".png" }
  );
  return result._id;
}

//Actualizar un producto
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

//Elimina un producto
//Note: Delete one returns an object with deletedCount(number of docs deleted) field
export async function deleteProduct(productId: String) {
  return await Product.deleteOne({ _id: productId });
}
