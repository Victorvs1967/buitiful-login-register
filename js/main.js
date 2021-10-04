const login = document.getElementById('login'),
      register = document.getElementById('register'),
      btn = document.getElementById('btn');

const registered = () => {
  login.style.left = '-400px';
  register.style.left = '50px';
  btn.style.left = '110px';
};

const logined = () => {
  login.style.left = '50px';
  register.style.left = '450px';
  btn.style.left = '0';
};