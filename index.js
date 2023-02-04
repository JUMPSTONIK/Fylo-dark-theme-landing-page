function validateEmail() {

    let emailInput = document.getElementsByClassName("earlyAccess--input");
    console.log(emailInput[0].value)
  
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (!emailInput[0].value.match(validRegex)) {
        console.log('hey')
      let errorMessage =  document.getElementsByClassName("earlyAccess--error")
      errorMessage[0].style.display = "initial"
      
    } else {
        console.log("nein")
      let errorMessage =  document.getElementsByClassName("earlyAccess--error")
      errorMessage[0].style.display = "none"
    }
    return false
  }