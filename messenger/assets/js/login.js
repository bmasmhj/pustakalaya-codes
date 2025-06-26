async function handleLogin(event) {
  event.preventDefault();
  const form = event.target;
  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    return;
  }
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    let response = await fetch("https://chat.bimash.com.np/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        pass: password,
      }),
    });

    let data = await response.json();
    if (data.status == "login_verified") {
      localStorage.setItem("userAccount", JSON.stringify(data));
      window.location.href = "/index.html";
    }
  } catch (error) {
    alert("An error occurred. Please try again.");
  }
}
