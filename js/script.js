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



function  buy(button){
    const productName = button.parentNode.parentNode.childNodes[3].innerText;
    const productPrice = parseFloat(button.parentNode.parentNode.childNodes[9].childNodes[1].innerText);
    let append = document.getElementById('selectItem');
    const count = append.childElementCount;
    const p = document.createElement('p');
    p.innerText = count+1 + '. ' + productName + '  $' + productPrice;
    append.appendChild(p);
    
    // console.log(productPrice);
    const totalItem =document.getElementById('totalItem');
    totalItem.innerText = count+1;
    let totalPrice = parseFloat(document.getElementById('totalPrice').innerText);
    totalPrice = totalPrice+productPrice;
    document.getElementById('totalPrice').innerText=totalPrice;

    const applyBtn = document.getElementById('apply-btn');
    const cupon = document.getElementById('cuponn');


 if(totalPrice>0){
    applyBtn.removeAttribute('disabled');
    cupon.removeAttribute('disabled');
 }




 if(totalPrice>200){
    let discount = document.getElementById('discountPrice');
    let payamt = document.getElementById('payamount');
    const discountPrice =(totalPrice*20)/100;
        discount.innerText = discountPrice;
        const paytotal = totalPrice - parseFloat(discount.innerText);
        payamt.innerText= paytotal;
       
 }



}

/* discount price part */
 const apply = document.getElementById('apply-btn');

apply.addEventListener('click', function(){
    let cuponvalue = document.getElementById('cuponn').value;
    const cupponCood = 'less20';
    let totalPrice = parseFloat(document.getElementById('totalPrice').innerText);
    let discount = document.getElementById('discountPrice');
    let payamt = document.getElementById('payamount');

    if(cuponvalue === cupponCood && totalPrice<200 ){
        const discountPrice =(totalPrice*20)/100;
        discount.innerText = discountPrice;
        const paytotal = totalPrice - parseFloat(discount.innerText);
        payamt.innerText= paytotal;
        alert('congratulation you are 10% discount')
        }
    else{
     alart('your cuppon not valid')
    }
})


const order=  document.getElementById('order');;

order.addEventListener('click', function(){
    alert('your  order is recive')
})


// let totalPrice = parseFloat(document.getElementById('totalPrice').innerText);

 
