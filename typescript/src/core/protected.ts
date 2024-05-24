class User {
  protected _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }
}

class Admin extends User {
  set name(n: string) {
    this._name = n;
  }
}
const user = new User("Isuru");
// user.name = "azeaze"; // Cannot assign to 'name' because it is a read-only property.

const admin = new Admin("Robin");
admin.name = "azeaze";
