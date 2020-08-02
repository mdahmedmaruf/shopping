const caseIncreaseButton = document.getElementById("case-increase");
caseIncreaseButton.addEventListener("click", function () {
    handleProductChange(true);
});
const caseDecreaseButton = document.getElementById("case-decrease");
caseDecreaseButton.addEventListener("click", function () {
    handleProductChange(false);
});

function handleProductChange(isIncrease) {
    const caseInput = document.getElementById("case-count");
    const caseCount = parseFloat(caseInput.value);
    let caseNewCount = caseCount;
    if (isIncrease == true) {
        caseNewCount = caseCount + 1;
    }
    if (isIncrease == false && caseCount > 0) {
        caseNewCount = caseCount - 1;
    }
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById("case-price").innerText = "$" + caseTotal;
}



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