// phone event handler
const phoneIncreaseButton = document.getElementById("phone-increase");
phoneIncreaseButton.addEventListener("click", function () {
    handleProductChange("phone", true);
});

const phoneDecreaseButton = document.getElementById("phone-decrease");
phoneDecreaseButton.addEventListener("click", function () {
    handleProductChange("phone", false);
});

// case event handler
const caseIncreaseButton = document.getElementById("case-increase");
caseIncreaseButton.addEventListener("click", function () {
    handleProductChange("case", true);
});

const caseDecreaseButton = document.getElementById("case-decrease");
caseDecreaseButton.addEventListener("click", function () {
    handleProductChange("case", false);
});

function handleProductChange(product, isIncrease) {
    const productCount = getInputValue(product);
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    document.getElementById(product + "-count").value = productNewCount;
    let productTotal = 0;
    if (product == "case") {
        productTotal = productNewCount * 59;
    } else if (product == "phone") {
        productTotal = productNewCount * 1219;
    }
    document.getElementById(product + "-price").innerText = "$" + productTotal;

    calculateTotalAmount();
}

// calculate total amount
function calculateTotalAmount() {
    const phoneCount = getInputValue("phone");
    const caseCount = getInputValue("case");

    const totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById("total-price").innerText = "$" + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById("tax-amount").innerText = "$" + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById("grand-total").innerText = "$" + grandTotal;
}

function getInputValue(product) {
    console.log(product);
    const productInput = document.getElementById(product + "-count");
    const productCount = parseFloat(productInput.value);

    return productCount;
}



// function handlePhoneChange(isIncrease) {
//     const phoneInput = document.getElementById("phone-count");
//     const phoneCount = parseFloat(phoneInput.value);
//     let phoneNewCount = phoneCount;
//     if (isIncrease == true) {
//         phoneNewCount = phoneCount + 1;
//     }
//     if (isIncrease == false && phoneCount > 0) {
//         phoneNewCount = phoneCount - 1;
//     }
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById("phone-price").innerText = "$" + phoneTotal;
// }



// const caseIncreaseButton = document.getElementById("case-increase");
// caseIncreaseButton.addEventListener("click", function () {
//     const caseInput = document.getElementById("case-count");
//     const caseCount = parseFloat(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById("case-price").innerText = "$" + caseTotal;
// });
// const caseDecreaseButton = document.getElementById("case-decrease");
// caseDecreaseButton.addEventListener("click", function () {
//     const caseInput = document.getElementById("case-count");
//     const caseCount = parseFloat(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById("case-price").innerText = "$" + caseTotal;
// });