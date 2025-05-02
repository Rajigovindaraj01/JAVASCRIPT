// 1. Movie Booking System


const movieList = ["Leo", "Jailer", "Vikram", "RRR", "Pushpa"];
const userMovie = prompt("Enter the movie you want to book:");

if (movieList.includes(userMovie)) {
  console.log("Ticket booked");
} else {
  console.log("Movie not available");
}





// 2.Product Inventory System

// 1. Inventory Storage
let inventory = [
  { name: "Apple", quantity: 50 },
  { name: "Banana", quantity: 30 },
  { name: "Orange", quantity: 20 }
];

// 2. Add Product Function
function addProduct(productName, quantity) {
  if (quantity <= 0) {
    console.log("Quantity should be greater than 0.");
    return;
  }

  const existingProduct = inventory.find(p => p.name === productName);
  if (existingProduct) {
    existingProduct.quantity += quantity;
    console.log(`${quantity} ${productName}(s) added. New quantity: ${existingProduct.quantity}`);
  } else {
    inventory.push({ name: productName, quantity });
    console.log(`${productName} added to inventory with quantity: ${quantity}`);
  }
}

// 3. Remove Product Function 
function removeProduct(productName) {
  const productToRemove = inventory.find(p => p.name === productName);
  
  if (productToRemove) {
    // Remove the product using `splice` based on the index of the found product
    inventory.splice(inventory.indexOf(productToRemove), 1);
    console.log(`${productName} removed from inventory.`);
  } else {
    console.log(`${productName} not found in inventory.`);
  }
}

// 4. Display Updated Inventory
function displayInventory() {
  console.log("Current Inventory:");
  if (inventory.length === 0) {
    console.log("No products in inventory.");
  } else {
    inventory.forEach(product => {
      console.log(`${product.name}: ${product.quantity}`);
    });
  }
}

// Sample operations
addProduct("Mango", 25);      // Add new product
addProduct("Apple", 10);      // Update existing product quantity
removeProduct("Banana");      // Remove product
displayInventory();           // Show final inventory
