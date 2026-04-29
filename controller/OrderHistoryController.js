import {searchOrder} from "../model/OrderHistoryModel.js";
import {getOrderDB} from "../model/OrderHistoryModel.js";


// Save order
const saveOrder = () => {
    $('#OrderHistoryTBody').empty();

    getOrderDB().forEach((order) => {
        let newRow = `
        <tr> 
            <td>${order.id}</td>
            <td>${order.customerName}</td> 
            <td>${order.itemName}</td> 
            <td>${order.unitPrice}</td> 
            <td>${order.quantity}</td> 
            <td>${order.total}</td> 
            <td>${order.date}</td> 
        </tr>`;

        $('#OrderHistoryTBody').append(newRow);
    });
};


// Handle search order
$('#orderSearchBtn').on('click', function () {
    let customerName = $('#orderSearchBar').val().toLowerCase();

    let searchedOrders = searchOrder(customerName);
    loadTblSearchedOrders(searchedOrders);
});


// Load table: searched orders
const loadTblSearchedOrders = (searchedOrders) => {
    $('#OrderHistoryTBody').empty();

    searchedOrders.forEach((order) => {
        let newRow = `
        <tr> 
            <td>${order.id}</td>
            <td>${order.customerName}</td> 
            <td>${order.itemName}</td> 
            <td>${order.unitPrice}</td> 
            <td>${order.quantity}</td> 
            <td>${order.total}</td> 
            <td>${order.date}</td> 
        </tr>`;

        $('#OrderHistoryTBody').append(newRow);
    });
};


// Handle order history table refresh
$('#orderRefreshBtn').on('click', function () {
    $('#orderSearchBar').val("");
    $('#OrderHistoryTBody').empty();

    getOrderDB().forEach((order) => {
        let newRow = `
        <tr> 
            <td>${order.id}</td>
            <td>${order.customerName}</td> 
            <td>${order.itemName}</td> 
            <td>${order.unitPrice}</td> 
            <td>${order.quantity}</td> 
            <td>${order.total}</td> 
            <td>${order.date}</td> 
        </tr>`;

        $('#OrderHistoryTBody').append(newRow);
    });

});

export {saveOrder};