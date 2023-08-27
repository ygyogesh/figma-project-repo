"use strict"

const photo2 = document.getElementById('photo2');

photo2.onclick = function () {
  
  document.body.classList.toggle("dark-theme")
  if (document.body.classList.contains("dark-theme")) {
    document.body.style.background="black"
    photo2.src = "./img/sun.png";
  } else {
    document.body.style.background="white"
    photo2.src = "./img/moon.png";
  }
}


// for email sending from email js 



// function sendMail(){
//   (function(){
//    emailjs.init("q5WAYzh7c4tNuFRrm");             // acoount ko public key
//   })
//   var params= {
//    name: document.querySelector("#name").value,
//    email: document.querySelector("#email").value,
//    message: document.querySelector("#message").value
//   }
//   var serviceID = "service_07cagan"   // this is service id of email js.
//   var templateID = "template_o728dx6" ;       // email template id 
//   emailjs.send(serviceID, templateID, params)
//   .then(res => {
//    alert("Email send succsefullly")
//   })
//   .catch();

  
//   };


function sendMail() {
  emailjs.init("q5WAYzh7c4tNuFRrm"); // Initialize emailjs with your public key

  var params = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    message: document.querySelector("#message").value
  };

  var serviceID = "service_07cagan"; // This is the service id of email js.
  var templateID = "template_o728dx6"; // Email template id
  emailjs.send(serviceID, templateID, params)
    .then(function (res) {
      alert("Email sent successfully");
    })
    .catch(function (error) {
      console.error("Error sending email:", error);
    });
}

















// let hero = document.getElementById("formi");
// hero.addEventListener('click', (e) => {
//   e.preventDefault();
//   let name = document.getElementById("name").value;
//   let email = document.getElementById("password").value;
//   let password = document.getElementById("password").value;
//   let message = document.getElementById("message").value;


//   let nameregex = /^[A-Za-z]{4,}$/
//   let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
//   let passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/
//   let messageregex = /\b\w{6,}\b/

//   if (!name.match(nameregex)) {
//     document.getElementById("namespan").innerHTML = "Name is not valid!"
//   }
//   if (!email.match(emailregex)) {
//     document.getElementById("emailspan").innerHTML = "Invalid email format"
//   }
//   if (!password.match(passwordregex)) {
//     document.getElementById("passwordspan").innerHTML = `Min. 8 characters, 1 letter, 1 number and 1 special character`
//   }
//   if (!message.match(messageregex)) {
//     document.getElementById("messagespan").innerHTML = "Message must contain more than 5 words."
//   }

//   else {
//     document.getElementById("namespan").innerHTML = "";
//     document.getElementById("emailspan").innerHTML = "";
//     document.getElementById("passwordspan").innerHTML = "";
//     document.getElementById("messagespan").innerHTML = "";

//   }

// })



// function hencyYogesh(name,age){
//   console.log("My name is ", name , "I am ", age , "year old")
// }

// hencyYogesh("yogesh", 19)

// for (let i=1;i<=10;i++){
//   console.log(i)
// }


