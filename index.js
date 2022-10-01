function validate() {
    let fristName = document.getElementById('frist-name').value
    let lastName = document.getElementById('last-name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let tnC = document.getElementById('tnC').checked

    if(fristName.length >= 3) {
        document.getElementById('frist-name-valid').style.display = 'block'
        document.getElementById('frist-name-invalid').style.display = 'none'
    }
    else{
        document.getElementById('frist-name-invalid').style.display = 'block'
        document.getElementById('frist-name-valid').style.display = 'none'
    }

    if(lastName.length >= 3) {
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
    }
    else{
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('last-name-valid').style.display = 'none'
    }
    
if(
    email &&
    email.includes("@") &&
    email.includes(".") &&
    email.lastIndexOf(".") <= email.length-3 &&
    email.indexOf('@') !==0
){
    document.getElementById('email-valid').style.display = 'block'
    document.getElementById('email-invalid').style.display = 'none'
}else{
    document.getElementById('email-invalid').style.display = 'block'
    document.getElementById('email-valid').style.display = 'none'
    
}
if(password.length >= 8) {
    document.getElementById('password-valid').style.display = 'block'
    document.getElementById('password-invalid').style.display = 'none'
}
else{
    document.getElementById('password-invalid').style.display = 'block'
    document.getElementById('password-valid').style.display = 'none'
}

    if (!tnC) {
        document.getElementById('tnC-invalid').style.display = 'block'
    }
    else {
        document.getElementById('tnC-invalid').style.display = 'none'
        error = true
    }

if(error){
    alert("your details have been submited")

    document.getElementById('frist-name').value = ''
    document.getElementById('last-name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('password').value = ''
    document.getElementById('tnC').checked = false


    document.getElementById('frist-name').style.display = 'none'
    document.getElementById('last-name').style.display = 'none'
    document.getElementById('email').style.display = 'none'
    document.getElementById('password').style.display = 'none'

}

}
