import {customerDB} from "../db/db.js";
import {CustomerDTO} from "../dto/CustomerDTO.js";

// Get customer by id
const getCustomerById = (cusId) => {
    return customerDB.find((item) => item.id === cusId);
};

// Get customer by index
const getCustomerByIndex = (index) => {
    return customerDB[index];
};

// Save customer into DB
const saveCustomer = (cusId, cusName, cusMobile, cusAddress) => {
    let newCustomer = new CustomerDTO(cusId, cusName, cusMobile, cusAddress);
    customerDB.push(newCustomer);
};

const updateCustomer = (cusId, cusName, cusMobile, cusAddress) => {
    let customer = customerDB.find((cus) => cus.id === cusId);

    if (customer) {
        customer.name = cusName;
        customer.mobile = cusMobile;
        customer.address = cusAddress;
    }
};

const deleteCustomer = (cusId) => {
    let customerIndex = customerDB.findIndex((cus) => cus.id === cusId);

    if (customerIndex !== -1) {
        customerDB.splice(customerIndex, 1);
    }
};


// Search Customer
const searchCustomer = (text) => {
    return customerDB.filter((customer) => {
        return customer.name.toLowerCase().includes(text)
    });
};

// Get customer DB
const getCustomerDB = () => {
    return customerDB;
};

export {getCustomerById, getCustomerByIndex, saveCustomer, updateCustomer, deleteCustomer, getCustomerDB, searchCustomer};