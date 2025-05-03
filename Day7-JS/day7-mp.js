// 1. Employee Management System 


function Employee(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
  
  //Add method using prototype to increase salary
  Employee.prototype.increaseSalary = function(amount) {
    this.salary += amount;
  };
  
  // Array to store employee objects
  const employees = [];
  
  // Function to add an employee
  function addEmployee(name, position, salary) {
    const emp = new Employee(name, position, salary);
    employees.push(emp);
    console.log(`✅ ${name} added successfully.`);
  }
  
  // Function to display all employees
  function displayEmployees() {
    console.log("\n📋 Employee List:");
    employees.forEach((emp, index) => {
      console.log(`${index + 1}. ${emp.name} - ${emp.position} - ₹${emp.salary}`);
    });
  }
  
  //Function to increase salary
  function raiseSalary(index, amount) {
    if (employees[index]) {
      employees[index].increaseSalary(amount);
      console.log(`💰 Salary of ${employees[index].name} increased by ₹${amount}`);
    } else {
      console.log("❌ Employee not found.");
    }
  }
  

  addEmployee("Rajeshwari", "Developer", 25000);
  addEmployee("Arun", "Designer", 22000);
  displayEmployees();
  
  raiseSalary(0, 3000);
  displayEmployees();
  







//   2. Library Management System (Using Constructor)

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  
  //Array to store books
  const library = [];
  
  //add a book
  function addBook(title, author, year) {
    const book = new Book(title, author, year);
    library.push(book);
    console.log(`✅ "${title}" added to the library.`);
  }
  
  //display all books
  function displayBooks() {
    console.log("\n📚 Library Books:");
    if (library.length === 0) {
      console.log("No books found.");
    } else {
      library.forEach((book, index) => {
        console.log(`${index + 1}. "${book.title}" by ${book.author} (${book.year})`);
      });
    }
  }
  
  //search books by title
  function searchBook(title) {
    console.log(`\n🔍 Searching for: "${title}"`);
    const results = library.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    if (results.length === 0) {
      console.log("❌ No books found.");
    } else {
      results.forEach(book => {
        console.log(`✔ Found: "${book.title}" by ${book.author} (${book.year})`);
      });
    }
  }
  
  addBook("The Alchemist", "Paulo Coelho", 1988);
  addBook("Wings of Fire", "A.P.J Abdul Kalam", 1999);
  addBook("You Can Win", "Shiv Khera", 2000);
  
  displayBooks();
  searchBook("fire");
  