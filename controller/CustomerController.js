import {checkMobile} from "../utill/regexUtill.js";
import {getCustomerById, getCustomerByIndex, saveCustomer, updateCustomer, deleteCustomer, getCustomerDB, searchCustomer} from "../model/CustomerModel.js";


//--------------- Customer Save ---------------
$('#customerSave').on('click', function () {
    let cusId = $('#customerIdField').val();
    let cusName = $('#customerNameField').val();
    let cusMobile = $('#customerMobileField').val();
    let cusAddress = $('#customerAddressField').val();

    if (cusId === "") {
        Swal.fire({icon: "error", title: "Invalid Id!", background: "#2c2c2c", color: "#f1f1f1"});

    } else if (getCustomerById(cusId)) {
        Swal.fire({icon: "error", title: "This Customer Already Exist", background: "#2c2c2c", color: "#f1f1f1"});

    } else if (cusName === "") {
        Swal.fire({icon: "error", title: "Invalid Name!", background: "#2c2c2c", color: "#f1f1f1"});

    } else if (!checkMobile(cusMobile)) {
        Swal.fire({icon: "error", title: "Invalid Mobile Number!", background: "#2c2c2c", color: "#f1f1f1"});

    } else if (cusAddress === "") {
        Swal.fire({icon: "error", title: "Invalid Address!", background: "#2c2c2c", color: "#f1f1f1"});

    } else {
        saveCustomer(cusId, cusName, cusMobile, cusAddress);

        Swal.fire({icon: "success", title: "Customer Saved Successfully!", background: "#2c2c2c", color: "#f1f1f1"});
        loadCustomerTbl();
        cleanCustomerForm();
    }
});


//--------------- Customer Update ---------------
$('#customerUpdate').on('click', function() {
    let cusId = $('#customerIdField').val();
    let cusName = $('#customerNameField').val();
    let cusMobile = $('#customerMobileField').val();
    let cusAddress = $('#customerAddressField').val();

    if (cusId === "") {
        Swal.fire({icon: "error", title: "Invalid Id!", background: "#2c2c2c", color: "#f1f1f1"});

    }else if (!getCustomerById(cusId)) {
        Swal.fire({icon: "error", title: "This Customer Not Found!", background: "#2c2c2c", color: "#f1f1f1"});

    } else if (cusName === "") {
        Swal.fire({icon: "error", title: "Invalid Name!", background: "#2c2c2c", color: "#f1f1f1"});

    } else if (!checkMobile(cusMobile)) {
        Swal.fire({icon: "error", title: "Invalid Mobile Number!", background: "#2c2c2c", color: "#f1f1f1"});

    } else if (cusAddress === "") {
        Swal.fire({icon: "error", title: "Invalid Address!", background: "#2c2c2c", color: "#f1f1f1"});

    } else {
        updateCustomer(cusId, cusName, cusMobile, cusAddress);

        Swal.fire({icon: "success", title: "Customer Updated Successfully!", background: "#2c2c2c", color: "#f1f1f1"});
        loadCustomerTbl();
        cleanCustomerForm();
    }
});


//--------------- Customer Delete ---------------
$('#customerDelete').on('click', function () {
    let cusId = $('#customerIdField').val();
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
            (cusId === "") ? Swal.fire({icon: "error", title: "Invalid Id!", background: "#2c2c2c", color: "#f1f1f1"}) :
                (!getCustomerById(cusId)) ? Swal.fire({icon: "error",
                        title: "This Customer Not Found!", background: "#2c2c2c", color: "#f1f1f1"}) :
                    (deleteCustomer(cusId), cleanCustomerForm(), loadCustomerTbl(),
                        Swal.fire({
                            icon: "success",
                            title: "Customer Deleted Successfully!",
                            background: "#2c2c2c",
                            color: "#f1f1f1"
                        }));
        }
    });
});


// Handle table row click
$('#customerTBody').on('click', 'tr', function() {
    let cus = getCustomerByIndex($(this).index());
    $('#customerIdField').val(cus.id);
    $('#customerNameField').val(cus.name);
    $('#customerMobileField').val(cus.mobile);
    $('#customerAddressField').val(cus.address);
});


// Handle search customer
$('#customerSearch').on('click', function () {
    let searchText = $('#searchField').val().toLowerCase();

    let searchedCustomers = searchCustomer(searchText);
    loadTblSearchedCustomers(searchedCustomers);
});


// Reset customer form
$('#customerFromReset').on('click', function() {
    cleanCustomerForm();
});


// Load customer table
const loadCustomerTbl = () => {
    $('#customerTBody').empty();

    let customerDB = getCustomerDB();
    customerDB.map((customer, index) => {
        let newRow = `<tr> <td>${customer.id}</td> <td>${customer.name}</td> <td>${customer.mobile}</td> <td>${customer.address}</td> </tr>`
        $('#customerTBody').append(newRow);
    });
};


// Load table: searched customers
const loadTblSearchedCustomers = (searchedCustomers) => {
    $('#customerTBody').empty();

    searchedCustomers.forEach((customer) => {
        let newRow = `<tr> <td>${customer.id}</td> <td>${customer.name}</td> <td>${customer.mobile}</td> <td>${customer.address}</td> </tr>`
        $('#customerTBody').append(newRow);
    });
};


// Customer form clear
const cleanCustomerForm = () => {
    $('#customerIdField').val("");
    $('#customerNameField').val("");
    $('#customerMobileField').val("");
    $('#customerAddressField').val("");
};