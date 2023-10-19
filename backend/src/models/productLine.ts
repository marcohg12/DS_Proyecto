class ProductLine{

    name: String;
    units: Number;
    price: Number;

    constructor(name:String,units:Number,price:Number){
        this.name = name;
        this.units = units;
        this.price = price;
    }

    getName() : String{
        return this.name;
    }

    getUnits(): Number{
        return this.units;
    }

    getPrice() :Number {
        return this.price;
    }

    setName(new_name:String){
        this.name  = new_name;
    }

    setUnits(new_units:Number){
        this.units = new_units;
    }

    setPrice(new_price:Number){
        this.price = new_price;
    }
}