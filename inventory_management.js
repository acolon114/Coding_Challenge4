//Task 1: Create an Inventory Array of Product Objects

const inventory = [ 

    { Name: 'Laptop', Price: 1200, Quantity: 10, lowStockLevel: 3 }, 
    { Name: 'Smartphone', Price: 800, Quantity: 5, lowStockLevel: 2 },
    { Name: 'Tablet', Price: 400, Quantity: 7, lowStockLevel: 1 },
    { Name: 'Headphones', Price: 100, Quantity: 15, lowStockLevel: 5 },
    { Name: 'Smartwatch', Price: 250, Quantity: 3, lowStockLevel: 1 }
     ];

 //Task 2: Create a Function to Display Product Details

function displayProductDetails(product) { 
    
    console.log("Name: " + product['Name']);
    console.log ("Price: " + product['Price']);
    console.log ("Quantity: " + product['Quantity']);
    
    (product['Quantity'] > product['lowStockLevel']) ? console.log("In Stock") : console.log("Low Stock");
}

// Task 3: Create a Function to Update Product Stock After Sales

function updateStock(product, unitSold) {
    
    if (unitSold <= product['Quantity']) {
        product['Quantity'] -= unitSold;
    }
    if (product['Quantity'] > product['lowStockLevel']) {
        console.log("In Stock");
    } else if (product['Quantity'] < product['lowStockLevel'] && product['Quantity'] > 0) {
        console.log("Low Stock");
    } else if (product['Quantity'] === 0) {
        console.log("Out of Stock");
    }
}

// Task 4: Create a Function to Check Low Stock Products

function checkLowStock(inventoryArray) {

    for (let i = 0; i < inventoryArray.length; i++) {
        if (inventoryArray[i]['Quantity'] < inventoryArray[i]['lowStockLevel']) {
            console.log(inventoryArray[i]['Name'] + " is Low Stock");
        }
    }
}

// Task 5: Create a Function to Calculate Total Inventory Value

function calculateInventoryValue(inventoryArray) {
    let sum = 0;
    for (let i = 0; i < inventoryArray.length; i++) {
      
        if (inventoryArray[i]['Quantity'] > 0) {
            sum += (inventoryArray[i]['Price'] * inventoryArray[i]['Quantity']);
        }
    }
    return sum;
}

// Task 6: Create a Function to Process a Sale

function processSale(inventoryArray, productName, unitSold) {
    
    let selectedProduct = inventoryArray.find(function(element) {
        return element.Name === productName;
    });

    if (selectedProduct) { 
        updateStock(selectedProduct, unitSold);
    } else { 
        console.log("Selected Product is not in Inventory");
    }
}

processSale(inventory, 'Laptop', 5); // Output: In Stock
processSale(inventory, 'Fireworks', 20); // Output: Selected Product is not in Inventory