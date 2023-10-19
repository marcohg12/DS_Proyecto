class Order{
    id_order: String;
    clientRef: String;
    orderDate: Date;
    deliveryDate: any;
    address: String;
    price: Number;
    photoOfPayment: String
    lineProducts: [ProductLine];
    state: Number;


    constructor(id_order:String,clientRef:String,orderDate:Date,deliveryDate:any,address:String,
        price:Number,photoOfPayment:String,lineProducts: [ProductLine],state:Number){

            this.id_order = id_order;
            this.clientRef = clientRef;
            this.orderDate = orderDate;
            this.deliveryDate = deliveryDate;
            this.address = address;
            this.price = price;
            this.photoOfPayment = photoOfPayment;
            this.lineProducts = lineProducts;
            this.state = state;
    }

    getID() :String{
        return this.id_order;
    }

    getClientRef() : String{
        return this.clientRef;
    }

    getOrderDate() : Date{
        return this.orderDate;
    }

    getDeliveryDate() : any{
        return this.deliveryDate;
    }

    getAddress() : String{
        return this.address;
    }

    getPrice() : Number{
        return this.price;
    }

    getPhoto() : String{
        return this.photoOfPayment;
    }

    getLineProducts() : [ProductLine]{
        return this.lineProducts;
    }

    getState() : Number{
        return this.state;
    }

    setID(new_id:String){
        this.id_order = new_id;
    }

    setClient(new_client:String){
        this.clientRef = new_client;
    }

    setOrderDate(new_order_date: Date){
        this.orderDate = new_order_date;
    }

    setDeliveryDate(new_delivery_date:any){
        this.deliveryDate = new_delivery_date;
    }

    setAddress(new_address:String){
        this.address = new_address;
    }

    setPrice(new_price:Number){
        this.price = new_price;
    }

    setPhoto(new_photo:String){
        this.photoOfPayment = new_photo;
    }

    setLineProducts(new_lines: [ProductLine]){
        this.lineProducts = new_lines;
    }

    setState(new_state: Number){
        this.state = new_state;
    }
      
}