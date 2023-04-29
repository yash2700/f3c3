var signUpButton=document.getElementById("signup");
var form=document.getElementsByTagName("form");
var message=document.getElementById("error-success");
var profile=document.getElementById("profileLink");
function generateAccessToken() {
    var randomBytes = new Uint8Array(16);
    window.crypto.getRandomValues(randomBytes);
    var binaryString = "";
    randomBytes.forEach(function(byte) {
      binaryString += String.fromCharCode(byte);
    });
    return btoa(binaryString);
  }
  
function signUp(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var confirmPassword=document.getElementById("confirmPassword").value;
    
    if(name=="" || email=="" || password=="" || confirmPassword==""){
        message.style.color="red";
        message.textContent="Error : All the fields are mandatory";
        console.log(123);
    }
    else{
        message.style.color="green";
        message.innerHTML="Successfully signed up!";
        const user={
            fullName:name,
            email:email,
            password:password
        }
        localStorage.setItem("userState",JSON.stringify(user));

        var access_token=generateAccessToken();
        localStorage.setItem("access-token",access_token);

        window.location.href="./profile.html";
    }
   
    form[0].reset()
    
}

function toProfile(e){
    if(localStorage.getItem("access-token")!=null){
        window.location.href="./profile.html";
    }
    else{
        e.preventDefault();
    }
}
signUpButton.addEventListener("click",signUp);
profile.addEventListener("click",toProfile);