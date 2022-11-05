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
    let firstEdit = document.getElementById("firstEdit");
    let secondEdit = document.getElementById("secondEdit");
    let thirdEdit = document.getElementById("thirdEdit");


    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let lastName = document.getElementById("lastName").value;
        let firstName = document.getElementById("firstName").value;

        document.getElementById("lastName").value = "";
        document.getElementById("firstName").value = "";
        const switchId = Number(selectedUser.innerHTML[0])
        console.log(firstNames);
        console.log(typeof switchId);
        //　数字以外の場合は処理を終了
        if (isNaN(switchId)) {
            alert("please select user");
            return;
        }
        lastNames[switchId - 1].innerHTML = lastName;
        firstNames[switchId - 1].innerHTML = firstName;
    });

    function handleInputName(e, id) {
        e.preventDefault();
        selectedUser.innerHTML = `${id.innerHTML}番目のユーザーが選択されました`;
    }

    function handleEditName(e, id) {
        e.preventDefault();
        let firstName = firstNames[id].innerHTML;
        let lastName = lastNames[id].innerHTML;
        document.getElementById("lastName").value = lastName;
        document.getElementById("firstName").value = firstName;
    }

    firstId.addEventListener("click", (e) => {
        handleInputName(e, firstId);
    });

    secondId.addEventListener("click", (e) => {
        handleInputName(e, secondId);
    });

    thirdId.addEventListener("click", (e) => {
        handleInputName(e, thirdId);
    });

    firstEdit.addEventListener("click", (e) => {
        handleEditName(e, 0);
    });

    secondEdit.addEventListener("click", (e) => {
        handleEditName(e, 1);
    });

    thirdEdit.addEventListener("click", (e) => {
        handleEditName(e, 2);
    });


});