let loginEmail = document.getElementById('loginEmail');
let loginPassword = document.getElementById('loginPassword');
let loginBtn = document.querySelector('#loginBtn');
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
      setTimeout(function(){
        document.location.href = "/home.html"
    },200);
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