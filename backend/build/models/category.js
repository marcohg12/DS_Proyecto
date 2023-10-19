var Category = /** @class */ (function () {
    function Category(id_category, name, fatherCategory, subCategories) {
        this.id_category = id_category;
        this.name = name;
        this.fatherCategory = fatherCategory;
        this.subCategories = subCategories;
    }
    Category.prototype.getID = function () {
        return this.id_category;
    };
    Category.prototype.getName = function () {
        return this.name;
    };
    Category.prototype.getFatherCategory = function () {
        return this.fatherCategory;
    };
    Category.prototype.getSubCategories = function () {
        return this.subCategories;
    };
    Category.prototype.setId = function (new_id) {
        this.id_category = new_id;
    };
    Category.prototype.setName = function (new_name) {
        this.name = new_name;
    };
    Category.prototype.setFatherCategory = function (new_father_cat) {
        this.fatherCategory = new_father_cat;
    };
    Category.prototype.setSubcategories = function (new_subs) {
        this.subCategories = new_subs;
    };
    return Category;
}());
