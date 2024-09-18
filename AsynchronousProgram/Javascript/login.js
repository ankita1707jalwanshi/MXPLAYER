// login.js
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const user = JSON.parse(localStorage.getItem(email));
  
    if (user && user.password === password) {
      alert('Login successful');
      window.location.href = 'index.html';
    } else {
      alert('Invalid Credentials');
    }
  });
  