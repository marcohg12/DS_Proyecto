var Order = /** @class */ (function () {
    function Order(id_order, clientRef, orderDate, deliveryDate, address, price, photoOfPayment, lineProducts, state) {
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
    Order.prototype.getID = function () {
        return this.id_order;
    };
    Order.prototype.getClientRef = function () {
        return this.clientRef;
    };
    Order.prototype.getOrderDate = function () {
        return this.orderDate;
    };
    Order.prototype.getDeliveryDate = function () {
        return this.deliveryDate;
    };
    Order.prototype.getAddress = function () {
        return this.address;
    };
    Order.prototype.getPrice = function () {
        return this.price;
    };
    Order.prototype.getPhoto = function () {
        return this.photoOfPayment;
    };
    Order.prototype.getLineProducts = function () {
        return this.lineProducts;
    };
    Order.prototype.getState = function () {
        return this.state;
    };
    Order.prototype.setID = function (new_id) {
        this.id_order = new_id;
    };
    Order.prototype.setClient = function (new_client) {
        this.clientRef = new_client;
    };
    Order.prototype.setOrderDate = function (new_order_date) {
        this.orderDate = new_order_date;
    };
    Order.prototype.setDeliveryDate = function (new_delivery_date) {
        this.deliveryDate = new_delivery_date;
    };
    Order.prototype.setAddress = function (new_address) {
        this.address = new_address;
    };
    Order.prototype.setPrice = function (new_price) {
        this.price = new_price;
    };
    Order.prototype.setPhoto = function (new_photo) {
        this.photoOfPayment = new_photo;
    };
    Order.prototype.setLineProducts = function (new_lines) {
        this.lineProducts = new_lines;
    };
    Order.prototype.setState = function (new_state) {
        this.state = new_state;
    };
    return Order;
}());
