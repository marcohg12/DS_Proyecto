class Publication implements Viewable{
    id_publication: String;
    categoryId: String;
    date: Date;
    description: String;
    photo: String;
    tags: [String]; //Collection

    constructor(id_publication:String,categoryId:String,date:Date,description:String,
        photo:String,tags:[String]){

        this.id_publication = id_publication;
        this.categoryId = categoryId;
        this.date = date;
        this.description = description;
        this.photo = photo;
        this.tags = tags;
    }

    getID() :String{
        return this.id_publication;
    }

    getCategoryID() : String {
        return this.categoryId;
    }

    getDate() : Date{
        return this.date;
    }

    getDescription() : String{
        return this.description;
    }

    getPhoto() :String{
        return this.photo;
    }

    getTags() : [String]{
        return this.tags;
    }

    setID(new_id:String){
        this.id_publication = new_id;
    }

    setCategoryID(new_cat:String){
        this.categoryId = new_cat;
    }

    setDate(new_date:Date){
        this.date = new_date;
    }

    setDescription(new_desc:String){
        this.description = new_desc;
    }

    setPhoto(new_photo:String){
        this.photo = new_photo;
    }

    setTags(new_tags: [String]){
        this.tags = new_tags;
    }

}