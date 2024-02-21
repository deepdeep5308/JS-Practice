var btn = document.querySelector('button')

var img1 = document.querySelector('#i1')
var img2 = document.querySelector('#i2')
var src1 = img1.src;
var src2 = img2.src;

btn.addEventListener('click',function(){
    img1.src = src2;
    img2.src = src1;
})