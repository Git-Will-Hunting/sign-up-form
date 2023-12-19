const phone = document.getElementById('phone')

phone.addEventListener('input', function (e) {
  var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');

if (phone.validity.patternMismatch) {
  phone.setCustomValidity("Please enter a valid phone number");
} else {
  phone.setCustomValidity("");
}
});

const password = document.getElementById('pwd')
const confirm_pwd = document.getElementById('confirm_pwd')

password.addEventListener('input', function (e) {
  if (password.validity.patternMismatch) {
    password.setCustomValidity("Password must be between 8 and 30 characters, including " +
    "at least one character that is UPPER/lowercase, a symbol, and a number");
  } else {
    password.setCustomValidity("");
  }
});

confirm_pwd.addEventListener('input', function (e) {
  if (confirm_pwd.value !== password.value) {
    confirm_pwd.setCustomValidity("Passwords don't match");
  } else {
    confirm_pwd.setCustomValidity("");
  }
});