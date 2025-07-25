const upperset="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset="abcdefghijklmnopqrstuvwxyz";
const numberset="1234567890";
const symbolset="@#$%^&*()_+";

// Access
const passgenbox=document.getElementById("pass-gen");
const passlength=document.getElementById("pass-length");
const capital=document.getElementById("capital");
const small=document.getElementById("small");
const number=document.getElementById("number");
const symbol=document.getElementById("symbol");
const btn=document.getElementById("button");
const alertmsg=document.getElementById("alertmsg");

const randompassword=(data)=>{
    return data[Math.floor(Math.random()*data.length)];   
}

const genratepassword=(password="")=>{
    if (capital.checked) {
        password+=randompassword(upperset)
    }
    if (small.checked) {
        password+=randompassword(lowerset)
    }
    if (number.checked) {
        password+=randompassword(numberset)
    }
    if (symbol.checked) {
        password+=randompassword(symbolset)
    }
    if (password.length<passlength.value) {
        return genratepassword(password);   
    }
    // console.log(passwordsize(password,passlength.value));
    
    passgenbox.value=passwordsize(password,passlength.value);
}

btn.addEventListener("click",()=>{
    genratepassword();
})

function passwordsize(genPassCount,lenPass) {
    if (genPassCount>lenPass) {
        let actualPassword=genPassCount.substring(0,lenPass);
        return actualPassword;
    } else {
        return genPassCount;
    }
}

function sizeChangeFun(){
    if (passlength.value < 4) {
        passlength.value=4;
        alertmsg.style.display="block";

        setTimeout(() => {
            alertmsg.style.display="none"
        }, 3000);
    }
}