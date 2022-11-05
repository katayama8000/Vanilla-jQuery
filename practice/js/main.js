"use strict";
console.log('main2.js');

window.addEventListener("DOMContentLoaded", function () {
    let form = document.forms.myform;
    let firstId = document.getElementById("firstId");
    let secondId = document.getElementById("secondId");
    let thirdId = document.getElementById("thirdId");
    let classId = document.getElementsByClassName("nameId");
    console.log(classId);
    let selectedUser = document.getElementById("selectedUser")
    let firstNames = document.getElementsByClassName("firstName");
    let lastNames = document.getElementsByClassName("lastName");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let lastName = document.getElementById("lastName").value;
        let firstName = document.getElementById("firstName").value;

        document.getElementById("lastName").value = "";
        document.getElementById("firstName").value = "";
        const switchId = Number(selectedUser.innerHTML[0])
        console.log(firstNames);
        lastNames[switchId - 1].innerHTML = lastName;
        firstNames[switchId - 1].innerHTML = firstName;
    });

    firstId.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(selectedUser);
        selectedUser.innerHTML = `${firstId.innerHTML}番目のユーザーが選択されました`;
    });

    secondId.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(selectedUser);
        selectedUser.innerHTML = `${secondId.innerHTML}番目のユーザーが選択されました`;
    });

    thirdId.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(selectedUser);
        selectedUser.innerHTML = `${thirdId.innerHTML}番目のユーザーが選択されました`;
    });
});