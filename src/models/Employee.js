class Employee {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.status = "free";
  }

  assignCall() {
    this.status = "busy";
  }

  release() {
    this.status = "free";
  }

  isFree() {
    return this.status === "free";
  }
}

class Junior extends Employee {}
class Senior extends Employee {}
class Manager extends Employee {}
class Director extends Employee {}

export { Junior, Senior, Manager, Director };
