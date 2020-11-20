let email=document.getElementById("inputEmail4");
let pwd=document.getElementById("inputPassword4");
let error1=document.getElementById("error1");
let error2=document.getElementById("error2");
let flag=0;
function validate1(){
    let regexp1=/^([A-Za-z0-9\._!#$%&*+/=?^{|}~-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    let regexp2=/^([A-Za-z0-9\._!#$%&*+@/=?^{|}~-]{7,14})$/
        if(regexp1.test(email.value)){
            error1.innerHTML='Valid email id';
            error1.style.color='green';
            error1.style.border='1px solid green';
            flag+=1;
            }
            else{
            error1.innerHTML='Invalid email id.Should be in the format: abcd@gmail.com';
            error1.style.color='red';
            error1.style.border='1px solid red';
            flag=0;
            }
        if(regexp2.test(pwd.value)){
                error2.innerHTML='Valid password';
                error2.style.color='green';
                error2.style.border='1px solid green';
                flag+=1;
                }
                else{
                error2.innerHTML='Password is too short.Must contain 8 characters';
                error2.style.color='red';
                error2.style.border='1px solid red';
                flag=0;
                }
    if(flag==2){
    return true;
    }
    else{
    return false;
    }
}
