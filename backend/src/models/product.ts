class Product implements Viewable{

    id_product: String;
    name: String;
    description: String;
    units: Number;
    price: Number;
    photo: String;

    constructor(id_product: String,name:String,units:Number,price:Number){
        this.id_product = id_product;
        this.name = name;
        this.units = units;
        this.price = price;
    }

    getID() :  String{
        return this.id_product;
    }

    getName() : String{
        return this.name;
    }

    getDescription() :String{
        return this.description;
    }

    getUnits() : Number{
        return this.units;
    }

    getPrice() : Number{
        return this.price;
    }

    getPhoto() : String{
        return this.photo;
    }

    setId(new_id:String){
        this.id_product = new_id;
    }

    setName(newName: String){
        this.name = newName;
    }

    setDescription(new_desc:String){
        this.description = new_desc;
    }

    setUnits(new_units:Number){
        this.units = new_units;
    }

    setPrice(new_price: Number){
        this.price = new_price;
    }

    setPhoto(new_photo:String){
        this.photo = new_photo;
    }
 }