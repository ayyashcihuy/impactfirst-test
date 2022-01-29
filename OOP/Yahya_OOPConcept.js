class Employee {
  constructor(name, id, department) {
    (this.name = name), (this.id = id), (this.department = department);
  }

  getDetails() {
    return `Hi, my name is ${this.name}, with ID ${this.id}. I'm in the department ${this.department}.`;
  }
}

class Developer extends Employee {
  constructor(name, id, department, backendTool, frontendTool) {
    super(name, id, department);
    this.backendTool = backendTool;
    this.frontendTool = frontendTool;
  }

  getDetail() {
    return `${this.getDetails()} My role is Developer. I'm using ${
      this.backendTool
    } as backend and ${this.frontendTool} as frontend`;
  }
}

class Manager extends Employee {
  constructor(name, id, department, responsibility) {
    super(name, id, department);
    this.responsibility = responsibility;
  }

  getDetail() {
    return `${this.getDetails()} My role is Manager with responsibility ${
      this.responsibility
    }`;
  }

  management() {
    return "Here my management functions: planning, organizing, leading and controlling";
  }
}

class Secretary extends Employee {
  constructor(name, id, department) {
    super(name, id, department);
  }

  getDetail() {
    return `${this.getDetails()} My role is Secretary`;
  }

  printDocument() {
    return "All right, give me 5 minutes and I'll give the document to you as soon as possible.";
  }

  sendDocument() {
    return "All right, I'll give it to you via email";
  }
}

// Data Test

let employee = new Employee("Bambang", 12, "Communication");

let employee4 = new Secretary("Bambang", 12, "Communication");

let employee2 = new Developer(
  "Bambang",
  12,
  "Communication",
  "Node Js",
  "React"
);

let employee3 = new Manager(
  "Bambang",
  12,
  "Communication",
  "Handling Quality Control"
);

// Employee
console.log(employee.getDetails());

// Developer
console.log(employee2.getDetail());

// Manager
console.log(employee3.getDetail());
console.log(employee3.management());

//Secretary
console.log(employee4.getDetail());
console.log(employee4.printDocument());
console.log(employee4.sendDocument());
