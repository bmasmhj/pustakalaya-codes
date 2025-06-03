function login() {
  // Get the username and password input element
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  let age = document.getElementById("age");


  // Get the element to display username validation messages
  let username_msg = document.getElementById("username_msg");
  let password_msg = document.getElementById("password_msg");
  let age_msg = document.getElementById("age_msg");


  // Get the value entered in the username and password field
  let usernameValue = username.value;
  let passwordValue = password.value;
  let ageValue = age.value;

  // Validate if username is empty
  if (usernameValue.trim() == "") {
    // Add error style to username input
    username.classList.add("error-input");
    // Show error message for username
    username_msg.innerHTML = "Username cannot be empty";
  } else {
    // Remove error style from username input
    username.classList.remove("error-input");
    // Clear error message for username
    username_msg.innerHTML = "";
  }

  // Validate if password is empty
  if (passwordValue.trim() == "") {
    // Add error style to password input
    password.classList.add("error-input");
    // Show error message for password
    password_msg.innerHTML = "Password cannot be empty";
  } else {
    // Remove error style from password input
    password.classList.remove("error-input");
    // Clear error message for password
    password_msg.innerHTML = "";
  }


  if(ageValue.trim() == "" && parseInt(ageValue) < 100 ) {
    // Add error style to age input
    age.classList.add("error-input");
    // Show error message for age
    age_msg.innerHTML = "Age cannot be empty";
  }else{
    // Remove error style from age input
    age.classList.remove("error-input");
    // Clear error message for age
    age_msg.innerHTML = "";
  }

  // If both username and password are filled
  if (usernameValue.trim() != "" && passwordValue.trim() != "") {
    // Show success alert
    alert("Login successful!");
  }
}
