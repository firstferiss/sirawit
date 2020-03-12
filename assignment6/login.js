function getParams() {
  	var idx = document.URL.indexOf('?');
  	var params = new Array();
  	if (idx != -1) {
  		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
  		for (var i=0; i<pairs.length; i++) {
  			nameVal = pairs[i].split('=');
  			params[nameVal[0]] = nameVal[1];
  		}
 	}
  	return params;
 }

window.onload = loginLoad;

var username , password
function loginLoad(){
	var b = document.getElementById("myLogin");
	b.onsubmit = checkLogin
	var parameter = getParams();
	username = parameter["username"]
	password = parameter["password"]

	console.log(username + password)
}

function checkLogin(){
	var x = document.forms["myLogin"];
	var us = x["username"];
	var ps = x["password"];
	
	 if (us.value == username && ps.value == password){
	 	alert("Success");
	 	return true;
	 }
	 else{
	 	alert("Wrong username or password");
	 	return false;
	 }
}

			