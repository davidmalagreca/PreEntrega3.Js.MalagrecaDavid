//FUNCIONES DE SALUDO
function saludar(saludo) {
    console.log(saludo);
}

saludar("Bienvenidos a nuestra comunidad. Explora y elige tu estilo.");
saludar("¡Elige entre los artículos deseados para fijar precios!");

//-----------------------------------------------------------------------------------

//PRODUCTOS Y PRECIOS-------------------------------------------------------------
const productos = {
    remera: 23500,
    buzo: 45000,
    pantalon: 75000,
    cardigan: 55000
};

//Inicializamos el carrito
let carrito = {
    remera: 0,
    buzo: 0,
    pantalon: 0,
    cardigan: 0
};

//Cargar carrito desde localStorage
function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
    }
    actualizarVistaCarrito();
}

//Actualizar el carrito en la vista
function actualizarVistaCarrito() {
    console.log("Estado actual del carrito:", carrito);
    // Aquí puedes agregar actualizaciones en la UI si es necesario, por ejemplo, mostrar el número de productos en el carrito.
}

//Guardar el carrito en localStorage
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

//FUNCIONES PARA ACTUALIZAR EL CARRITO Y MOSTRAR EL TOTAL
function actualizarCarrito(producto, accion) {
    if (accion === "añadir") {
        carrito[producto]++;
        console.log(`Añadiste un ${producto} por $${productos[producto].toLocaleString('es-ES')}. Total en el carrito: ${carrito[producto]}`);
        alert(`Agregaste un ${producto} al carrito`);
    } else if (accion === "quitar") {
        if (carrito[producto] > 0) {
            carrito[producto]--;
            console.log(`Quitaste un ${producto}. Total en el carrito: ${carrito[producto]}`);
            alert(`Quitaste un ${producto} del carrito`);
        } else {
            alert(`No hay ${producto} en el carrito para quitar.`);
        }
    }
    guardarCarrito(); // Guardar el carrito actualizado en localStorage
}

//Finalizar compra
function finalizarCompra() {
    let totalCompra = 0;
    for (let producto in carrito) {
        totalCompra += carrito[producto] * productos[producto];
    }

    console.log(`El total de la compra es: $${totalCompra.toLocaleString('es-ES')}`);
    alert(`El total de la compra es: $${totalCompra.toLocaleString('es-ES')}`);
    
    // Si quieres limpiar el carrito después de la compra
    localStorage.removeItem('carrito');
    carrito = { remera: 0, buzo: 0, pantalon: 0, cardigan: 0 };
    actualizarVistaCarrito();
}

// Cargar el carrito cuando se inicia la página
cargarCarrito();

// EVENTOS PARA AÑADIR Y QUITAR PRODUCTOS AL CARRITO

// Botón añadir remera
const añadirCarrito = document.getElementById("añadirCarrito");
const descontarCarrito = document.getElementById("descontarCarrito");

añadirCarrito.addEventListener('click', function () {
    actualizarCarrito('remera', 'añadir');
});

descontarCarrito.addEventListener('click', function () {
    actualizarCarrito('remera', 'quitar');
});

// Botón añadir buzo
const añadirCarrito2 = document.getElementById("añadirCarrito2");
const descontarCarrito2 = document.getElementById("descontarCarrito2");

añadirCarrito2.addEventListener('click', function () {
    actualizarCarrito('buzo', 'añadir');
});

descontarCarrito2.addEventListener('click', function () {
    actualizarCarrito('buzo', 'quitar');
});

// Botón añadir pantalón
const añadirCarrito3 = document.getElementById("añadirCarrito3");
const descontarCarrito3 = document.getElementById("descontarCarrito3");

añadirCarrito3.addEventListener('click', function () {
    actualizarCarrito('pantalon', 'añadir');
});

descontarCarrito3.addEventListener('click', function () {
    actualizarCarrito('pantalon', 'quitar');
});

// Botón añadir cardigan
const añadirCarrito4 = document.getElementById("añadirCarrito4");
const descontarCarrito4 = document.getElementById("descontarCarrito4");

añadirCarrito4.addEventListener('click', function () {
    actualizarCarrito('cardigan', 'añadir');
});

descontarCarrito4.addEventListener('click', function () {
    actualizarCarrito('cardigan', 'quitar');
});

// Botón finalizar compra
const finalizarCompraBtn = document.getElementById("finalizarCompra");
finalizarCompraBtn.addEventListener('click', finalizarCompra);
