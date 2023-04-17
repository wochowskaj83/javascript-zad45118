let myname = document.querySelector('#name');
let mysurname = document.querySelector('#surname')
let myphone = document.querySelector('#phone')

document.querySelector("#wyswietl").onclick = function dodaj() {
    myname.textContent = document.getElementById("fname").value;
    mysurname.textContent = document.getElementById("lname").value;
    myphone.textContent = document.getElementById("tel").value;
}
