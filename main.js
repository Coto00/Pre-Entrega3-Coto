



function Producto(prenda, color, talle, modelo, precio) {
    this.prenda = prenda;
    this.color = color;
    this.talle = talle;
    this.modelo = modelo;
    this.precio = precio;
}

let tallesRemera = ["XS", "S", "M", "L", "XL", "XXL"];
let ProductoRemera1 = new Producto("remeras", "rosa", tallesRemera, "HappyInside", 29.99);
let ProductoRemera2 = new Producto("remeras", "negro", tallesRemera, "HappyInside", 34.99);
let ProductoRemera3 = new Producto("remeras", "blanco", tallesRemera, "BetterLuck", 39.99);
let ProductoRemera4 = new Producto("remeras", "negro", tallesRemera, "BrokenHeart", 27.99);
let ProductoRemera5 = new Producto("remeras", "negro", tallesRemera, "ChampagneProblems", 32.99);

let productos = [ProductoRemera1, ProductoRemera2, ProductoRemera3, ProductoRemera4, ProductoRemera5];

let tallesBuzo1 = ["S", "M", "L"];
let ProductoBuzo1 = new Producto("buzos", "azul", tallesBuzo1, "ComfyStyle", 49.99);
let tallesBuzo2 = ["XS", "M", "XL"];
let ProductoBuzo2 = new Producto("buzos", "gris", tallesBuzo2, "UrbanComfort", 54.99);

productos.push(ProductoBuzo1, ProductoBuzo2);


const enJSON = JSON.stringify(productos)

localStorage.setItem("productos", enJSON)



const inputPrenda = document.querySelector("#prenda");
const inputColor = document.querySelector("#color");
const inputTalle = document.querySelector("#talle");
const inputModelo = document.querySelector("#modelo");
const inputPrecio = document.querySelector("#precio");
const botonGuardar = document.querySelector("#guardar");
const botonTraer = document.querySelector("#traer");


botonGuardar.addEventListener("click", guardarFormulario)


function guardarFormulario() {
    
    const prenda = inputPrenda.value;
    const color = inputColor.value;
    const talle = inputTalle.value;
    const modelo = inputModelo.value;
    const precio = parseFloat(inputPrecio.value); 

    if (prenda && color && talle && modelo && !isNaN(precio)) {
        
        const nuevoProducto = new Producto(prenda, color, talle, modelo, precio);

        productos.push(nuevoProducto);

        const enJSON = JSON.stringify(productos);
        localStorage.setItem("productos", enJSON);

        limpiarFormulario();
        console.log("Producto guardado:", nuevoProducto);
    } else {
        console.log("Por favor, completa todos los campos correctamente.");
        alert("Por favor, completa todos los campos correctamente.")
    }
}

function limpiarFormulario() {
    inputPrenda.value = "";
    inputColor.value = "";
    inputTalle.value = "";
    inputModelo.value = "";
    inputPrecio.value = "";
}


botonTraer.addEventListener("click", traerFormulario);

function traerFormulario() {
    const datosForm = localStorage.getItem("datosForm");
    if (datosForm) {
        const parsedData = JSON.parse(datosForm);
        console.log(parsedData);
    }
}

const botonBorrar = document.querySelector("#borrar");



// ... Tu código anterior ...

// Obtén el elemento donde se mostrará la tabla
const tablaProductos = document.getElementById("tablaProductos");

// Crea la tabla inicial al cargar la página
actualizarTabla();

// Escucha el evento de clic en el botón "traer" para actualizar la tabla
botonTraer.addEventListener("click", actualizarTabla);

function actualizarTabla() {
    // Limpia la tabla antes de actualizar
    tablaProductos.innerHTML = "";

    // Recorre cada producto en el array
    productos.forEach((producto, index) => {
        // Crea una nueva fila en la tabla
        const fila = tablaProductos.insertRow();

        // Añade celdas con las características del producto
        const celdaPrenda = fila.insertCell(0);
        const celdaColor = fila.insertCell(1);
        const celdaTalle = fila.insertCell(2);
        const celdaModelo = fila.insertCell(3);
        const celdaPrecio = fila.insertCell(4);
        const celdaEditar = fila.insertCell(5);
        const celdaEliminar = fila.insertCell(6);

        celdaPrenda.innerText = producto.prenda;
        celdaColor.innerText = producto.color;
        celdaTalle.innerText = producto.talle.join(", "); // Si talles es un array, muestra como cadena
        celdaModelo.innerText = producto.modelo;
        celdaPrecio.innerText = `$${producto.precio.toFixed(2)}`;

        // Agrega botones para editar y eliminar
        const botonEditar = document.createElement("button");
        botonEditar.innerText = "Editar";
        botonEditar.addEventListener("click", () => editarProducto(index));

        const botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.addEventListener("click", () => eliminarProducto(index));

        celdaEditar.appendChild(botonEditar);
        celdaEliminar.appendChild(botonEliminar);
    });
}

// Función para editar un producto
function editarProducto(index) {
    // Implementa la lógica para editar un producto según tus necesidades
    // Puedes abrir un modal o redirigir a otra página para la edición
    console.log("Editar producto en índice:", index);
}

// Función para eliminar un producto
function eliminarProducto(index) {
    // Elimina el producto del array y actualiza la tabla
    productos.splice(index, 1);
    const enJSON = JSON.stringify(productos);
    localStorage.setItem("productos", enJSON);
    actualizarTabla();
    console.log("Producto eliminado en índice:", index);
}















































let titulo = document.getElementById("titulo")



titulo.addEventListener("mouseover", function() {
    console.log("el mouse paso")
    
})




