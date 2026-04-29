import {orderDB} from "../db/db.js";


// Search Order
const searchOrder = (customerName) => {
    return orderDB.filter((order) => {
        return order.customerName.toLowerCase().includes(customerName);
    });
};


// Return order db
const getOrderDB = () => {
    return orderDB;
};


export {searchOrder, getOrderDB};