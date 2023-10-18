var Publication = /** @class */ (function () {
    function Publication(id_publication, categoryId, date, description, photo, tags) {
        this.id_publication = id_publication;
        this.categoryId = categoryId;
        this.date = date;
        this.description = description;
        this.photo = photo;
        this.tags = tags;
    }
    Publication.prototype.getID = function () {
        return this.id_publication;
    };
    Publication.prototype.getCategoryID = function () {
        return this.categoryId;
    };
    Publication.prototype.getDate = function () {
        return this.date;
    };
    Publication.prototype.getDescription = function () {
        return this.description;
    };
    Publication.prototype.getPhoto = function () {
        return this.photo;
    };
    Publication.prototype.getTags = function () {
        return this.tags;
    };
    Publication.prototype.setID = function (new_id) {
        this.id_publication = new_id;
    };
    Publication.prototype.setCategoryID = function (new_cat) {
        this.categoryId = new_cat;
    };
    Publication.prototype.setDate = function (new_date) {
        this.date = new_date;
    };
    Publication.prototype.setDescription = function (new_desc) {
        this.description = new_desc;
    };
    Publication.prototype.setPhoto = function (new_photo) {
        this.photo = new_photo;
    };
    Publication.prototype.setTags = function (new_tags) {
        this.tags = new_tags;
    };
    return Publication;
}());
