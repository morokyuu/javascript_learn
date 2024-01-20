'use strict'

let btn = document.getElementById('triggerButton');
btn.addEventListener('click', function(e){
//    console.log('clicked');
//    headerTitle = document.getElementById('headerTitle');
//    console.log(headerTitle);
//    //textを取得したいとき
//    console.log(headerTitle.textContent);

    let headerTitle = document.getElementById('headerTitle');
    //text置換
    headerTitle.textContent = "タイトルを変更した";
}, false);
