
window.onload = pageLoad;
function pageLoad(){
    var a = document.getElementById("myForm");
    a.onsubmit = regis;
}

function regis(){
    var x = document.forms["myForm"];
    var fname = x["firstname"];
    var lname = x["lastname"];
    var gd = x["gender"];
    var bd = x["bday"];
    var mail = x["email"];
    var uname = x["username"];
    var pw = x["password"];
    var repw = x["repassword"];
    
    return validateForm(pw.value , repw.value);
}

function validateForm(pw,repw) {
    
    if (pw == repw){
        return true;
    }
    else{
        var error = document.getElementById("errormsg");
        error.innerHTML = "Wrong password"
        return false;
    }
}