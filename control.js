
document.getElementById("boton").addEventListener("click", function () {
    let apodo = document.getElementById("usua").value
    let pass = document.getElementById("contraseña").value

    validador(apodo, pass)
})
var usuario = [
    { nombre: "Ivan", password: "I123", dinero: 10 },
    { nombre: "Benja", password: "B123", dinero: 10 },
    { nombre: "Martin", password: "M123", dinero: 10 },
]
let usuarioSelecionado
let saldousario = document.getElementById("loquetienes")
function validador(nombre, password) {
    for (let index = 0; index < usuario.length; index++) {
        if (nombre === usuario[index].nombre && password === usuario[index].password) {
            alert("login exitoso")
            usuarioSelecionado = usuario[index]
            document.getElementById("apodo").textContent = usuarioSelecionado.nombre
            document.getElementById("form").style.display = "none"
            document.getElementById("navbar").style.display = "block"
            document.getElementById("imagnescorridas").style.display = "block"
            document.getElementById("cartausuario").style.display = "block"
            imprimeSaldo()
        } else if (nombre === "" || password === "") {
            alert("los campos son obligatorios")
        } else if (usuario[index].nombre === nombre) {
            alert("los campos no coniciden")
        }
    }
}
function imprimeSaldo() {
    let saldo = usuarioSelecionado.dinero
    saldousario.textContent = saldo
}

document.getElementById("botonD").addEventListener("click", function () {
    let aumentoCapital = document.getElementById("capital").value
    aumentoC(aumentoCapital)
})
function aumentoC(capital) {
    if (usuarioSelecionado.dinero + Number(capital) > 990) {
        alert("No puedes depositar esta cantidad")
    } else {
        usuarioSelecionado.dinero += Number(capital)
        document.getElementById("ingresa").textContent = "Deporistaste  $" + capital
        document.getElementById("loquetienes").textContent = usuarioSelecionado.dinero
    }

}

document.getElementById("botonR").addEventListener("click", function () {
    let disminuyeCapital = document.getElementById("capital").value
    bajaCapital(disminuyeCapital)
})
function bajaCapital(capital) {
    if ( usuarioSelecionado.dinero - Number(capital)<10) {
        alert("No puedes retirar esta cantidad")
    } else{
        usuarioSelecionado.dinero -= Number(capital)
        document.getElementById("ingresa").textContent = "Retiraste  $" + capital
        document.getElementById("loquetienes").textContent = usuarioSelecionado.dinero
    }
   
}
document.getElementById("nuevoSaldo").addEventListener("click", function () {

    dineroActualizado()
})
function dineroActualizado() {
    document.getElementById("saldo").textContent = "Lo que tienes es:" + usuarioSelecionado.dinero
}

