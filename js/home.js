let userList;
let logout=document.getElementById('logout')

if (localStorage.getItem("userName")) {
    userName = localStorage.getItem("userName");
    document.getElementById('userName').innerHTML = "Welcome"+' ' + userName+ '<img src="./images/wave.gif" class="img-fluid z-0 ps-2" style="width: 10%;">'
} else {
    userList = []
}

logout.addEventListener('click',function(){
    localStorage.removeItem('userName')  
})


