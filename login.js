// Register form logic
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Save data to local storage
    const userData = { name, email, password };
    localStorage.setItem(email, JSON.stringify(userData));

    alert("Registration successful! You can now log in.");
    window.location.href = "login.html";
  });
}

// Login form logic
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem(email));

    if (userData && userData.password === password) {
      alert("Login successful!");
      localStorage.setItem("currentUser", JSON.stringify(userData));
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid email or password.");
    }
  });
}

// Display student details on dashboard
const studentDetailsDiv = document.getElementById("studentDetails");
if (studentDetailsDiv) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser) {
    studentDetailsDiv.innerHTML = `
      <h2>Student Details</h2>
      <p><strong>Name:</strong> ${currentUser.name}</p>
      <p><strong>Email:</strong> ${currentUser.email}</p>
    `;
  } else {
    studentDetailsDiv.innerHTML = "<p>No student details found. Please log in.</p>";
  }
}
