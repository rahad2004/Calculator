const buttons =document.querySelectorAll('button');
const input = document.getElementById('input')
let string = " "


for ( let button of buttons){
    button.addEventListener( 'click' ,function (e){
        if( e.target.innerHTML === "=") {
            string=eval(string);
            input.innerText=string
        }
        else if (e.target.innerHTML === "AC"){
            string = ""
            input.innerText=string
        }
        else if ( e.target.innerHTML==='DEL'){
            string=string.substring(0,string.length-1);
            input.innerText=string
        }
        else{
            string = string + e.target.innerHTML
            input.innerText=string
        }
    })
    
}

