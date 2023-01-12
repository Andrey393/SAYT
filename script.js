let pagePeremenna =document.querySelector('body');
console.log(pagePeremenna);
//pagePeremenna.classList.remove("font");

//кнопка
let button =document.querySelector('.button-disiner');
console.log(button);
button.onclick = function()
{
    pagePeremenna.classList.toggle("font-black");
    pagePeremenna.classList.toggle("font-white");
};


//текстовое поле

let textVisible= document.querySelector(".text-input")
document.querySelector('input').addEventListener('keydown',function(e)
{
    if(e.keyCode == 13)
    {
        textVisible.textContent=this.value;
    }
});


