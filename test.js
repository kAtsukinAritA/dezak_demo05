document.addEventListener('DOMContentLoaded',function(){
    var btns = document.querySelectorAll('.icon-btn');
    for(var i = 0; i < btns.length; i++){
        btns[i].addEventListener('click',function(){
            alert('クリックされたよ！');
            this.style.color = 'blue';
        },false);
    }
},false);

var btns = document.querySelectorAll('.icon-btn');

//繰り返し処理
for(var i = 0; i < btns.length; i++){
    btns[i].addEventListener('click',function(){
         this.style.color = 'blue';
    },false);
}

//ボタンテキスト色変更
btns[i].addEventListener('click',function(){
     this.style.color = 'blue';
},false);
