



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

function guardarFormulario(){
    const datosDelFormulario={
        prenda: inputPrenda.value,
        color: inputColor.value,
        talle: inputTalle.value,
        modelo: inputModelo.value,
        precio: inputPrecio.value,
    }
    let resultado = JSON.stringify(datosDelFormulario)
    localStorage.setItem("datosForm", resultado)
    console.log(resultado)
}


botonTraer.addEventListener("click", traerFormulario);

function traerFormulario() {
    const datosForm = localStorage.getItem("datosForm");
    if (datosForm) {
        const parsedData = JSON.parse(datosForm);
        console.log(parsedData);
    }
}




















let titulo = document.getElementById("titulo")



titulo.addEventListener("mouseover", function() {
    console.log("el mouse paso")
    
})




