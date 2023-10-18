class User{
    id_user: String;
    name: String;
    email: String;
    phone: String;
    password: String;
    recoverCode: String;
    role: Number

    constructor(name:String,email:String,phone:String,password:String,recoverCode:String,role:Number){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.recoverCode = recoverCode;
        this.role = role;
    }

    getID() :String{
        return this.id_user;
    }

    getName() : String{
        return this.name;
    }

    getEmail() : String{
        return this.email;
    }

    getPhone() :String {
        return this.phone;
    }

    getPassword() :String{
        return this.password;
    }

    getRecoverCode() :String{
        return this.recoverCode;
    }

    getRole() :Number{
        return this.role;
    }

    setID(new_id:String){
        this.id_user = new_id;
    }

    setName(new_name:String){
        this.name = new_name;
    }

    setEmail(new_mail:String){
        this.email = new_mail;
    }

    setPhone(new_phone:String){
        this.phone = new_phone;
    }

    setPassword(new_pass:String){
        this.password = new_pass;
    }

    setRecoverCode(new_code:String){
        this.recoverCode = new_code;
    }

    setRole(new_role:Number){
        this.role = new_role;
    }
}