// ------------------------ Customer Regex --------------------------
const phone_regex = new RegExp("^[0]{1}[7]{1}[01245678]{1}[0-9]{7}$");

const checkPhone = (phone) => {
    return phone_regex.test(phone);
};

export {checkPhone};