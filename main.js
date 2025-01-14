/*function cotizar(){
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

cotizar()*/

const Productos = function(nombre, precio, stock){
    this.nombre= nombre
    this.precio = precio
    this.stock = stock
}
let producto1  = new Producto("Pulsera oro 18k",10000,2)
let producto2  = new Producto("Rolex 18k",2500000,1)
let producto3  = new Producto("Cadena Hombre 18k",1850000,1)
let producto4  = new Producto("Cadena Mujer 18k",1200000,1)


let lista = [producto1,producto2,producto3,producto4]


function filtrarProducto(){
    let palabraClave = prompt("Ingrese el producto solicitado")
    let resultado = lista.filter((x)=>x.nombre.toUpperCase().includes(palabraClave))

    if (resultado.length>0){
        console.table(resultado)

    }else{
        alert("no se encontró el producto")
    }
}


function agregarProducto(){
let nombre= prompt("ingresa el nombre del producto")
let precio = prompt("ingresa el precio del producto")
let stock = prompt("ingresa el stock del producto")

if(isNaN(precio) || isNaN(stock) || nombre == ""){
    alert("por favor ingrese valores validos")
    return
}
let producto = new Producto (nombre,precio,stock)
lista.push(producto)
console.log(lista)
}

let agregar = document.getElementById("agregar")
agregar.addEventListener("click",agregarProducto )

let filtrar = document.getElementById("filtrar")
filtrar.addEventListener("click",filtrarProducto)

