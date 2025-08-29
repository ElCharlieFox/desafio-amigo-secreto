let amigos = [];

const input = document.getElementById("amigo");
const lista = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function agregarAmigo() {
  const nombre = input.value.trim();
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }
  amigos.push(nombre);
  mostrarNombre();
  input.value = "";
  input.focus();
}

function mostrarNombre() {
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos disponibles para sortear.");
    return;
  }
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];
  resultado.innerHTML = `El amigo sorteado es: <b><em>${amigoSorteado}</em></b>`;
}

function reiniciarLista() {
    amigos = [];
    lista.innerHTML = "";
    resultado.innerHTML = "La lista fue reiniciada";
    input.value = "";
    input.focus();

    setTimeout(() => {
        resultado.innerHTML = "";
        }, 2000);
    console.log("La lista ha sido reiniciada.");
}

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});
