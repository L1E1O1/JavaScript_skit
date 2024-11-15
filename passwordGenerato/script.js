document.addEventListener('DOMContentLoaded', () => {
    const passwordBox = document.getElementById("password");
    const length = 12;

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const symbol = "!@#$%^&*()_+=-{}[]|:;<>,.?/~`";
    const allChars = upperCase + lowerCase + number + symbol;
    console.log(password);
    document.getElementById("btn").addEventListener('click', function generatePassword() {  
        let password = '';
        
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += number[Math.floor(Math.random() * number.length)];
        password += symbol[Math.floor(Math.random() * symbol.length)];
        console.log(password);
        while (password.length < length) {
            password += allChars[Math.floor(Math.random() * allChars.length)];
        }

        passwordBox.value = password;

    });

    document.getElementById("copy").addEventListener('click', function copyPassword() {  
        passwordBox.select();
        document.execCommand('copy');
    });

})