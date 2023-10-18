class Category{
    id_category: String;
    name: String;
    fatherCategory: String;
    subCategories: [Category];

    constructor(id_category:String,name:String,fatherCategory:String,subCategories:[Category]){
        this.id_category = id_category;
        this.name = name;
        this.fatherCategory = fatherCategory;
        this.subCategories = subCategories;
    }

    getID() : String{
        return this.id_category;
    }

    getName() : String {
        return this.name;
    }

    getFatherCategory() : String{
        return this.fatherCategory;
    }

    getSubCategories() : [Category]{
        return this.subCategories;
    }

    setId(new_id:String){
        this.id_category = new_id;
    }

    setName(new_name:String){
        this.name = new_name;
    }

    setFatherCategory(new_father_cat:String){
        this.fatherCategory = new_father_cat;
    }

    setSubcategories(new_subs:[Category]){
        this.subCategories = new_subs;
    }
}