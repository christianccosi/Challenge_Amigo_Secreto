// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido ingresado.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe ingresar al menos dos nombres para realizar el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indiceAleatorio];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 ¡El amigo secreto es: <strong>${nombreSorteado}</strong>! 🎉</li>`;
}
