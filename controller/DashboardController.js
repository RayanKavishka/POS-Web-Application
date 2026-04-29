import {getOrderDB} from "../model/OrderHistoryModel.js";
import {getItemDB} from "../model/ItemModel.js";
import {getCustomerDB} from "../model/CustomerModel.js";


// Showing data in card
const loadDataInCard = () => {
    let totalValue = 0;
    let totalOrders = 0;

    let uniqueOrders = new Set();
    getOrderDB().forEach((order) => {
        if (new Date().toLocaleDateString() === order.date) {
            totalValue += order.total;

            if (!uniqueOrders.has(order.id)) {
                uniqueOrders.add(order.id);

                totalOrders++;
            }
        }
    });
    $('#todaySales').text("Rs " + totalValue);
    $('#todayOrders').text(totalOrders);


    let totalItems = 0;
    getItemDB().forEach((item) => {
        if (item) {
            totalItems++;
        }
    });
    $('#totalItems').text(totalItems);


    let totalCustomers = 0;
    getCustomerDB().forEach((customer) => {
        if (customer) {
            totalCustomers++;
        }
    });
    $('#totalCustomers').text(totalCustomers);
};





export {loadDataInCard};