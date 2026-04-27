import {getCustomerById} from "../model/CustomerModel.js";
import {getItemById, getItemByIndex, getItemDB, reduceItemQty} from "../model/ItemModel.js";
import {ItemCardDTO} from "../dto/ItemCardDTO.js";
import {OrderDTO} from "../dto/OrderDTO.js";
import {saveOrder} from "./OrderHistoryController.js";
import {loadItemTbl} from "./ItemController.js";


// Customer search
$('#customerSearchForOrder').on('click', function () {
    let cusId = $('#customerIdLabel').val();

    if (cusId === "") {
        Swal.fire({icon: "error", title: "Invalid Id!", background: "#2c2c2c", color: "#f1f1f1"});

    } else if (!getCustomerById(cusId)) {
        Swal.fire({icon: "error", title: "This Customer Not Found!", background: "#2c2c2c", color: "#f1f1f1"});

    } else {
        let customer = getCustomerById(cusId);

        $('#customerNameLabel').text(customer.name);
        $('#customerMobileLabel').text(customer.mobile);
        $('#customerAddressLabel').text(customer.address);
    }
});


// Items load into menu
$('#dropDownBtn').on('click', function () {
    $('.dropdown-menu').empty();

    let itemDB = getItemDB();
    itemDB.forEach((item) => {
        let newList = `<li class="dropdown-item text-white"> ${item.name} </li>`
        $('.dropdown-menu').append(newList);
    });
});


// Set detail selected item from menu
$('.dropdown-menu').on('click', 'li', function () {
    let selectedItem = getItemByIndex($(this).index());

    $('#itemIdLabel').text(selectedItem.id);
    $('#itemPriceLabel').text(selectedItem.price);
    $('#itemQtyLabel').text(selectedItem.quantity);
});


// Handle add to cart
let amount = 0;
let cartItems = [];

$('#addToCartBtn').on('click', function () {
    let cusId = $('#customerIdLabel').val();
    let itemId = $('#itemIdLabel').text();
    let neededQty = $('#neededQty').val();
    let availableQty = $('#itemQtyLabel').text();
    let unitPrice = $('#itemPriceLabel').text();

    if (cusId === "") {
        Swal.fire({icon: "error", title: "Please Select A Customer!", background: "#2c2c2c", color: "#f1f1f1"});

    } else if (itemId === "-") {
        Swal.fire({icon: "error", title: "Please Select A Item!", background: "#2c2c2c", color: "#f1f1f1"});

    } else if (neededQty === "") {
        Swal.fire({icon: "error", title: "Please Type Needed Qty!", background: "#2c2c2c", color: "#f1f1f1"});

    } else if (+neededQty > +availableQty) {
        Swal.fire({icon: "error", title: "Oops! Exceeds Available Stock.", background: "#2c2c2c", color: "#f1f1f1"});

    } else {
        addItemToCart(cusId, itemId, neededQty, unitPrice);
        clearItemForm();
    }
});


// Add Item Cart Table and Set total
const addItemToCart = (cusId, itemId, neededQty, unitPrice) => {
    let itemName = getItemById(itemId).name;

    updateTotalValueOfOrder((+neededQty * +unitPrice));

    let itemCartDTO = new ItemCardDTO(itemId, itemName, unitPrice, neededQty, (+unitPrice * +neededQty));
    cartItems.push(itemCartDTO);

    loadItemCartTable();
};


// Update total value
const updateTotalValueOfOrder = (addThisValue) => {
    amount += addThisValue;
    $('#total').text(amount.toFixed(2));
};


// Load items cart table
const loadItemCartTable = () => {
    $('#cartTBody').empty();
    cartItems.forEach((item, index) => {
        let newItemRow = `
            <tr> 
                <td>${item.itemName}</td>
                <td>${item.unitPrice}</td>
                <td>${item.quantity}</td> 
                <td>${item.amount}</td> 
                <td>
                    <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">
                        <span class="bi bi-x-lg"></span>
                    </button>
                </td>
            </tr>
        `;

        $('#cartTBody').append(newItemRow);
    });
};


// Cancel item from items cart
window.removeItem = function(index){
    let reduceAmount = cartItems[index].amount;
    updateTotalValueOfOrder(-reduceAmount);

    cartItems.splice(index, 1);
    loadItemCartTable();
}


// Handle place order
$('#placeOrderBtn').on('click', function () {
    let cusId = $('#customerIdLabel').val();

    if ($('#cartTBody').children().length === 0) {
        Swal.fire({icon: "error", title: "Oops! Items Are Not Added To The Cart.", background: "#2c2c2c", color: "#f1f1f1"});

    } else {
        Swal.fire({
            title: "Confirm Order?",
            html:
                `<div style="font-size:16px">
                    Are you sure you want to place this order?<br><br>
                    <b>Total Amount:</b> Rs. ${amount}
                </div>`,

            icon: "question",
            background: "#2c2c2c",
            color: "#f1f1f1",
            showCancelButton: true,
            confirmButtonColor: "#28a745",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Place Order"

        }).then((result) => {
            if (result.isConfirmed) {

                placeOrder(cusId, cartItems);
                let totalValue = amount;
                amount = 0;
                $('#total').text("0.00");

                clearCustomerForm();
                cartItems = [];
                $('#cartTBody').empty();

                loadItemTbl();

                Swal.fire({
                    icon: "success",
                    title: "Order Placed Successfully!",
                    html: `Total Paid: Rs. ${totalValue}`,
                    background: "#2c2c2c",
                    color: "#f1f1f1"
                });
            }
        });
    }
});


// Place order logic
let orderId = 0;
const placeOrder = (cusId, cartItems) => {
    orderId += 1;

    cartItems.forEach((item) => {
        let orderDTO = new OrderDTO(
            orderId,
            cusId,
            item.itemName,
            item.unitPrice,
            item.quantity,
            item.amount,
            new Date().toLocaleDateString()
        );

        saveOrder(orderDTO);
        reduceItemQty(item.itemId, item.quantity);
    });
};


// Clear customer form
const clearCustomerForm = () => {
    $('#customerIdLabel').val("");
    $('#customerNameLabel').text("-");
    $('#customerMobileLabel').text("-");
    $('#customerAddressLabel').text("-");
};


// Clear item form
const clearItemForm = () => {
    $('#itemIdLabel').text("-");
    $('#itemPriceLabel').text("-");
    $('#itemQtyLabel').text("-");
    $('#neededQty').val("");
};