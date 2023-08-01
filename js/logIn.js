let loginEmail = document.getElementById('loginEmail');
let loginPassword = document.getElementById('loginPassword');
let loginBtn = document.querySelector('#loginBtn');
let home=document.getElementById('home')
var userName

loginBtn.addEventListener('click', function() {
   
  var form = {
    password: loginPassword.value,
    email: loginEmail.value
  }
  var formExists = false;
  for (var i = 0; i < formList.length; i++) {
    if (formList[i].email === form.email && formList[i].password === form.password) {
      formExists = true;
      localStorage.setItem('userName', formList[i].name);
      clearForm()
    formLogin.classList.add('d-none')
    home.classList.remove('d-none')
    }
  }
  if (!formExists) {
    // Show error message
    swal({
      title: "Error",
      text: "Incorrect Email or Password",
      icon: "warning",
      button: true,
    });
  }
 
  return false;
});
function clearForm() {
    loginEmail.value = "";
    loginPassword.value = "";
}