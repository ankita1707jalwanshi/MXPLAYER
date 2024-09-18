// signup.js
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (name && contact && email && password) {
      const user = { name, contact, email, password };
      localStorage.setItem(email, JSON.stringify(user));
      alert('Signup successful');
      window.location.href = 'login.html';
    } else {
      alert('Please fill in all fields');
    }
  });
  