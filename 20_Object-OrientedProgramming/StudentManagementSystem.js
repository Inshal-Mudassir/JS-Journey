// Student Class

class student {
    constructor(id, name, age, department) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.department = department;
    }
    display() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Age: ${this.age}, Department: ${this.department}`);
    }
}

// Student Manager Class

class StudentManager {
    constructor() {
        this.students = [];
    }
    // Add Student
    
}