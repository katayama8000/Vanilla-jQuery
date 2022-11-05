"use strict";
console.log('main2.js');

window.addEventListener("DOMContentLoaded", function () {
    let form = document.forms.myform;
    let userIdButtons = document.getElementsByClassName("userIdButton");
    let editButtons = document.getElementsByClassName("editButton");
    let selectedUser = document.getElementById("selectedUser")
    let firstNames = document.getElementsByClassName("firstName");
    let lastNames = document.getElementsByClassName("lastName");
    let ages = document.getElementById("age");


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

    ages.addEventListener("change", (e) => {
        console.log(e.target.value);
        if (Number(e.target.value) > 20) {
            alert("20歳以上は登録できません");
        }
    });

    function handleInputName(e, id) {
        console.log(e, id);
        e.preventDefault();
        selectedUser.innerHTML = `${id}番目のユーザーが選択されました`;
    }

    function handleEditName(e, id) {
        console.log(e, id);
        e.preventDefault();
        let firstName = firstNames[id].innerHTML;
        let lastName = lastNames[id].innerHTML;
        document.getElementById("lastName").value = lastName;
        document.getElementById("firstName").value = firstName;
    }

    for (let i = 0; i < userIdButtons.length; i++) {
        userIdButtons[i].addEventListener("click", (e) => {
            handleInputName(e, i + 1);
        });
    }

    for (let i = 0; i < editButtons.length; i++) {
        editButtons[i].addEventListener("click", (e) => {
            handleEditName(e, i);
        });
    }

});