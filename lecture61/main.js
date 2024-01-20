'use strict'

let btn = document.getElementById('triggerButton');
btn.addEventListener('click', function(e){
    let inputColorName = document.getElementById('inputColorName');
    let colorNameText = inputColorName.value;
    let inputName = inputColorName.getAttribute('name');
    let showText = document.getElementById('showText');
    showText.textContent = `name属性: ${inputName}, 入力されたテキスト: ${colorNameText}`

}, false);
