// JS66. Create an array of 5 student names.


const studentNames = ["Raji", "Priya", "Anand", "Kumar", "Divya"];
console.log(studentNames);

// JS67. Add a new student name to the array using push(). 
studentNames.push("Suresh");
console.log(studentNames);

// JS68. Remove the last student using pop().
studentNames.push("Priya");
console.log(studentNames);

// JS69: Use map() to convert all names to uppercase
const upperCaseNames = studentNames.map(name => name.toUpperCase());
console.log(upperCaseNames);


// JS70: Use filter() to get students whose names start with "A"
const namesStartingWithA = studentNames.filter(name => name[0] === 'A');
console.log(namesStartingWithA);


// JS71: Use forEach() to print each student name
studentNames.forEach(name => console.log(name));

// JS72. Create an object for a book with properties (title, author, price).
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 299
  };
  
console.log(book);

//   JS73. Use Object.keys() to get all book properties.
const books = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 299
  };
  
const keys = Object.keys(books);
console.log(keys);
  
//   JS74. Use Object.values() to get all book values. 
const values = Object.values(books);
console.log(values)

// JS75. Add a new property genre to the book object. 
books.genre = "Classic Fiction";
console.log(books);

// JS76. Use delete to remove price from the book.
delete books.price;
console.log(books);


// JS77. Merge a publisher object into the book object.
const publisher = {
    name: "Scribner",
    year: 1925
  };
  
Object.assign(books, publisher);
console.log(books);


// JS78. Convert the book object into an array of key-value pairs using 
// Object.entries().

const entries = Object.entries(books);
console.log(entries);