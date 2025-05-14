function algo(){

    const signo= document.getElementById("sign").value;
    
 
switch (signo) {
    case "sagitario":
       document.getElementById("pred").innerHTML = "Tendrás una semana movida";
        break;
    case "capricornio":
        document.getElementById("pred").innerHTML = "Eso que esperas llegará";
        break;
    case "Leo":
        document.getElementById("pred").innerHTML = "No te preocupes por el pasado, el futuro es hoy";
        break;
    case "Acuario":
       document.getElementById("pred").innerHTML = "Decepción amorosa";
        break;
    case "Piscis":
        document.getElementById("pred").innerHTML = "Compra la lotería, vendrá la suerte" ;
        break;
    case "Virgo":
        document.getElementById("pred").innerHTML = "Evita usar color rojo" ;
        break;
    case "Tauro":
        document.getElementById("pred").innerHTML = "Un amor del pasado volverá" ;
        break;
    case "Aries":
      document.getElementById("pred").innerHTML = "Si lo crees, lo conseguirás" ;
        break;
    case "Géminis":
       document.getElementById("pred").innerHTML = "Ese empleo que esperas, será tuyo";
        break;
    case "Libra":
       document.getElementById("pred").innerHTML = "No hagas cambios drásticos de imagen" ;
        break;
    case "Escorpio":
       document.getElementById("pred").innerHTML = "Cómpra la lotería, vendrá la suerte" ;
        break;
    case "Cáncer":
        document.getElementById("pred").innerHTML = "Evita usar color negro";
        break;
    default:
        document.getElementById("pred").innerHTML = "Dime tu signo del zodiaco y te diré como irá tu semana :-)";
        break;
}}
