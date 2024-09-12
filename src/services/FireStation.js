import { Junior, Senior, Manager, Director } from "../models/Employee.js";

class FireStation {
  constructor(employeesData) {
    this.juniors = [];
    this.seniors = [];
    this.managers = [];
    this.directors = [];
    this.loadEmployees(employeesData);
  }

  loadEmployees(employeesData) {
    employeesData.forEach((empData) => {
      if (empData.level === "junior") {
        this.juniors.push(new Junior(empData.id, empData.name));
      } else if (empData.level === "senior") {
        this.seniors.push(new Senior(empData.id, empData.name));
      } else if (empData.level === "manager") {
        this.managers.push(new Manager(empData.id, empData.name));
      } else if (empData.level === "director") {
        this.directors.push(new Director(empData.id, empData.name));
      } else {
        throw new Error("Unknown employee level");
      }
    });
  }

  dispatchCall(call) {
    let employee;
    if (call.priority === "low") {
      employee =
        this.findFreeEmployee(this.juniors) ||
        this.findFreeEmployee(this.seniors) ||
        this.findFreeEmployee(this.managers);
    } else {
      employee =
        this.findFreeEmployee(this.managers) ||
        this.findFreeEmployee(this.directors);
    }

    if (employee) {
      employee.assignCall();
      call.allocatedEmployee = employee;
      console.log(
        `Call from ${call.callerId} assigned to ${employee.name} (${employee.constructor.name})`
      );
    } else {
      console.log(
        `All employees are busy. Call from ${call.callerId} is on hold.`
      );
    }
  }

  findFreeEmployee(employeeList) {
    return employeeList.find((employee) => employee.isFree()) || null;
  }

  finishCall(employee) {
    employee.release();
    console.log(`${employee.name} (${employee.constructor.name}) is now free.`);
  }
}

export default FireStation;
