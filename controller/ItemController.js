import {getItemById, getItemByIndex, saveItem, updateItem, deleteItem, getItemDB, searchItem} from "../model/ItemModel.js";


//--------------- Item Save ---------------
$('#itemSave').on('click', function () {
    let itemId = $('#itemIdField').val();
    let itemName = $('#itemNameField').val();
    let price = $('#itemPriceField').val();
    let quantity = $('#itemQtyField').val();

    if (itemId === "") {
        Swal.fire({icon: "error", title: "Invalid Id!", background: "#2c2c2c", color: "#f1f1f1"});

    } else if (getItemById(itemId)) {
        Swal.fire({icon: "error", title: "This Item Already Exist", background: "#2c2c2c", color: "#f1f1f1"});

    } else if (itemName === "") {
        Swal.fire({icon: "error", title: "Invalid Item Name!", background: "#2c2c2c", color: "#f1f1f1"});

    } else if (price === "") {
        Swal.fire({icon: "error", title: "Invalid Item Price!", background: "#2c2c2c", color: "#f1f1f1"});

    } else if (quantity === "") {
        Swal.fire({icon: "error", title: "Invalid Quantity!", background: "#2c2c2c", color: "#f1f1f1"});

    } else {
        saveItem(itemId, itemName, price, quantity);

        Swal.fire({icon: "success", title: "Item Saved Successfully!", background: "#2c2c2c", color: "#f1f1f1"});
        loadItemTbl();
        cleanItemForm();
    }
});


//--------------- Item Update ---------------
$('#itemUpdate').on('click', function() {
    let itemId = $('#itemIdField').val();
    let itemName = $('#itemNameField').val();
    let price = $('#itemPriceField').val();
    let quantity = $('#itemQtyField').val();

    if (itemId === "") {
        Swal.fire({icon: "error", title: "Invalid Id!", background: "#2c2c2c", color: "#f1f1f1"});

    } else if (!getItemById(itemId)) {
        Swal.fire({icon: "error", title: "This Item Not Found!", background: "#2c2c2c", color: "#f1f1f1"});

    } else if (itemName === "") {
        Swal.fire({icon: "error", title: "Invalid Item Name!", background: "#2c2c2c", color: "#f1f1f1"});

    } else if (price === "") {
        Swal.fire({icon: "error", title: "Invalid Item Price!", background: "#2c2c2c", color: "#f1f1f1"});

    } else if (quantity === "") {
        Swal.fire({icon: "error", title: "Invalid Quantity!", background: "#2c2c2c", color: "#f1f1f1"});

    } else {
        updateItem(itemId, itemName, price, quantity);

        Swal.fire({icon: "success", title: "Item Updated Successfully!", background: "#2c2c2c", color: "#f1f1f1"});
        loadItemTbl();
        cleanItemForm();
    }
});


//--------------- Item Delete ---------------
$('#itemDelete').on('click', function () {
    let itemId = $('#itemIdField').val();
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        background: "#2c2c2c",
        color: "#f1f1f1",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"

    }).then((result) => {
        if (result.isConfirmed) {
            (itemId === "") ? Swal.fire({icon: "error", title: "Invalid Id!", background: "#2c2c2c", color: "#f1f1f1"}) :
                (!getItemById(itemId)) ? Swal.fire({icon: "error",
                        title: "This Customer Not Found!", background: "#2c2c2c", color: "#f1f1f1"}) :
                    (deleteItem(itemId), cleanItemForm(), loadItemTbl(),
                        Swal.fire({
                            icon: "success",
                            title: "Item Deleted Successfully!",
                            background: "#2c2c2c",
                            color: "#f1f1f1"
                        }));
        }
    });
});


// Handle table row click
$('#itemTBody').on('click', 'tr', function() {
    let item = getItemByIndex($(this).index());
    $('#itemIdField').val(item.id);
    $('#itemNameField').val(item.name);
    $('#itemPriceField').val(item.price);
    $('#itemQtyField').val(item.quantity);
});


// Handle search item
$('#itemSearch').on('click', function () {
    let searchText = $('#itemSearchField').val().toLowerCase();

    let searchedItem = searchItem(searchText);
    loadTblSearchedItem(searchedItem);
});


// Reset item form
$('#itemReset').on('click', function() {
    cleanItemForm();
});


// Load item table
const loadItemTbl = () => {
    $('#itemTBody').empty();

    let itemDB = getItemDB();
    itemDB.map((item, index) => {
        let newRow = `<tr> <td>${item.id}</td> <td>${item.name}</td> <td>${item.price}</td> <td>${item.quantity}</td> </tr>`
        $('#itemTBody').append(newRow);
    });
};


// Load table: searched items
const loadTblSearchedItem = (searchedItems) => {
    $('#itemTBody').empty();

    searchedItems.forEach((item) => {
        let newRow = `<tr> <td>${item.id}</td> <td>${item.name}</td> <td>${item.price}</td> <td>${item.quantity}</td> </tr>`
        $('#itemTBody').append(newRow);
    });
};


// Item form clear
const cleanItemForm = () => {
    $('#itemIdField').val("");
    $('#itemNameField').val("");
    $('#itemPriceField').val("");
    $('#itemQtyField').val("");
};

export {loadItemTbl};