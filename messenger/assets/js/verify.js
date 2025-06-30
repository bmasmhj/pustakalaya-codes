let userAccount = localStorage.getItem("userAccount");
if (userAccount) {
  userAccount = JSON.parse(userAccount);
  console.log(userAccount);
  if (userAccount.user_id) {
    // User is logged in, proceed with showing the messenger interface
  } else {
    alert("You are not logged in. Please login first.");
    window.location.href = "/login.html"; // Redirect to login page
  }
} else {
  alert("You are not logged in. Please login first.");
  window.location.href = "/login.html"; // Redirect to login page
}