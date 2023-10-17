class EmailInUse extends Error {
  constructor() {
    super("El correo electrónico ya se encuentra en uso");
    this.name = "EmailInUse";
    Object.setPrototypeOf(this, EmailInUse.prototype);
  }
}

export { EmailInUse };
