// step 1 add click event handler with the login button 
document.getElementById('btn-submit').addEventListener('click', function () {

    const emailFeild = document.getElementById('user-email');
    const email = emailFeild.value;

    const passwordFeild = document.getElementById('user-password')
    const password = passwordFeild.value;

    if (email === 'abc@fahim.com' && password === 'B211002') {
        window.location.href = 'deposit.html';
    }
    else{
        alert ('Your email or password are wrong')
    }
})

