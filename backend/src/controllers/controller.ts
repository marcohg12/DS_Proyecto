import { CartAdmin } from "./cartAdmin";
import { UserAdmin } from "./userAdmin";
import { PublicationAdmin } from "./publicationAdmin";
import { ProductAdmin } from "./productAdmin";
import { OrderAdmin } from "./orderAdmin";
import { CategoryAdmin } from "./categoryAdmin";
import { Product } from "../models/product";
import { ViewableFactory } from "../models/viewableFactory";
import { User } from "../models/user";

class Controller {
  private static instance: Controller | null = null;
  private viewableFactory: ViewableFactory = new ViewableFactory();
  private publicationAdmin: PublicationAdmin = new PublicationAdmin();
  private userAdmin: UserAdmin = new UserAdmin();
  private orderAdmin: OrderAdmin = new OrderAdmin();
  private categoryAdmin: CategoryAdmin = new CategoryAdmin();
  private productAdmin: ProductAdmin = new ProductAdmin();
  private cartAdmin: CartAdmin = new CartAdmin();

  private constructor() {}

  public static getInstance(): Controller {
    if (!Controller.instance) {
      Controller.instance = new Controller();
    }
    return Controller.instance;
  }

  public async registerUser(
    name: string,
    email: string,
    phone: string,
    password: string
  ) {
    const user = new User(name, email, phone, password);
    return await this.userAdmin.registerUser(user);
  }

  // Actualiza los datos de un usuario
  public async updateUser(
    userId: string,
    name: string,
    email: string,
    phone: string,
    password: string
  ) {
    const user = new User(name, email, phone, password);
    user.setID(userId);
    await this.userAdmin.updateUser(user);
  }

  // Actualiza la contraseña de un usuario
  public async updatePassword(email: string, password: string) {
    await this.userAdmin.updatePassword(email, password);
  }

  // Actualiza el código de recuperación de contraseña de un usuario
  public async updateRecoverCode(email: string) {
    await this.userAdmin.updateRecoverCode(email);
  }

  // Verifica si existe el usuario con el email del parámetro
  public async userExists(email: string) {
    return await this.userAdmin.userExists(email);
  }

  // Verifica si el código de recuperación ingresado por un usuario es igual al de la BD
  public async compareRecoverCode(email: string, code: string) {
    return await this.userAdmin.compareRecoverCode(email, code);
  }

  // Funciones de carrito ----------------------------------------------------------------

  public async addProductToCart(
    userId: string,
    productId: string,
    units: number
  ) {
    return await this.cartAdmin.addProductToCart(userId, productId, units);
  }

  public async deleteProductFromCart(
    userId: string,
    productId: string,
    units: number
  ) {
    return await this.cartAdmin.deleteProductFromCart(userId, productId, units);
  }

  public async getCart(userId: string) {
    return await this.cartAdmin.getCart(userId);
  }

  public async sendOrder(
    userId: string,
    address: string,
    totalPrice: Number,
    photoPath: string
  ) {
    return await this.cartAdmin.sendOrder(
      userId,
      address,
      totalPrice,
      photoPath
    );
  }

  // Funciones de categorías -------------------------------------------------------------

  public async registerCategory(name: string) {
    return await this.categoryAdmin.registerCategory(name);
  }

  public async updateCategory(categoryId: string, newName: string) {
    return await this.categoryAdmin.editCategory(categoryId, newName);
  }

  public async getCategories() {
    return await this.categoryAdmin.getCategories();
  }

  public async getCategory(categoryId: string) {
    return await this.categoryAdmin.getCategory(categoryId);
  }

  public async getSubCategories(fatherCategory: string) {
    return await this.categoryAdmin.getSubCategories(fatherCategory);
  }

  public async deleteCategory(categoryId: string) {
    return await this.categoryAdmin.deleteCategory(categoryId);
  }

  public async registerSubcategory(name: string, fatherCategory: string) {
    return await this.categoryAdmin.registerSubCategory(name, fatherCategory);
  }

  // Funciones de publicaciones -----------------------------------------------------------

  public async getPublication(publicationId: string) {
    return await this.publicationAdmin.getPublication(publicationId);
  }

  public async getPublications() {
    return await this.publicationAdmin.getPublications();
  }

  public async getPublicationsByCategory(categoryId: string) {
    return await this.publicationAdmin.getPublicationsByCategory(categoryId);
  }

  public async getPublicationsByTags(tags: string[]) {
    return await this.publicationAdmin.getPublicationsByTags(tags);
  }

  public async registerPublication(
    description: string,
    tags: string,
    categoryId: string,
    photoPath: string
  ) {
    const publication = this.viewableFactory.createPublication(
      description,
      tags,
      categoryId,
      photoPath
    );
    return await this.publicationAdmin.registerPublication(publication);
  }

  public async updatePublication(
    publicationId: string,
    description: string,
    tags: string,
    categoryId: string,
    photoPath: string
  ) {
    const publication = this.viewableFactory.createPublication(
      description,
      tags,
      categoryId,
      photoPath,
      publicationId
    );
    return await this.publicationAdmin.updatePublication(publication);
  }

  public async deletePublication(publicationId: string) {
    return await this.publicationAdmin.deletePublication(publicationId);
  }

  // Funciones de productos --------------------------------------------------------------

  public async registerProduct(
    name: string,
    description: string,
    units: number,
    price: number,
    photoPath: string
  ) {
    const product = this.viewableFactory.createProduct(
      name,
      description,
      units,
      price,
      photoPath
    );
    return await this.productAdmin.registerProduct(product);
  }

  public async getProducts() {
    return await this.productAdmin.getProducts();
  }

  public async getProduct(productId: string) {
    return await this.productAdmin.getProduct(productId);
  }

  public async deleteProduct(productId: string) {
    return await this.productAdmin.deleteProduct(productId);
  }

  public async updateProduct(
    productId: string,
    name: string,
    description: string,
    units: number,
    price: number,
    photoPath: string
  ) {
    const product = new Product(
      description,
      photoPath,
      name,
      units,
      price,
      productId
    );
    return await this.productAdmin.updateProduct(product);
  }

  // Funciones de pedidos ----------------------------------------------------------------

  public async getOrders() {
    return await this.orderAdmin.getOrders();
  }

  public async getOrder(orderId: string) {
    return await this.orderAdmin.getOrder(orderId);
  }

  public async getUserOrders(userId: string) {
    return await this.orderAdmin.getUserOrders(userId);
  }

  public async setOrderState(orderId: string, state: number) {
    return await this.orderAdmin.setOrderState(orderId, state);
  }

  public async confirmOrder(orderId: string) {
    return await this.orderAdmin.confirmOrder(orderId);
  }
}

export { Controller };
