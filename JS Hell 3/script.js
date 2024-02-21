var form = document.querySelector('form')
var inps = document.querySelectorAll('input[type="text"]')
var h4 = document.querySelector('#error')
form.addEventListener('submit',function(ev){
    ev.preventDefault();
    if(inp1.value === '' || inp2.value === ''){
        h4.textContent = 'Error, some fields are missing plz see it again'
        h4.style.color = 'red'
    }
    else{
        console.log(inp1.value, inp2.value)
        h4.textContent =''
    }
})