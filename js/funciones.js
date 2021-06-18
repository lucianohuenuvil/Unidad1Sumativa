

//Definiendo un arreglo nombre de errores
var arreglo = new Array();
arreglo[0]="errorNombre";
arreglo[1]="errorApellido";
arreglo[2]="errorEmail";
arreglo[3]="errorUsuario";
arreglo[4]="errorPassword";
arreglo[5]="errorConfirmar";

var arregloid = new Array();
arregloid[0]="nombre";
arregloid[1]="apellido";
arregloid[2]="email";
arregloid[3]="user";
arregloid[4]="password";
arregloid[5]="confirmarpassword";



function validar(){
    var entrada = new Array();
    entrada[0]=document.getElementById('nombre').value;
    entrada[1]=document.getElementById('apellido').value;
    entrada[2]=document.getElementById('email').value;
    entrada[3]=document.getElementById('user').value;
    entrada[4]=document.getElementById('password').value;
    entrada[5]=document.getElementById('confirmarpassword').value;

    var error = new Array();
    error[0] = "<span style='color: red'>Porfavor ingrese el nombre</span>";
    error[1] = "<span style='color: red'>Porfavor ingrese el apellido!!</span>";
    error[2] = "<span style='color: red'>Porfavor ingrese el email!!</span>";
    error[3] = "<span style='color: red'>Porfavor ingrese el usuario!!</span>";
    error[4] = "<span style='color: red'>Porfavor ingrese el password!!</span>";
    error[5] = "<span style='color: red'>Porfavor ingrese la confirmación del Password!!</span>";

    //Definiendo un ciclo forech
    for(i in entrada){
        var mensajeError = error[i]
        var valorArreglo = arreglo[i]
        //Validando campo requerido
        if(entrada[i]==""){
           
            document.getElementById(valorArreglo).innerHTML = mensajeError;
            document.getElementById(arregloid[i]).classList.add('is-invalid');
             
        }

        //Validar correo
        else if (i==2){
                var arroba = entrada[i].indexOf("@");
                var punto = entrada[i].lastIndexOf(".");

                if(arroba<1 || punto < arroba + 2 || entrada[i].length<punto+2){
                    //document.write(entrada[i]);
                    document.getElementById("email").classList.add('is-invalid');
                    document.getElementById('errorEmail').innerHTML =
                    "<span style='color: red'>Ingrese un email válido</span>";
                }
                else {
                    document.getElementById("email").classList.add('is-valid');
                    document.getElementById("email").classList.remove('is-invalid');
                    document.getElementById('errorEmail').innerHTML =
                    "Campo válido!!";
                }
        }
        else if (i==5){
            var primero = document.getElementById('password').value;
            var segundo = document.getElementById('confirmarpassword').value;

            if(primero != segundo)
            {
                document.getElementById('errorConfirmar').innerHTML =
                "<span style='color: red'>Los password no coinciden!!</span>";
            }
            else{
                document.getElementById(arregloid[i]).classList.remove('is-invalid');
                document.getElementById(arregloid[i]).classList.add('is-valid');
                document.getElementById('errorConfirmar').innerHTML =
                "Campo válido!!";
            }

        }
        else {
           
            document.getElementById(arregloid[i]).classList.remove('is-invalid');
            document.getElementById(arregloid[i]).classList.add('is-valid');
            document.getElementById(valorArreglo).innerHTML =
                "Campo válido!!";
        }

    }

}


function validarTodos(){
    var contador = 0;
    for(i=0; i<6; i++){
        var valorArreglo = arreglo[i];
        if( document.getElementById(valorArreglo).innerHTML == "Campo válido!!")
        {
            
            contador++;
        }
    }
    if(contador == 6){
        document.getElementById('mensajefinal').innerHTML = "Usuario registrado!!"
    }
}