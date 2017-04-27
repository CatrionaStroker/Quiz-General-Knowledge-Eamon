function Validate(){
		// VALIDATE USERNAME
		if(username.value == ""){
			name_error.textContent = "Username is required";
			username.style.border = "1px solid red";
			username.focus();
			return false;
		}
		// VALIDATE EMAIL
		if(email.value == ""){
			email_error.textContent = "Email is required";
			email.style.border = "1px solid red";
			email.focus();
			return false;
		}
		// VALIDATE EMAIL
		if(number.value == ""){
			number_error.textContent = "Contact is required";
			number.style.border = "1px solid red";
			number.focus();
			return false;
		}
		
	}
	// ADD EVENT LISTENERS
	function nameVerify(){
		if (username.value != "") {
			name_error.innerHTML = "";
			username.style.border = "1px solid #110E0F";
			return true;
		}
	}
	function emailVerify(){
		if (email.value != "") {
			email_error.innerHTML = "";
			email.style.border = "1px solid #110E0F";
			return true;
		}
	}
	function numberVerify(){
		if (number.value != "") {
			number_error.innerHTML = "";
			number.style.border = "1px solid #110E0F";
			return true;
		}
	}
   