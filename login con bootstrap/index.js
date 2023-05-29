const username= document.getElementById('user ');
const password= document.getElementById('pass') ;
const btn = document.getElementById('boton');


btn.addEventListener('click',(ev)=>{
    ev.preventDefault();
    const data ={
        username:user.value,
        password:pass.value,
        
    }
    console.log(data);
});
