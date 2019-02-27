function check_value_present(a_element){
	//console.log(a_element);
	if((a_element.value=='enter only 6+ alphabets')||(a_element.value=='email not valid')||(a_element.value=='enter at least 6 chars')){
		document.getElementById(a_element.id).value="";
		//we cannot write a_value = "" ; it's like a_value is local to this function and will jot write on the document
	}
	a_element.removeAttribute("style");
	//console.log(a_element);
	if(a_element.id == "password_field"){
		a_element.setAttribute("type","password");
	}
}
function name_validation(a_value){
	var regex_name = /^[A-Za-z]{6,}$/;
	//console.log(a_value);
	if(a_value.match(regex_name)){
		//console.log(a_value.match(regex_name));
		return true;
	}
	else{
		var username_field_element = document.getElementById('username_field');
		username_field_element.setAttribute("style", "color: #ff66ff;");
		document.getElementById('username_field').value="enter only 6+ alphabets";
		//console.log(a_value.match(regex_name));
		return false;
	}
}
function email_validation(a_value){
	var regex_email = /[A-Za-z0-9]+@[a-z]+\.[a-z]+/;
	if(a_value.match(regex_email)){
		return true;
	}
	else{
		var email_field_element = document.getElementById('email_field');
		email_field_element.setAttribute("style", "color: #ff66ff;");
		document.getElementById('email_field').value="email not valid";
		return false;
	}
}
function password_validation(a_value){
	var regex_password = /.{6,}/;
	if(a_value.match(regex_password)){
		return true;
	}
	else{
		var password_field_element = document.getElementById('password_field');
		password_field_element.setAttribute("style", "color: #ff66ff;");
		password_field_element.setAttribute("type", "text");
		document.getElementById('password_field').value="enter at least 6 chars";

		return false;
	}
}