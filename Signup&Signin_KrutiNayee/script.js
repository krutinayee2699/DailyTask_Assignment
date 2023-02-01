function validate() {
    var name = document.forms.regform.username.value;
    var password = document.forms.regform.password.value;
    var pass2 = document.forms.regform.cpassword.value;
    var mobile = document.forms.regform.contact.value;
    var emailid = document.forms.regform.email.value;
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

    
    // var reg = document.forms.regform.register.value;
    // if(reg == ""){
    //     swal({
    //         title: "Successfully Registered!!!",
    //         text: "Press OK To Go On Next Page!",
    //         icon: "success",
    //         button: "OK",
    //     }).then(function() {
    //         window.location = "signin.html";});
    //     // email.focus();
    //     return false;
    // }

    if ( !regEmail.test(emailid)) {
        swal({
            title: "OOPs!!! Enter Valid EmailId.",
            text: "Press OK To Enter Email-Id!",
            icon: "warning",
            button: "OK",
        });
        // email.focus();
        return false;
    } else if (isNaN(mobile)) {
        swal({
            title: "OOPs!!! Enter Numeric Value Only.",
            text: "Press OK To Enter Contact Number!",
            icon: "warning",
            button: "OK",
        });
        return false;
    }


    if (name == "") {
        swal({
            title: "OOPs!!! Please Enter UserName.",
            text: "Press OK To Enter UserName!",
            icon: "warning",
            button: "OK",
        });
        return false;
    } else if (password.length < 6) {
        swal({
            title: "OOPs!!! Password Must Be 6 Character Long.",
            text: "Press OK To Enter Password!",
            icon: "warning",
            button: "OK",
        });
        return false;
    }




    // if (isNaN(mobile)){
    //     alert("Enter numeric value only");
    //     return false;
    //   }else if(mobile==null || mobile==""){
    //   alert("Please enter mobile number");  
    //     return false; 
    // }



    if (password == pass2) {
        return true;
    }
    else {
        swal({
            title: "OOPs!!! Password Must Be Same.",
            text: "Press OK To Enter Same Password!",
            icon: "warning",
            button: "OK",
        });
        return false;
    }

}

var showIcon = document.getElementById("show");
var password = document.getElementById("password");
var show = false;

function handleShow() {
    if (show == false) {
        showIcon.className = "fa-solid fa-eye-slash icon-right";
        password.type = "text";
        show = true;
    } else {
        showIcon.className = "fa-solid fa-eye icon-right";
        password.type = "password";
        show = false;
    }
}

var showIcon2 = document.getElementById("show2");
var cpassword = document.getElementById("cpassword");
var show2 = false;

function handleShow2() {
    if (show2 == false) {
        showIcon2.className = "fa-solid fa-eye-slash icon-right";
        cpassword.type = "text";
        show2 = true;
    } else {
        showIcon2.className = "fa-solid fa-eye icon-right";
        cpassword.type = "password";
        show2 = false;
    }
}

// var func = document.getElementById("btn");
// var btn = false;

// function function1(){
//     swal({
//         title: "succesfully done",
//         text: "Press OK To Enter Email-Id!",
//         icon: "success",
//         button: "OK",
//     });
// }



// let btn = document.getElementById("btn");
// btn.addEventListener("click",function(){
//     let register = document.getElementById("register").value;
//     if(register == ""){
//         swal("success","Please enter fields Properly","success");
//     }else{
//         swal("success",register,"success");
//     }
    
// })