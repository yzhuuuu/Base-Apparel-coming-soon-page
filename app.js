console.log(`hello world`);
// selector
const error = document.getElementById('error');
const warningText = document.querySelector('.warning-text');
const arrow = document.getElementById('arrow');
const email = document.getElementById('email');

// console.log(error, warningText, arrow, email);

function checkEmailOperation() {
  if (!email.classList.contains('hide')) {
    warningText.classList.add('hide');
    error.classList.add('hide');
  }
  const emailAddress = email.value;
  if (!emailAddress.includes('@')) {
    warningText.classList.remove('hide');
    error.classList.remove('hide');
  }
}
arrow.addEventListener('click', () => {
  //   console.log(email.value);
  // first remove all the error and icons
  checkEmailOperation();
});
email.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    checkEmailOperation();
  }
});
