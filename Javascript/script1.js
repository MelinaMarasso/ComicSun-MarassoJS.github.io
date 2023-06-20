//Prueba
//console.log ("Hola Console.Log")


/* -------------------- */
//Array Kimetsu No Yaiba - Pág.1
const productos1 = [
    {
        id: 1,
        imagen: "../img/Kimetsu-no-yaiba/KV1.webp",
        volumen: "Volumen 01",
        nombre: "Crueldad",
        precio: 2000
    },
    {
        id: 2,
        imagen: "../img/Kimetsu-no-yaiba/KV2.webp",
        volumen: "Volumen 02",
        nombre: "Eras tú",
        precio: 2000

    },
    {
        id: 3,
        imagen: "../img/Kimetsu-no-yaiba/KV3.webp",
        volumen: "Volumen 03",
        nombre: "Cree en ti mismo",
        precio: 2000

    },
    {
        id: 4,
        imagen: "../img/Kimetsu-no-yaiba/KV4.webp",
        volumen: "Volumen 04",
        nombre: "La espada robusta",
        precio: 2000

    },
    {
        id: 5,
        imagen: "../img/Kimetsu-no-yaiba/KV5.webp",
        volumen: "Volumen 05",
        nombre: "Hacia el infierno",
        precio: 2000

    },
    {
        id: 6,
        imagen: "../img/Kimetsu-no-yaiba/KV6.webp",
        volumen: "Volumen 06",
        nombre: "El cuerpo de exterminio de demonios se reúnen",
        precio: 2000

    },
    {
        id: 7,
        imagen: "../img/Kimetsu-no-yaiba/KV7.webp",
        volumen: "Volumen 07",
        nombre: "Ataque y defensa en espacios reducidos",
        precio: 2000

    },
    {
        id: 8,
        imagen: "../img/Kimetsu-no-yaiba/KV8.webp",
        volumen: "Volumen 08",
        nombre: "La fuerza de un pilar",
        precio: 2000

    },
    {
        id: 9,
        imagen: "../img/Kimetsu-no-yaiba/KV9.webp",
        volumen: "Volumen 09",
        nombre: "Operación: Distrito del entretenimiento",
        precio: 2000

    },
    {
        id: 10,
        imagen: "../img/Kimetsu-no-yaiba/KV10.webp",
        volumen: "Volumen 10",
        nombre: "Humano y demonio",
        precio: 2000

    },
    {
        id: 11,
        imagen: "../img/Kimetsu-no-yaiba/KV11.webp",
        volumen: "Volumen 11",
        nombre: "Una pelea cerrada",
        precio: 2000

    },
    {
        id: 12,
        imagen: "../img/Kimetsu-no-yaiba/KV12.webp",
        volumen: "Volumen 12",
        nombre: "Los rangos superiores se reúnen",
        precio: 2000

    },
    {
        id: 13,
        imagen: "../img/Kimetsu-no-yaiba/KV13.webp",
        volumen: "Volumen 13",
        nombre: "Transiciones",
        precio: 2000

    },
    {
        id: 14,
        imagen: "../img/Kimetsu-no-yaiba/KV14.webp",
        volumen: "Volumen 14",
        nombre: "El Mu en Muichiro",
        precio: 2000

    },
    {
        id: 15,
        imagen: "../img/Kimetsu-no-yaiba/KV15.webp",
        volumen: "Volumen 15",
        nombre: "El sol sale y brilla la luz",
        precio: 2000

    },
    {
        id: 16,
        imagen: "../img/Kimetsu-no-yaiba/KV16.webp",
        volumen: "Volumen 16",
        nombre: "Indestructible",
        precio: 2000

    },
    {
        id: 17,
        imagen: "../img/Kimetsu-no-yaiba/KV17.webp",
        volumen: "Volumen 17",
        nombre: "El sucesor",
        precio: 2000

    },
    {
        id: 18,
        imagen: "../img/Kimetsu-no-yaiba/KV18.webp",
        volumen: "Volumen 18",
        nombre: "Asaltado por los recuerdos",
        precio: 2000

    },
    {
        id: 19,
        imagen: "../img/Kimetsu-no-yaiba/KV19.webp",
        volumen: "Volumen 19",
        nombre: "Aleteo de alas de mariposa",
        precio: 2000

    },  
    {
        id: 20,
        imagen: "../img/Kimetsu-no-yaiba/KV20.webp",
        volumen: "Volumen 20",
        nombre: "Camino abierto para una firme convicción",
        precio: 2000

    },
    {
        id: 21,
        imagen: "../img/Kimetsu-no-yaiba/KV21.webp",
        volumen: "Volumen 21",
        nombre: "Recuerdos del pasado",
        precio: 2000

    },
    {
        id: 22,
        imagen: "../img/Kimetsu-no-yaiba/KV22.webp",
        volumen: "Volumen 22",
        nombre: "La rueda del destino",
        precio: 2000

    },
    {
        id: 23,
        imagen: "../img/Kimetsu-no-yaiba/KV23.webp",
        volumen: "Volumen 23",
        nombre: "Vidas que resplandecen a través de los tiempos",
        precio: 2000

    },
]



//Llamamos a las clases:
let contenedorProductos1 = document.getElementById("contenedorProductos1")


//Recorremos el array y armamos las cards:
productos1.forEach((productoKimetsu)=>{

    let contenedor1 = document.createElement("div")

    contenedor1.innerHTML = `
    <div class="col">
        <div class="card">
            <img src="${productoKimetsu.imagen}" class="card-img-top" alt="Kimetsu_no_yaiba">
            <div class="card-body">
                <h5 class="card-title">${productoKimetsu.nombre}</h5>
                <p class="card-text">${productoKimetsu.volumen}</p>
                <h4 class="card-text">${ "$" + productoKimetsu.precio}</h4>
            </div>
            <button id="botonComprar1" type="button" class="btn btn-dark">Agregar al carrito</button>
        </div>
    </div>
    `

    contenedorProductos1.append(contenedor1)
    

    //botonComprar:
    let botonComprar1 = document.getElementById("botonComprar1")
    botonComprar1 = document.addEventListener ("click", agregarCarrito)

})


//botonComprar:
function agregarCarrito(){
    console.log ("Agregar al Carrito numero 1")
}



//Usamos Session Storage:
let usuario1 = prompt("Ingrese su nombre completo")
let contraseña1 = prompt ("Ingrese su contraseña")

//Almacenamos los datos:
sessionStorage.setItem("usuarioX", usuario1)
sessionStorage.setItem("contraseñaX", contraseña1)

//Recuperamos los datos:
let usuarioRecuperado1 = sessionStorage.getItem ("usuarioX")
let contraseñaRecuperada1 = sessionStorage.getItem ("contraseñaX")

//Mostramos los datos:
console.log (`Tu usuario es: ${usuarioRecuperado1}`)
console.log (`Tu contraseña es: ${contraseñaRecuperada1}`)
