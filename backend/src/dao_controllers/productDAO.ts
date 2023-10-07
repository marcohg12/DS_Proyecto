import Product from '../schemas/productS'


//Obtener un producto por su id
export async function getProduct(id_product:String){
    return await Product.findOne({_id:id_product});
}

//Obtener todos los productos
export async function getProducts() {
    return await Product.find();
}


//Registrar un producto
export async function registerProduct (name:String, description:String, units:Number,photo:String){

    const product = new Product({
        name: name,
        description:description,
        units: units,
        photo: photo
    })

    return await product.save();
 }

 /*Por aqui deben ir los de editar*/

 

 //Elimina un producto
 //Note: Delete one returns an object with deletedCount(number of docs deleted) field
 export async function deleteProduct(id_product:String) {
    return await Product.deleteOne({_id: id_product})
 }



