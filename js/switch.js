let log = document.getElementById("login");
let reg = document.getElementById("register");
let btn = document.getElementById("btn");

function login()
{
    log.style.left = "50px";
    reg.style.left = "450px";
    btn.style.left = "0";
}

function register()
{
    log.style.left = "-400px";
    reg.style.left = "50px";
    btn.style.left = "110px";
}