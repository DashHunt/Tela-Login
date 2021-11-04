
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#fpassword');
const cpassword = document.querySelector('#cpassword');
const ConfirmationPassword = document.querySelector('#fidade');

var foo = document.querySelector(".foo");


togglePassword.addEventListener('click', function (e) {
    if (password.value === ""){
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        this.classList.toggle('bi-eye');
    }else{
        this.classList.toggle('bi-eye');
    }
    console.log('clicou')
});


function checkPasswords(){

    let button1 = document.getElementById("fpassword");
    let button2 = document.getElementById("cpassword");  

    //Verifica se senhas são diferentes
    if (password.value != cpassword.value){
        console.log('Senhas diferentes');
        button1.style.backgroundColor = "#FF7F7F";
        button2.style.backgroundColor = "#FF7F7F";
    }else{ 
        button1.style.backgroundColor = "";
        button2.style.backgroundColor = "";
    }
}

//Cria uma função que será usando no keyup e no blue
var f = maxNumber(999);

foo.addEventListener('keyup', f);
foo.addEventListener('blur', f);

function maxNumber(max)
{
    var running = false;
    
    return function () {
        //Para evitar conflito entre o blur e o keyup
        if (running) return;
        
        //Bloqueia multiplas chamadas do blur e keyup
        running = true;
        
        //Se o input for maior que 15.4 ele irá fixa o valor maximo no value
        if (parseFloat(this.value) > max) {
            this.value = 999;
        }
        
        //Habilita novamente as chamadas do blur e keyup
        running = false;
    };
}


checkPasswords();



