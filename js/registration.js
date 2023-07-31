let anchorReg = document.getElementById("anchorReg");
let anchorLog = document.getElementById("anchorLog");
let formLogin = document.getElementById("login");
let formRegistration = document.getElementById("registration");

let inputName = document.querySelector("#inputName");
let inputEmail = document.querySelector("#inputEmail");
let inputPassword = document.querySelector("#inputPassword");

let signup = document.querySelector('#signup')

let formList;
let formExists;

// local storage
if (localStorage.getItem("formList")) {
      formList = JSON.parse(localStorage.getItem("formList"));
} else {
      formList = []
}

// Add event listener to "SignUp" link
anchorReg.addEventListener("click", function () {
      formLogin.classList.add('d-block', 'd-none')
      formRegistration.classList.replace('d-none', 'd-block');
});

// Add event listener to "Signin" link
anchorLog.addEventListener("click", function () {
      formRegistration.classList.add('d-block', 'd-none');
      formLogin.classList.replace('d-none', 'd-block')
});

signup.addEventListener('click', function () {
      addData()
})

inputName.addEventListener('input', function () {
      validationName()
})

inputEmail.addEventListener('input', function () {
      validationEmail()
})

inputPassword.addEventListener('input', function () {
      validationPassword()
})

function addData() {

      if (validationName() && validationEmail() && validationPassword()) {
            var form = {
                  name: inputName.value,
                  email: inputEmail.value.toLowerCase(),
                  password: inputPassword.value,
            };
            formExists = false;
            for (var i = 0; i < formList.length; i++) {
                  if (formList[i].email === form.email) {
                        formExists = true;
                  }

            }
            if (!formExists) {
                  formList.push(form)
                  localStorage.setItem("formList", JSON.stringify(formList));
                  clearForm()
                  swal({
                        title: "Form Data Added",
                        text: "Your form data has been successfully added to the list!",
                        icon: "success",
                        button: true,
                  });
                  formRegistration.classList.add('d-none')
                  formLogin.classList.remove('d-none')
                  // window.location.hash = "#login";
            }
            else {
                  
                  swal({
                        title: "Form Data Already Exists",
                        text: "A form data with the same email already exists. Please choose a different email.",
                        icon: "warning",
                        button: true,
                  });
            }
            
            
      }

}

function clearForm() {
      inputName.value = "";
      inputEmail.value = "";
      inputPassword.value = "";
}

function validationName() {
      var regex = /^\w{3,}((\s\w+)+)?$/;
      var nameError = document.getElementById("nameError");
      if (regex.test(inputName.value)) {
            nameError.classList.replace('d-block', 'd-none')
            inputName.classList.replace("is-invalid", "is-valid");
            return true;
      } else {
            inputName.classList.add("is-invalid");
            nameError.classList.replace('d-none', 'd-block')
            return false;
      }
}
function validationEmail() {
      var regex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      var emailError = document.getElementById("emailError");
      if (regex.test(inputEmail.value)) {
            emailError.classList.replace('d-block', 'd-none')
            inputEmail.classList.replace("is-invalid", "is-valid");
            return true;
      } else {
            inputEmail.classList.add("is-invalid");
            emailError.classList.replace('d-none', 'd-block')
            return false;
      }
}
function validationPassword() {
      var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      var passwordError = document.getElementById("passwordError");
      if (regex.test(inputPassword.value)) {
            passwordError.classList.replace('d-block', 'd-none')
            inputPassword.classList.replace("is-invalid", "is-valid");
            return true;
      } else {
            inputPassword.classList.add("is-invalid");
            passwordError.classList.replace('d-none', 'd-block')
            return false;
      }
}
