const Producto = function(nombre, precio, stock){
    this.nombre= nombre
    this.precio = precio
    this.stock = stock
}
let producto1  = new Producto("Pulsera oro 18k",10000,2)
let producto2  = new Producto("Rolex 18k",2500000,1)
let producto3  = new Producto("Cadena Hombre 18k",1850000,1)
let producto4  = new Producto("Cadena Mujer 18k",1200000,1)

let lista = [producto1,producto2,producto3,producto4]

if(localStorage.getItem("productos")){
    lista = JSON.parse(localStorage.getItem("productos"))
}else{
    lista=lista
}

function filtrarProducto(){
    Swal.fire({
        title: 'Ingresá el nombre del producto que desea buscar',
        input: 'text',
        showCancelButton: true,
        ConfirmButtonText:'Buscar',
        showLoaderOnConfirm: true,
        
        preConfirm: (palabraClave)=>{
            palabraClave = palabraClave.trim().toUpperCase()
            let resultado = lista.filter( (producto)=> producto.nombre.toUpperCase().includes(palabraClave))
            if(resultado.length >0){
                Swal.fire({
                    title:'Este es el resultado de tu búsqueda',
                    html:'<table><tr><th>Nombre</th><th>Precio</th><th>Stock</th></tr><table/>'+ 
                    resultado.map((producto)=> `<tr><td>${producto.nombre}</td> <td>${producto.precio}</td> <td>${producto.stock}</td>`),
                })
            }else{
                Swal.fire({
                    title:`no se encuentra coincidencias`,
                    icon:'error',
                    confirmButtonText: `ok`,
                })
            }
        }
    })
}

function agregarProducto(){
    Swal.fire({

        title:`Agregar Producto`,
        html:`<label>Nombre:</label> <input id="nombre-input" class="swal2-input" type="text" autofocus>
            <label>Precio:</label><input id="precio-input" class="swal2-input" type="number" step="0.01">
            <label>Stock:</label><input id="stock-input" class="swal2-input" type="number" step="1">`,
        showCancelButton: true,
        confirmButtonText:"Agregar",
        cancelButtonText: "Cancelar",
    }).then((result)=>{
        if(result.isConfirmed){
            let nombre = document.getElementById("nombre-input").value.trim();
            let precio = document.getElementById("precio-input").value.trim();
            let stock = document.getElementById("stock-input").value.trim();
            if(isNaN(precio) || isNaN(stock) || nombre===""){
                Swal.fire(
                    {
                        icon: "error",
                        title:"Error",
                        text:"por favor ingresa valores validos"
                    }
                ); return
            }
            let producto = new Producto(nombre,precio,stock)
            if (lista.some ((elemento)=> elemento.nombre === producto.nombre)){
                Swal.fire({
                    icon:"warning",
                    title: "Advertencia",
                    text:"El producto ya existe en la lista"
                }); return
                
            }
            lista.push(producto)

            localStorage.setItem("productos", JSON.stringify(lista))

            Swal.fire({
                icon:"succes",
                title:"Producto Agregado",
                text: `se agregó el producto con éxito${producto.nombre} a la lista`,
                timer: 3000
            })
            console.table(lista)
        }
    })
}

let agregar = document.getElementById("agregar")
agregar.addEventListener("click",agregarProducto)

let filtrar = document.getElementById("filtrar")
filtrar.addEventListener("click",filtrarProducto)