
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const button = document.getElementById("submit")
var fields = [username,email,password,password2];

// show input errors
function showError(input,messege){
    input.parentElement.className="form-control error"
    input.parentElement.querySelector("small").innerText = messege;
}
// show sucess
function showSuccess(input){
    input.parentElement.className="form-control success"
}
// check required fields
function checkRequired(inputarr){
    inputarr.forEach(function(input){
        if(input.value.trim()==='' && input.value.length < 6){
            showError(input, `${getFieldName(input)} is required`);
        }else{
            showSuccess(input);
	    return true
        }
    });
}
////----------getFieldName----///
function getFieldName(input){
    fieldName = input.id.charAt(0).toUpperCase()+input.id.slice(1);
    if(fieldName==="Password2"){
        return "Again Password"
    }else{
        return fieldName;
	return true;
    }
}
///----checkLength---///
function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input,`${getFieldName(input)} must be at least ${min} character`);
    }else if (input.value.length > max){
        showError(input, `${getFieldName(input)} must be ${max} character`)
    }else{
        showSuccess(input);
	return true;
    }
}
//---matchPassword--///
function matchPassword(input1,input2,min,max){
    if (input1.value !== input2.value){
        showError(input2,"Password don't match")
    }else if (input2.value.length < min){
        showError(input2,`${getFieldName(input2)} must be at least ${min} character`);
    }else if (input2.value.length > max){
        showError(input2, `${getFieldName(input2)} must be ${max} character`)
    }else{
        showSuccess(input2);
	return true;
    }
}

///-----------------------------------------------------------------///

form.addEventListener("submit",function(e){
    e.preventDefault();
    checkRequired([username,email,password,password2]);
    checkLength(username,6,15);
    checkLength(password,6,15);
    matchPassword(password,password2,6,15);
})
//--------------------------------------------------------//
