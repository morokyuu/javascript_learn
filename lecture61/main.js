'use strict'

let btn = document.getElementById('triggerButton');
btn.addEventListener('click', function(e){
    let inputA = document.getElementById('inputA');
    let inputAtext = inputA.value;
    let inputAName = inputA.getAttribute('name');

    let inputB = document.getElementById('inputB');
    let inputBtext = inputB.value;
    let inputBName = inputB.getAttribute('name');

    let showTextA = document.getElementById('showTextA');
    let showTextB = document.getElementById('showTextB');
    let showTextAns = document.getElementById('showTextAns');
    showTextA.textContent = `name属性: ${inputAName}, 入力されたテキスト: ${inputAtext}`
    showTextB.textContent = `name属性: ${inputBName}, 入力されたテキスト: ${inputBtext}`
    showTextAns.textContent = `${Number(inputAtext) + Number(inputBtext)}`

}, false);
