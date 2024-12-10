function cotizar(){
    let identificar = true
    let intentos = 2
    let precio = 200
    
    do{
        let usuario = prompt("Ingresá tu Nombre y Apellido");

        if(usuario == null  || usuario == ""){
            alert ("Debe ingresar un Nombre y Apellido para continuar")
            break;
        }

        if ((usuario == "admin" || usuario == "Samuel Flores") && intentos <=2){

            let peso = prompt ("Ingrese el peso aproximado de su artículo en gramos")

            if( peso == null || peso == ""){
                break;
            }
            if(peso === "125"){
                alert("El valor aproximado de su artículo es de " + (precio * peso))
                identificar = false    
            }else{
                alert ("el peso no es válido");
                intentos++
                if(intentos>2){
                    alert("Debe ingresar nuevamente los valores solicitados");
                    break;
                }

            }


      
        }

    }while(indenticar)
}

cotizar()