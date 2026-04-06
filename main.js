// Define the array
let shoppingItems = [];

// Fetch your elements from your HTML code
const name = document.getElementById("itemName");    
const price = document.getElementById("itemPrice");
const addButton = document.querySelector("addButton");
const displayList = document.getElementById("displayList");


// Create a function to add your items
function addItem(name, price) {
    const name = document.getElementById("itemName").value;
    const price = document.getElementById("itemPrice").value;

    // Create an object to store each product with its price
    const item = {
        itemName: name,
        itemPrice: price,
        isPurchased: false, 
    };

    // Add your object into your array
    shoppingItems.push(item);

    // Clear out your input fields
    itemName.value = "";
    itemPrice.value = "";
    
    // Check for validity of your inputs
    if (isNaN(price) && name === "" ) {
        return;
    }

    displayItems();
}

// Create an event listener to add items to the list
addButton.addEventListener("click", () => {
    addItem();
});


// Create a new function to display your items in your display list
function displayItems() {
    // Clear out your old display
    displayList.innerHTML = "";

    // Create a card that'll display your items after addition
    shoppingItems.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h4>${item.name}</h4>
            <p>${item.price}</p>
            <label><input type="checkbox" id="purchase">${item.isPurchased}</label>
        `;

        // Create an event listener for marking your item as complete
        card.querySelector("purchase").addEventListener("click", () => {
            item.isPurchased = !item.isPurchased;
            displayItems();
        });

        displayList.appendChild(card);
    });
}


// Add a clear list button
const clearButton = document.createElement("button");
clearButton.classList.add("clearButton");

clearButton.innerHTML = `<button type="submit" id="clearButton">Clear list</button>`;

// Create an event listener to clear your list
clearButton.addEventListener("click", () => {
    shoppingItems = [];
    displayItems();
});


// Add a total button
const totalButton = document.createElement("button");
totalButton.classList.add("totalButton");

totalButton.innerHTML = `<button type="submit" id="totalButton">Total</button>`;

// Create an event listener to calculate the total price of all the items in the list
totalButton.addEventListener("click", () => {
    let total = shoppingItems.reduce((total, price) => total + price);
    alert(`Your total price is Ksh ${total}`);
});
