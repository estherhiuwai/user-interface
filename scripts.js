function enterInfo(){
    document.getElementById('checkout-overall').style.display="block";
}

function exitInfo(){
    document.getElementById('checkout-overall').style.display="none";
}

function saveInfo(){
    let tbchanged = document.getElementById("address-payment");
    let userName = document.getElementById("name").value; //this is working
    tbchanged.innerText = userName;
}