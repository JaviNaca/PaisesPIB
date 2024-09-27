/* Implementa tú código JS */

let paisesPIB = [
    { nombre: "Alemania", pib: 3860 },
    { nombre: "Japón", pib: 4870 },
    { nombre: "Brasil", pib: 2050 },
    { nombre: "Canadá", pib: 1800 },
    { nombre: "México", pib: 1220 },
    { nombre: "China", pib: 14140 },
    { nombre: "India", pib: 2870 },
    { nombre: "Francia", pib: 2770 },
    { nombre: "Reino Unido", pib: 2820 },
    { nombre: "Estados Unidos", pib: 21440 }
];


        let contenedor = document.getElementById("contenedor");
        let displayPaises = document.getElementById("DisplayPaises");
        
        let boton = document.getElementById("add-country");
        boton.textContent = "add-country"
        boton.onclick = add_country;
        contenedor.append(boton);

        function add_country (){
        let numeroMax = Math.floor(Math.random() * paisesPIB.length);
        let pais = paisesPIB.nombre;
        let pib = paisesPIB.pib;
    
        if (paisesPIB.length > 0){
        pais = paisesPIB[numeroMax].nombre;
        pib = paisesPIB[numeroMax].pib;

        paisesPIB.splice(numeroMax,1);
        } else {
            alert("NO QUEDAN MÁS PAÍSES");
        }
    }


