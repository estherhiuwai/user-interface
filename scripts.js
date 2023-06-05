function enterSearch(){
    document.getElementById('search-overall').style.display="grid";
}

function exitSearch(){
    document.getElementById('search-overall').style.display="none";
}

function enterIndiv(productName){
    document.getElementById(productName).style.display="block";
}

function exitIndiv(productName){
    document.getElementById(productName).style.display="none";
}

function enterInfo(){
    document.getElementById('checkout-overall').style.display="grid";
}

function exitInfo(){
    document.getElementById('checkout-overall').style.display="none";
}

function activateDelivery(){
    var active = document.getElementById("delivery");
    active.classList.remove("pickup-delivery");
    active.classList.add("pickup-delivery-active");

    var inactive = document.getElementById("pickup");
    inactive.classList.remove("pickup-delivery-active");
    inactive.classList.add("pickup-delivery");
}

function activatePickup(){
    var active = document.getElementById("pickup");
    active.classList.remove("pickup-delivery");
    active.classList.add("pickup-delivery-active");

    var inactive = document.getElementById("delivery");
    inactive.classList.remove("pickup-delivery-active");
    inactive.classList.add("pickup-delivery");
}