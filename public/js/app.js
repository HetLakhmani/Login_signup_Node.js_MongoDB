document.addEventListener('DOMContentLoaded', () => {
    // Signup Form Handling
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
      signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
    
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
    
        try {
          const res = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
          });
    
          const data = await res.json();
          if (res.status === 200) {
            alert('Sign up successful!');
            window.location.href = '/login.html';
          } else {
            alert(data.msg);
          }
        } catch (error) {
          console.error('Error during sign up:', error);
          alert('An error occurred during sign up.');
        }
      });
    } else {
      console.error('Signup form not found!');
    }
  
    // Login Form Handling
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
    
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
    
        try {
          const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });
    
          const data = await res.json();
    
          if (res.status === 200) {
            localStorage.setItem('token', data.token);
            window.location.href = '/home.html';
          } else {
            alert(data.msg);
          }
        } catch (error) {
          console.error('Error during login:', error);
          alert('An error occurred during login.');
        }
      });
    } else {
      console.error('Login form not found!');
    }
  });
  