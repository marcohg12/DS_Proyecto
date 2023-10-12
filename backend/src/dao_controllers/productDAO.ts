import Product from "../schemas/productS";

//Obtener un producto por su id
export async function getProduct(id_product: String) {
  return await Product.findOne({ _id: id_product });
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

/*Por aqui deben ir los de editar*/

export async function editProduct(
  id_product: String,
  name: String,
  description: String,
  units: Number,
  photo: String,
  price: Number
) {
  return await Product.updateOne(
    { _id: id_product },
    {
      name: name,
      description: description,
      units: units,
      photo: photo,
      price: price,
    }
  );
}

//Elimina un producto
//Note: Delete one returns an object with deletedCount(number of docs deleted) field
export async function deleteProduct(id_product: String) {
  return await Product.deleteOne({ _id: id_product });
}
