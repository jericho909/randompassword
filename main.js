const passwordBox = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copy");
const slider = document.getElementById("rangeSelector");
const displaySlider = document.querySelector(".lengthDisplay");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = ">#$%^@()_+|{}[]/-=";

const allchars = upperCase + lowerCase + numbers + symbols;

displaySlider.innerText = slider.value;

slider.oninput = function() {
    displaySlider.innerHTML = this.value;
  }

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);

function generatePassword(){
    const length = slider.value;
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length){
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }

    passwordBox.value = password;

}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}