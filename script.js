
  
const btnlogin  = document.getElementById("btnlogin");


btnlogin.addEventListener("click", (e)=>{
 


  let username = document.getElementById("form2Example11").value;

  let password = document.getElementById("form2Example22").value;


 if(username === "Admin" && password === "Password"){


  e.preventDefault();
  window.location.href="main.html"

 }else{

  alert("tanga mo naman!");
 }




});
