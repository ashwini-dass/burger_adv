document.getElementById("frm").addEventListener("submit",x=>{
    x.preventDefault(); //stops page refresh
    openhomepage(); //userdefined function to open the home page
});

function openhomepage(){
    window.open("https://www.flipkart.com/");
}
//pwdicon
function pwdfunc(){
    var pwd,openeye,closeye;
    pwd = document.getElementById("pwd");
    openeye = document.getElementById("openeye");
    closeye = document.getElementById("closeye");

    if(pwd.type == "password"){
        pwd.type = "text";
        closeye.style.visibility = "hidden";
        openeye.style.visibility = "visible";
    }
    else{
        pwd.type = "password";
        closeye.style.visibility = "visible";
        openeye.style.visibility = "hidden";
    }

}