function enterSearch(){
    document.getElementById('search-overall').style.display="grid";
}

function exitSearch(){
    document.getElementById('search-overall').style.display="none";
}

function enterLatte(){
    document.getElementById('indiv-latte').style.display="block";
}

function exitLatte(){
    document.getElementById('indiv-latte').style.display="none";
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