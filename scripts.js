function enterInfo(){
    document.getElementById('checkout-overall').style.display="block";
}

function exitInfo(){
    document.getElementById('checkout-overall').style.display="none";
}

function saveInfo(){
    let userName = document.getElementById("name").value; //this is working
    document.getElementById("address-payment").innerHTML = userName; //this isn't working
}