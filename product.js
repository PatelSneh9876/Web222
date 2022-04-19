function digitOnly() {
    var pid_1 = document.signup.productId.value.trim();
    for(var b=0; b < pid_1.length; b++) {
        if(pid_1[b] < '0' || pid_1[b] >= '8'){
            document.querySelector("#error_1").removeAttribute("hidden");
            return false;
        }    
        else if(pid_1.length != 8) {
            document.querySelector("#error_2").removeAttribute("hidden");
            return false;
        }
    }
    document.querySelector("#error_1").setAttribute("hidden", "hidden");
    document.querySelector("#error_2").setAttribute("hidden", "hidden");
    return true;
}

function productDescription() {
    var character;
    var p_description = document.signup.productDesc.value.trim();
    if(p_description[0] < 'A' || p_description[0] > 'Z') {
        document.querySelector("#error_3").removeAttribute("hidden");
        return false;
    }
    for(var ka=0; ka < p_description.length; ka++) {
        character = p_description[b].toUpperCase();
        if(character < 'A' || character > 'Z') {
            document.querySelector("#error_4").removeAttribute("hidden");
            return false;
        }
    }
    document.querySelector("#error_3").setAttribute("hidden", "hidden");
    document.querySelector("#error_4").setAttribute("hidden", "hidden");
    return true;
}
 
function price() {
    var product_price = document.signup.product_price.value;
    if(product_price >= 1000) {
        document.querySelector("#error_5").removeAttribute("hidden");
        return false;
    }
    document.querySelector("#error_5").setAttribute("hidden", "hidden");
    return true;
}

function userName() {
    var name = document.signup.username.value;
    var character = name[0].toUpperCase();
    if(character < 'A' || character > 'Z') {
        document.querySelector("#error_6").removeAttribute("hidden");
        return false;
    }
    document.querySelector("#error_6").setAttribute("hidden", "hidden");
    return true;
}

function checkBox() {
    for(var b = 0; b < document.signup.status.length; b++) {
        if(document.signup.status[b].checked == true) {
            document.querySelector("#error_7").setAttribute("hidden", "hidden");
            return true;
        }
    }
    document.querySelector("#error_7").removeAttribute("hidden");
    return false;
}

function check() {
    if(digitOnly() == false || productDescription() == false || product_price() == false || userName() == false|| checkBox() == false) {
        return false;
    }
    return true;
} 

function navigator() {
    var nav = document.querySelector("#navigation");
    var linkA = document.createElement("a");
    var linkA1 = document.createTextNode("Home");
    linkA.setAttribute("href", "./honesty.html");
    linkA.appendChild(linkA1);
    nav.appendChild(linkA);

    var linkB = document.createElement("a");
    var linkB1 = document.createTextNode("Product");
    linkB.setAttribute("href", "./product.html");
    linkB.appendChild(linkB1);
    nav.appendChild(linkB);

    var linkC = document.createElement("a");
    var linkC1 = document.createTextNode("Reflection");
    linkC.setAttribute("href", "./reflection.html");
    linkC.appendChild(linkC1);
    nav.appendChild(linkC);

    document.querySelector("#logo").removeAttribute("onclick");
}