// back to top button functionality
let backbtn = document.querySelector(".back-to-top");
const scrollBtnDisplay = function () {
  window.scrollY > 100
    ? backbtn.classList.add("show")
    : backbtn.classList.remove("show");
};
window.addEventListener("scroll", scrollBtnDisplay);

const scrollWindow = function () {  
  if (window.scrollY != 0) {
    setTimeout(function () {
      window.scrollTo(0, window.scrollY - 50);
      scrollWindow();
    }, 10);
  }
};
backbtn.addEventListener("click", scrollWindow);



// script.js

function register() {
  // Get form input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const cpassword = document.getElementById('cpassword').value;

  // Validate form input
  if (!name || !email || !password || !cpassword) {
      alert('Please fill in all fields.');
      return;
  }

  if (password !== cpassword) {
      alert('Passwords do not match.');
      return;
  }

  // Prepare data to send to backend
  const userData = {
      name: name,
      email: email,
      password: password
  };

  // Send data to backend
  fetch('/register', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
  })
  .then(response => {
      if (response.ok) {
          return response.json();
      }
      throw new Error('Network response was not ok.');
  })
  .then(data => {
      alert(data.message); // Display success message
      // Optionally, redirect the user to another page
      // window.location.href = '/login.html';
  })
  .catch(error => {
      console.error('There was a problem with the registration:', error);
      alert('There was a problem with the registration. Please try again later.');
  });
}
