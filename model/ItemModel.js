import {itemDB} from "../db/db.js";
import {ItemDTO} from "../dto/ItemDTO.js";

// Get item by id
const getItemById = (itemId) => {
    return itemDB.find((item) => item.id === itemId);
};

// Get item by index
const getItemByIndex = (index) => {
    return itemDB[index];
};

// Save item into DB
const saveItem = (itemId, itemName, price, quantity) => {
    let newItem = new ItemDTO(itemId, itemName, price, quantity);
    itemDB.push(newItem);
};

// Update item
const updateItem = (itemId, itemName, price, quantity) => {
    let item = itemDB.find((item) => item.id === itemId);

    if (item) {
        item.name = itemName;
        item.price = price;
        item.quantity = quantity;
    }
};

// Delete item
const deleteItem = (itemId) => {
    let itemIndex = itemDB.findIndex((item) => item.id === itemId);

    if (itemIndex !== -1) {
        itemDB.splice(itemIndex, 1);
    }
};

// Search item
const searchItem = (text) => {
    return itemDB.filter((item) => {
        return item.name.toLowerCase().includes(text)
    });
};

// Get item DB
const getItemDB = () => {
    return itemDB;
};

// Reduce item Qty after ordered
const reduceItemQty = (itemId, orderedQuantity) => {
    let orderedItem = itemDB.find((item) => item.id === itemId);
    orderedItem.quantity = orderedItem.quantity - orderedQuantity;
};

export {getItemById, getItemByIndex, saveItem, updateItem, deleteItem, getItemDB, searchItem, reduceItemQty};