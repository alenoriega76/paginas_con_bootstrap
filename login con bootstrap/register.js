const nombre= document.getElementById('nombre');
const passwordRigister= document.getElementById('password');
const correo= document.getElementById('email');
const userRigister= document.getElementById('username');
const btn1=document.getElementById('botonRegistrar');

btn1.addEventListener('click',(ev=>{
      ev.preventDefault();
      const datas ={
        nombre:nombre.value,
passwordRigistered:password.value,
correo:email.value,
userRigisteredEmail:username.value
      }
      console.log(datas);
}));