function enterSearch(){
    document.getElementById('search-overall').style.display="grid";
}

function exitSearch(){
    document.getElementById('search-overall').style.display="none";
}

function enterIndiv(productName){
    document.getElementById(productName).style.display="block";
}

const mediaQuery = window.matchMedia('(min-width: 950px)')
function handleTabletChange(e){
    if (e.matches) {
        document.getElementById(productName).style.display="block";
    }
}
mediaQuery.addEventListener(handleTabletChange)
handleTabletChange(mediaQuery)

function exitIndiv(productName){
    document.getElementById(productName).style.display="none";
}

function enterInfo(){
    document.getElementById('checkout-overall').style.display="block";
}

function exitInfo(){
    document.getElementById('checkout-overall').style.display="none";
}

function saveInfo(){
    let userName = document.getElementById("name").value; //this is working
    document.getElementById("address-payment").innerHTML = userName; //this isn't working, try with a <p>
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