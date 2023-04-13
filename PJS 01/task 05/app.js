class Employee {
  constructor(name, salary, designation) {
    this.name = name;
    this.salary = salary;
    this.designation = designation;
    if (designation == "manager") {
      this.bonus = 20;
    } else if (designation == "developer") {
      this.bonus = 10;
    } 
  }
  calculateBonus() {
    this.total = (this.salary * this.bonus) / 100;
    console.log(`${this.total} bonus on RS ${this.salary}`);
  }
}

class Manager extends Employee {
  hire() {
    console.log(`Manager is Hiring Someone`);
  }
}
class Developer extends Employee {
  writeCode() {
    console.log(`Developer is writing code`);
  }
}
class SeniorManager extends Manager {
  constructor(salary) {
    super(salary);
    this.salary = salary;
    this.bonus = 30;
  }

}

const employee1 = new Employee("hasan", 5000, "developer");
employee1.calculateBonus();

// example of polymorphism
const seniorManager1 = new SeniorManager(10000);
seniorManager1.calculateBonus();
