
function productChange(product,isIncrease){
    const productInput = document.getElementById(product +'-item');
    const itemCount = parseInt(productInput.value);

    let updateCount = itemCount;
    if (isIncrease == true) {
        updateCount = itemCount + 1;
    }
    if (isIncrease == false && itemCount>0 ) {
        updateCount = itemCount - 1;
    }


    productInput.value = updateCount;
    let productTotal = 0;
    if (product == 'phone') {
        productTotal = updateCount * 1200;
    }
    if (product == 'case') {
        productTotal = updateCount * 50;
    }
    document.getElementById(product+'Price').innerText = productTotal;
    totalCalculate()
}

function totalCalculate(){
    const phonePrice = document.getElementById('phonePrice').innerText;
    const casePrice = document.getElementById('casePrice').innerText;
    const phoneCost = parseInt(phonePrice);
    const caseCost = parseInt(casePrice);

    const totalPrice = phoneCost + caseCost;

    document.getElementById('totalPrice').innerText = totalPrice;
    const tax = parseInt(totalPrice * 0.05);
    document.getElementById('subTotal').innerText = totalPrice + tax;
}
