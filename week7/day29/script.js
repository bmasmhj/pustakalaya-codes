function addUser(){
    let full_name = document.getElementById("full_name");
    let email =  document.getElementById("email");
    let error_msg =  document.getElementById("error_msg");
   
    let err_msg = ""
    let err = false ;

    let full_name_value = full_name.value;
    let email_value = email.value;

    if(full_name_value.trim() == ""){
        full_name.style.border = '1px solid red';
        err_msg = "Full Name";
        err = true;
    }else{
        full_name.style.border = '1px solid gray'
    }

    if(email_value.trim() == ""){
        email.style.border = '1px solid red';
        err_msg += " Email";
        err = true;
    }else{
        email.style.border = '1px solid gray'
    }

    if(err){
        err_msg += " is Missing"
        error_msg.innerHTML = err_msg
    }else{

        document.getElementById('users_data').innerHTML += `
            <tr>
                <td>${full_name_value}
                <td>${email_value}
            </tr>
        `
        // store localy

        let localdata = localStorage.getItem("tabledata");
        let parsedtable = [];
        if(localdata){
            parsedtable = JSON.parse(localdata);
        }
        parsedtable.push({
            name : full_name_value,
            email : email_value
        })

        localStorage.setItem("tabledata", JSON.stringify(parsedtable));
        
        full_name.value = "";
        email.value = "";
        error_msg.innerHTML = "";

    }





}


let localdata = localStorage.getItem("tabledata");
let parsedtable = [];
if(localdata){
    parsedtable = JSON.parse(localdata);
}

for( i=0 ; i < parsedtable.length ; i++){
          document.getElementById('users_data').innerHTML += `
            <tr>
                <td>${parsedtable[i].name}
                <td>${parsedtable[i].email}
            </tr>
        `
}