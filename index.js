const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#passwordConfirm')



let fullKey = ''
function edValueKeyPress(){
        var edValue = password
        var s = edValue.value;
    
        return s
}

function edValueKeyPressConfirm(){
    var edValue = confirmPassword
    var s = edValue.value;
    if(edValueKeyPress()){
        if(edValueKeyPress() == s){
            password.style.borderColor = "green"
            confirmPassword.style.borderColor = "green"
        }else{
            password.style.borderColor = "red"
            confirmPassword.style.borderColor = "red"
            console.log("Not working")
        }
    }

   
    
}

function checkIsOkey(e){
    if(e.target.checkValidity()){
        console.log("Working")
    }else{
        e.target.placeholder = "Please fill again"
    }
}

