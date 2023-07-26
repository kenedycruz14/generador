let sessionData = []
let select = document.getElementById("bancos");
let myButton = document.getElementById("guardarsesion");
let dyButton = document.getElementById("cerrarsesion");
let monto = document.getElementById("monto");
let telefono = document.getElementById("telefono");
let cedula = document.getElementById("cedula");



function verifica() {
    if (localStorage.getItem('sessionData') !== null) {
        // El elemento 'nombre' existe en localStorage
        //console.log("lleno");
        monto.style.display = "block";
        telefono.disabled = true;
        cedula.disabled = true;
        
        

        const sessionDataJSON = localStorage.getItem('sessionData');
        const sessionData = JSON.parse(sessionDataJSON);
        telefono.value=(sessionData.telefono);
        var miArray = Object.values(sessionData);
        var texto = miArray.join(',');
        console.warn(miArray);
        //console.warn(sessionData.banco);

        

        //console.log(`telefono: ${sessionData.telefono}`);
        //var texto = sessionData.join("");
        new QRCode(document.getElementById("qrcode"), texto);
        //new QRCode(document.getElementById("qrcode"), texto);
    } else {
        // El elemento 'nombre' no existe en localStorage
        console.log("vacio");
    }
}

function boton() {
    monto.style.display = "block";
    telefono.disabled = true;
    cedula.disabled = true;

    const sessionInfo = {
        banco: document.getElementById("bancos").value,
        telefono: document.getElementById("telefono").value,
        cedula: document.getElementById("cedula").value,
        
        //timestamp: new Date().toISOString()
    };
    const sessionInfoJSON = JSON.stringify(sessionInfo);

    localStorage.setItem('sessionData', sessionInfoJSON);

    const sessionDataJSON = localStorage.getItem('sessionData');
    const sessionData = JSON.parse(sessionDataJSON);
    var miArray = Object.values(sessionData);
    var texto = miArray.join(',');
    //console.warn(miArray);

    //new QRCode(document.getElementById("qrcode"), texto);
    //console.log(sessionData);
    verifica();
}

myButton.addEventListener("click", function() {
    boton();
});


dyButton.addEventListener("click", function() {
    localStorage.clear();
    location.reload()
});
verifica();















//let texto1 = sessionData;
//var texto = sessionData.join(',');
//console.log(sessionData);
//console.log(texto1);
//new QRCode(document.getElementById("qrcode"), texto1);