// attach Event listener to form , not submit button as form is being submitted

const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

form.addEventListener('submit', e => {
  e.preventDefault();
  // console.log('form submitted');
  // console.log(username.value);
  console.log(form.username.value);
});