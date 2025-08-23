// Login  Button Functionality 

document.getElementById("loginButton")
.addEventListener("click", function(e){
    e.preventDefault()
    const mobileNumber = 1684770240;
    const pinNumber = 1234;
    const mobileNumberValue = document.getElementById("mobile-number").value;
    const mobileNumberValueConverted = parseInt(mobileNumberValue);
    const pinNumberValue = document.getElementById("pin-number").value;
    const pinNumberValueComverted = parseInt(pinNumberValue);
    console.log(mobileNumberValueConverted, pinNumberValueComverted);

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueComverted === pinNumber){
        // console.log("all values matched")
        window.location.href="./home.html"
    }
    else{
        // console.log("invalid Credentials")
        alert("invalid Credentials");
    }
    


})