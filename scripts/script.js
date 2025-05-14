 

 function algo() {

    const signo = document.getElementById("sign").value;
   

    switch (signo) {
        case "sagitario":
            document.getElementById("pred").innerHTML = "Tendrás una semana movida";
            break;
        case "capricornio":
            document.getElementById("pred").innerHTML = "Eso que esperas, llegará";
            break;
        case "leo":
            document.getElementById("pred").innerHTML = "No te preocupes por el pasado, el futuro es hoy";
            break;
        case "acuario":
            document.getElementById("pred").innerHTML = "Decepción amorosa";
            break;
        case "piscis":
            document.getElementById("pred").innerHTML = "Compra la lotería, vendrá la suerte";
            break;
        case "virgo":
            document.getElementById("pred").innerHTML = "Evita usar color rojo";
            break;
        case "tauro":
            document.getElementById("pred").innerHTML = "Un amor del pasado volverá";
            break;
        case "aries":
            document.getElementById("pred").innerHTML = "Si lo crees, lo conseguirás";
            break;
        case "geminis":
            document.getElementById("pred").innerHTML = "Ese empleo que esperas, será tuyo";
            break;
        case "libra":
            document.getElementById("pred").innerHTML = "No hagas cambios drásticos de imagen";
            break;
        case "escorpio":
            document.getElementById("pred").innerHTML = "Cómpra la lotería, vendrá la suerte";
            break;
        case "cáncer":
            document.getElementById("pred").innerHTML = "Evita usar color negro";
            break;
        default:
            document.getElementById("pred").innerHTML = "Dime tu signo del zodiaco y te diré como irá tu semana :-)";
            break;
    }
}
