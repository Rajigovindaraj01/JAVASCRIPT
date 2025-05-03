//Constructors:

// JS79. Create a Person constructor with properties name and age, and create 
// multiple instances.

// Constructor function
function person(name, age) {
    this.name = name;
    this.age = age;
  } 
  //multiple instances
  const person1 = new person("Alice", 25);
  const person2 = new person("Bob", 30);
  const person3 = new person("Charlie", 22);

  console.log(person1); 
  console.log(person2); 
  console.log(person3);

//   JS80. Add a method to the Person constructor that returns a greeting message
function persson(name,age){
    this.name = name;
    this.age=age;
}
persson.prototype.greet= function(){
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

const person11 = new persson("Hari",23);
const person22 = new persson("Raji",23);
const person33 = new persson("Raaj",23);

console.log(person11.greet());
console.log(person22.greet());
console.log(person33.greet());


// JS81. Create a Car constructor with brand, model, and year, and display the details.
function Car(brand,model,year){
    this.brand = brand;
    this.model =model;
    this.year = year;


this.displayDetails= function(){
    return `Brand:${this.brand},Model:${this.model},Year:${this.year}`
}
}

const car1 = new Car("Toyota","camry",2020);
const car2 = new Car("Hyundai","i20",2024);

console.log(car1.displayDetails());
console.log(car2.displayDetails());


// JS82. Modify the Car constructor to include a method that calculates the car's age.
function cars(brand,model,year,){
    this.brand=brand;
    this.model=model;
    this.year=year;


    this.displaysDetail=function(){
        return `Brand:${this,brand},Model:${this.model},Year:${this.year}`
    }

    this.getcarAge= function(currentYear){
        return currentYear-this.year;
    };
}

const carr1 = new cars("Honda","Civic",2020);
const carr2 = new cars("Maruti","Swift",2018);

console.log(carr1.displaysDetail());
console.log("Age:",carr1.getcarAge(2025))

console.log(carr2.displaysDetail());
console.log("Age:",carr2.getcarAge(2025))


// Use this inside a constructor function to refer to an object and modify properties dynamically
function Student(name, marks) {
    this.name = name;
    this.marks = marks;
    this.status = marks >= 35 ? "Pass" : "Fail";
  
    this.update = function(newMarks) {
      this.marks = newMarks;
      this.status = newMarks >= 35 ? "Pass" : "Fail";
    };
  }

  const s1 = new Student("Raji", 90);
  console.log(s1.name);
  console.log(s1.status);  
  
  // Update
  s1.update(80);
  console.log(s1.marks);
  console.log(s1.status);
  

//   JS84. Create a BankAccount constructor with accountNumber, balance, and methods to deposit and withdraw money.  
function BankAccount(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    //deposit method
    this.deposit = function(amount) {
      this.balance += amount;
      console.log(`₹${amount} deposited. New balance: ₹${this.balance}`);
};
  //withdraw
this.withdraw = function(amount) {
      if (amount > this.balance) {
        console.log("Insufficient balance");
      } else {
        this.balance -= amount;
        console.log(`₹${amount} withdrawn. New balance: ₹${this.balance}`);
      }
};
  

this.showDetails = function() {
      console.log(`Account Number: ${this.accountNumber}, Balance: ₹${this.balance}`);
    };
}
const myAccount = new BankAccount("1234567890", 1000);

myAccount.showDetails();        
myAccount.deposit(500);        
myAccount.withdraw(200);        
myAccount.withdraw(2000); 


// JS85. Implement default values in a constructor function when no parameters are provided.
function Books(title = "Untitled", author = "Unknown", price = 500) {
    this.title = title;
    this.author = author;
    this.price = price;
  
    this.getBookDetails = function() {
      console.log(`Title: ${this.title}, Author: ${this.author}, Price: ₹${this.price}`);
    };
  }
  
  const books1 = new Books("JavaScript Basics", "Rajeshwari", 700);
  books1.getBookDetails();  
 

  const book2 = new Books();
  book2.getBookDetails();  



//JS86. Create a Student constructor with an array property grades and a method to calculate the average grade.
function Students(name, grades) {
    this.name = name;
    this.grades = grades;
  
    this.avg = function() {
      let sum = 0;
      for (let i = 0; i < this.grades.length; i++) {
        sum += this.grades[i];
      }
      return sum / this.grades.length;
    };
  }
  
  const student1 = new Students("Raji", [80, 90, 70]);
  console.log("Average:", student1.avg());
  
//   JS87. Use prototype to add a new method to a constructor function dynamically

function Animal(name) {
    this.name = name;
  }
  
Animal.prototype.speak = function() {
    return `${this.name} makes a sound.`;
};
  

const a1 = new Animal("Dog");
console.log(a1.speak()); 
  
// JS88. Create a Book constructor function with title, author, and price, and filter books based on price.

function Book(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
}
  
const book11 = new Book("JS Basics", "Rajeshwari", 300);
const book22 = new Book("HTML Guide", "Alice", 150);
const book33 = new Book("React Mastery", "Bob", 500);
const book44 = new Book("CSS Design", "Sara", 180);
  

const books = [book11, book22, book33, book44];
  

const expensiveBooks = books.filter(function(book) {
   return book.price > 200;
});
  

console.log("Books with price > ₹200:");
expensiveBooks.forEach(function(book) {
console.log(`${book.title} by ${book.author} - ₹${book.price}`);
});


// JS89. Implement inheritance in constructor functions where a Manager extends an Employee constructor.
// Parent constructor
function Employee(name) {
    this.name = name;
  }
  
  // Method for Employee
  Employee.prototype.sayHello = function() {
    return `Hello, I am ${this.name}`;
  };
  
  // Child constructor
  function Manager(name, department) {
    Employee.call(this, name); // Inherit name
    this.department = department;
  }
  
  // Inherit method from Employee
  Manager.prototype = Object.create(Employee.prototype);
  Manager.prototype.constructor = Manager;
  
  // Manager-specific method
  Manager.prototype.work = function() {
    return `${this.name} works in ${this.department}`;
  };
  
  // Create object
  const m1 = new Manager("Rajeshwari", "IT");
  
  // Use inherited and custom methods
  console.log(m1.sayHello());  // Hello, I am Rajeshwari
  console.log(m1.work());      // Rajeshwari works in IT


//   JS90. Create a ShoppingCart constructor with an array of products and methods to add, remove, and calculate total price.
// Constructor function
function ShoppingCart() {
    this.products = []; // array to store products
  }
  
  // Add product method
  ShoppingCart.prototype.addProduct = function(product) {
    this.products.push(product);
  };
  
  // Remove product method
  ShoppingCart.prototype.removeProduct = function(productName) {
    this.products = this.products.filter(p => p.name !== productName);
  };
  
  // total price method
  ShoppingCart.prototype.getTotal = function() {
    return this.products.reduce((total, product) => total + product.price, 0);
  };
  
  //product objects
  const product1 = { name: "Milk", price: 50 };
  const product2 = { name: "Bread", price: 30 };
  const product3 = { name: "Butter", price: 80 };
  
  // Create cart
  const cart = new ShoppingCart();
  
  // Add products
  cart.addProduct(product1);
  cart.addProduct(product2);
  cart.addProduct(product3);
  
  // Remove one product
  cart.removeProduct("Bread");
  
  // Calculate total price
  console.log("Total Price: ₹" + cart.getTotal()); // Total Price: ₹130
  
  
  
// JS91. Use new keyword inside a function to create an instance of another constructor function.
// Person constructor
function Person(name) {
    this.name = name;
    this.sayHello = function() {
      return `Hello, I'm ${this.name}`;
    };
  }
  
  // Function that creates a new Person using `new`
  function createPerson(name) {
    return new Person(name); // using new inside function
  }
  
  // Creating instances
  const p1 = createPerson("Rajeshwari");
  const p2 = createPerson("Alice");
  
  // Output
  console.log(p1.sayHello()); // Hello, I'm Rajeshwari
  console.log(p2.sayHello()); // Hello, I'm Alice
  

