function cambiarH1() {
    let h1 = document.getElementById("h1");

    h1.textContent = "DOM Manipulado";
    h1.classList.add("titulo-activo");
    h1.style.color = "red";  
}

function cambiarParrafo() {
    let p = document.getElementById("parrafo");
    p.innerHTML = "<strong>DOM Manipulado</strong>";
    p.style.color = "green";
}

function cambiarCeldas() {
    document.getElementById("celda1").textContent = "Nueva Celda 1";
    document.getElementById("celda2").textContent = "Nueva Celda 2";
}

function nuevaCelda() {
    let tabla = document.querySelector("table");
    let nuevaFila = tabla.insertRow();

    let celda = nuevaFila.insertCell();
    celda.textContent = "Celda nueva";
}

function colorCeldas() {
    document.getElementById("celda1").style.background = "yellow";
    document.getElementById("celda2").style.background = "yellow";
}

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("celda1").onclick = function () {
        this.style.backgroundColor = "yellow";
    };

    document.getElementById("celda2").onclick = function () {
        this.style.backgroundColor = "yellow";
    };
});

function actividad1() {
    let nombre = document.getElementById("nombre1").value;
    let apellidos = document.getElementById("apellidos1").value;
    let edad = parseInt(document.getElementById("edad1").value);

    let año = new Date().getFullYear() - edad;

    let texto = "";

    if (edad >= 18) {
        texto = `${nombre} ${apellidos} tiene ${edad} años (${año}) y es mayor de edad`;
    } else {
        texto = `${nombre} ${apellidos} tiene ${edad} años (${año}) y es menor de edad`;
    }

    document.getElementById("res1").innerHTML = texto;
}


function actividad2() {
    let num = parseInt(document.getElementById("num2").value);
    let res = (num % 2 === 0) ? "Es divisible entre 2" : "No es divisible entre 2";
    document.getElementById("res2").innerHTML = res;
}


function actividad3() {
    let estaciones = ["Invierno", "Primavera", "Verano", "Otoño"];
    let num = parseInt(document.getElementById("num3").value);

    document.getElementById("res3").innerHTML =
        `<b>${estaciones[num - 1]}</b>`;
}


function actividad4() {
    let mes = document.getElementById("mes4").value.toLowerCase();
    let estacion = "";

    switch (mes) {
        case "diciembre":
        case "enero":
        case "febrero":
            estacion = "Invierno"; break;
        case "marzo":
        case "abril":
        case "mayo":
            estacion = "Primavera"; break;
        case "junio":
        case "julio":
        case "agosto":
            estacion = "Verano"; break;
        case "septiembre":
        case "octubre":
        case "noviembre":
            estacion = "Otoño"; break;
        default:
            estacion = "Mes inválido";
    }

    document.getElementById("res4").innerHTML = estacion;
}


function actividad5() {
    let mes = document.getElementById("mes5").value.toLowerCase();
    let estacion = "";

    if (mes === "diciembre" || mes === "enero" || mes === "febrero") {
        estacion = "Invierno";
    } else if (mes === "marzo" || mes === "abril" || mes === "mayo") {
        estacion = "Primavera";
    } else if (mes === "junio" || mes === "julio" || mes === "agosto") {
        estacion = "Verano";
    } else {
        estacion = "Otoño";
    }

    document.getElementById("res5").innerHTML = estacion;
}


function actividad6() {
    let nombre = document.getElementById("nombre6").value;
    let cantidad = parseFloat(document.getElementById("cantidad6").value);
    let total = 0;

    if (cantidad >= 5000) {
        total = cantidad * 1.10;
    } else if (cantidad > 3000) {
        total = cantidad * 1.15;
    } else {
        total = cantidad * 1.21;
    }

    document.getElementById("res6").innerHTML =
        `${nombre} debe pagar ${total.toFixed(2)} €`;
}


function actividad7() {
    let nombre = document.getElementById("nombre7").value;
    let provincia = document.getElementById("provincia7").value;
    let pueblo = document.getElementById("pueblo7").value;

    document.getElementById("res7").innerHTML =
        `${nombre}, eres ${provincia} de ${pueblo}`;
}


function kmToMiles() {
    let km = parseFloat(document.getElementById("km8").value);
    let res = km / 1.60934;
    document.getElementById("res8").innerHTML = res.toFixed(2) + " millas";
}

function milesToKm() {
    let mi = parseFloat(document.getElementById("millas8").value);
    let res = mi * 1.60934;
    document.getElementById("res8").innerHTML = res.toFixed(2) + " km";
}


function actividad9() {
    let texto = document.getElementById("text9").value;
    document.getElementById("res9").innerHTML =
        "Caracteres: " + texto.length;
}


function actividad10() {
    let p1 = document.getElementById("pal1").value;
    let p2 = document.getElementById("pal2").value;

    alert(p1.length > p2.length ? p1 : p2);
}


function actividad11() {
    let n = parseInt(document.getElementById("num11").value);
    let suma = 0;

    for (let i = 0; i <= n; i++) {
        suma += i;
    }

    document.getElementById("res11").innerHTML = suma;
}

const recetas = [
    { id: 1, nombrereceta: "Salmorejo", ingredientes: "tomate,aceite,pan" },
    { id: 2, nombrereceta: "Gachas", ingredientes: "harina,agua,azucar" },
    { id: 3, nombrereceta: "Migas", ingredientes: "pan,ajos,aceite" }
];

function mostrarRecetas() {
    let html = `
    <table border="1" cellpadding="8">
        <tr>
            <th>ID</th>
            <th>Nombre Receta</th>
            <th>Ingredientes</th>
        </tr>
    `;

    recetas.forEach(receta => {
        let ingredientesFormateados = receta.ingredientes
            .replaceAll("aceite", "aceite")
            .replaceAll("azucar", "azúcar")
            .replaceAll(",", ", ");

        html += `
        <tr>
            <td>${receta.id}</td>
            <td>${receta.nombrereceta}</td>
            <td>${ingredientesFormateados}</td>
        </tr>
        `;
    });

    html += `</table>`;

    document.getElementById("res12").innerHTML = html;
}

const agenda = new Map();

function agregarUsuario() {

    let nombre =
        document.getElementById("nombre15").value;

    let dni =
        document.getElementById("dni15").value;

    if (nombre === "" || dni === "") {
        alert("Rellena todos los campos");
        return;
    }

    agenda.set(dni, nombre);

    alert("Usuario añadido");

    document.getElementById("nombre15").value = "";
    document.getElementById("dni15").value = "";
}

function mostrarAgenda() {

    let salida = "<h3>Agenda de usuarios</h3>";

    agenda.forEach((nombre, dni) => {

        salida += `
            <p>
                <strong>${nombre}</strong> - ${dni}
            </p>
        `;
    });

    document.getElementById("res15").innerHTML =
        salida;
}


function agregarValor(valor) {
    document.getElementById("pantalla").value += valor;
}


function limpiarPantalla() {
    document.getElementById("pantalla").value = "";
}


function borrarUltimo() {
    let pantalla = document.getElementById("pantalla");
    pantalla.value = pantalla.value.slice(0, -1);
}


function calcularResultado() {
    let pantalla = document.getElementById("pantalla");

    try {
        pantalla.value = eval(pantalla.value);
    } catch (error) {
        pantalla.value = "Error";
    }
}