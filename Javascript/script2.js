//Prueba
//console.log ("Hola Console.Log")


/* -------------------- */
//Array Chainsaw man - Pág.2
const productos2 = [
    {
        id: 24,
        imagen: "../img/Chainsaw-man/CV1.webp",
        volumen: "Volumen 01",
        nombre: "Perro y Motosierra",
        precio: 1800
    },
    {
        id: 25,
        imagen: "../img/Chainsaw-man/CV2.webp",
        volumen: "Volumen 02",
        nombre: "Motosierra vs Muerciélago",
        precio: 1800
    },
    {
        id: 26,
        imagen: "../img/Chainsaw-man/CV3.webp",
        volumen: "Volumen 03",
        nombre: "Matar a Denji",
        precio: 1800
    },
    {
        id: 27,
        imagen: "../img/Chainsaw-man/CV4.webp",
        volumen: "Volumen 04",
        nombre: "La pistola es más poderosa",
        precio: 1800
    },
    {
        id: 28,
        imagen: "../img/Chainsaw-man/CV5.webp",
        volumen: "Volumen 05",
        nombre: "Menor",
        precio: 1800
    },
    {
        id: 29,
        imagen: "../img/Chainsaw-man/CV6.webp",
        volumen: "Volumen 06",
        nombre: "Boom Boom Boom",
        precio: 1800
    },
    {
        id: 30,
        imagen: "../img/Chainsaw-man/CV7.webp",
        volumen: "Volumen 07",
        nombre: "Es un sueño",
        precio: 1800
    },
    {
        id: 31,
        imagen: "../img/Chainsaw-man/CV8.webp",
        volumen: "Volumen 08",
        nombre: "Super lío",
        precio: 1800
    },
    {
        id: 32,
        imagen: "../img/Chainsaw-man/CV9.webp",
        volumen: "Volumen 09",
        nombre: "Baño",
        precio: 1800
    },
    {
        id: 33,
        imagen: "../img/Chainsaw-man/CV10.webp",
        volumen: "Volumen 10",
        nombre: "Sentimientos de un perro",
        precio: 1800
    },
    {
        id: 34,
        imagen: "../img/Chainsaw-man/CV11.webp",
        volumen: "Volumen 11",
        nombre: "Tú puedes, motosierra",
        precio: 1800
    },
]



//Llamamos a la clase:
let contenedorProductos2 = document.getElementById ("contenedorProductos2")


//Recorremos el array y armamos las cards:
productos2.forEach((productoChainsaw)=>{

    let contenedor2 = document.createElement("div")

    contenedor2.innerHTML = `
    <div class="col">
        <div class="card">
            <img src="${productoChainsaw.imagen}" id="card_img" class="card-img-top" alt="Kimetsu_no_yaiba">
            <div class="card-body">
            <h5 class="card-title">${productoChainsaw.nombre}</h5>
            <p class="card-text">${productoChainsaw.volumen}</p>
            <h4 class="card-text">${ "$" + productoChainsaw.precio}</h4>
            </div>
            <button id="botonComprar2" type="button" class="btn btn-dark">Agregar al carrito</button>
        </div>
    </div>
    `

    contenedorProductos2.append(contenedor2)


    //botonComprar:
    let botonComprar2 = document.getElementById("botonComprar2")
    botonComprar2 = document.addEventListener ("click", agregarCarrito)

})


//botonComprar:
function agregarCarrito(){
    console.log ("Agregar al carrito numero 2")
}



//Usamos Local Storage y JSON:
const enJSON2 = JSON.stringify(productos2);

console.log (enJSON2);
localStorage.setItem("producto2", enJSON2)
