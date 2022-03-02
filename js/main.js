const validateEmail = (email) => {
  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return email.match(re);
}

const error = (msg) => {
  const email = document.querySelector('#email');
  const message = document.querySelector('#error');

  message.innerHTML = msg;
  message.style.display = "block";
  message.style.color = "var(--clr-3)";
  email.style.border = "1px solid var(--clr-3)"
}

const success = () => {
  const email = document.querySelector('#email');
  const message = document.querySelector('#error');

  message.innerHTML = "Thank you!"
  message.style.color = "green"
  email.style.border = ""
}

const send_form = () => {
  const email = document.querySelector('#email');
  const message = document.querySelector('#error');


  if (email.value.length == 0) return error("Whoops! It looks like you forgot to add your email");

  if (!validateEmail(email.value)) return error("Please provide a valid email address");

  success()
}