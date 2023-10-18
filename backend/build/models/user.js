var User = /** @class */ (function () {
    function User(name, email, phone, password, recoverCode, role) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.recoverCode = recoverCode;
        this.role = role;
    }
    User.prototype.getID = function () {
        return this.id_user;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.getPhone = function () {
        return this.phone;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    User.prototype.getRecoverCode = function () {
        return this.recoverCode;
    };
    User.prototype.getRole = function () {
        return this.role;
    };
    User.prototype.setID = function (new_id) {
        this.id_user = new_id;
    };
    User.prototype.setName = function (new_name) {
        this.name = new_name;
    };
    User.prototype.setEmail = function (new_mail) {
        this.email = new_mail;
    };
    User.prototype.setPhone = function (new_phone) {
        this.phone = new_phone;
    };
    User.prototype.setPassword = function (new_pass) {
        this.password = new_pass;
    };
    User.prototype.setRecoverCode = function (new_code) {
        this.recoverCode = new_code;
    };
    User.prototype.setRole = function (new_role) {
        this.role = new_role;
    };
    return User;
}());
