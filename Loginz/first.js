function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function check(form)/*function to check userid & password*/
{
 if(form.email.value == "evan98@gmail.com" && form.password.value == "evanpatrick")
  {
    window.open('homepage.html')
  }
 else
 {
   alert("Error Password or Username")/*displays error message*/
  }
}
