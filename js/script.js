/* get product name function */
function getProductName(productId){
    const element = document.getElementById(productId).innerText;
    return element;
}

/* get product price function declear */


function getProductPrice(productId){
    const element = parseFloat(document.getElementById(productId).innerText);
    return element;
}


// const buy = document.querySelectorAll('.btn-Buy')
// buy.addEventListener('click', function(){
//     let append = document.getElementById('selectItem');
//     const productName = getProductName('productName');
//     const productPrice =  getProductPrice('price');
//     const count = append.childElementCount;
//     const p = document.createElement('p');
//     p.innerText = count+1 + ' ' + productName + '  $' + productPrice;

//     append.appendChild(p);

// }

// )
// console.log(buy);

function  buy(button){
    const productName = button.parentNode.parentNode.childNodes[3].innerText;
    const productPrice = parseFloat(button.parentNode.parentNode.childNodes[9].childNodes[1].innerText);
    let append = document.getElementById('selectItem');
    const count = append.childElementCount;
    const p = document.createElement('p');
    p.innerText = count+1 + '. ' + productName + '  $' + productPrice;
    append.appendChild(p);
    
    // console.log(productPrice);
}