//  $(".input_text").focus(function(){
//      $(this).prev('.fa').addclass('glowIcon')
//  })
//  $(".input_text").focusout(function(){
//      $(this).prev('.fa').removeclass('glowIcon')
//  })

var login_button = document.getElementById('login-btn');
login_button.onclick = function() {
  window.location.href="../html/login.html";
}

var signup_button=document.getElementById("signup-btn");

signup_button.onclick=function(){
  window.location.href="../html/signup.html";
}

