//variables
const resultados= document.querySelector('#resultado');

const year= document.querySelector('#year');
const marca= document.querySelector('#marca');
const minimo= document.querySelector('#minimo');
const maximo= document.querySelector('#maximo');
const puertas= document.querySelector('#puertas');
const transmision= document.querySelector('#transmision');
const color= document.querySelector('#color');
const maxDate= new Date().getFullYear();
const minDate= maxDate-10;

const datosBusqueda={
    marca:'',
    year:'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:''
}

//eventos
document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos(autos); //muestra los automoviles al cargar

    //lenar las opciones
    llenarSelect();
})

//listeners de los selects
marca.addEventListener('change',(e)=>{
    datosBusqueda.marca =e.target.value;
    filtrarAuto();
});
year.addEventListener('change',(e)=>{
    datosBusqueda.year =e.target.value;
    filtrarAuto();
})
color.addEventListener('change',(e)=>{
    datosBusqueda.color =e.target.value;
    filtrarAuto()
})
transmision.addEventListener('change',(e)=>{
    datosBusqueda.transmision =e.target.value;
    filtrarAuto();
})
puertas.addEventListener('change',(e)=>{
    datosBusqueda.puertas =e.target.value;
    filtrarAuto();
})
maximo.addEventListener('change',(e)=>{
    datosBusqueda.maximo =e.target.value;
    filtrarAuto();
})
minimo.addEventListener('change',(e)=>{
    datosBusqueda.minimo =e.target.value;
    filtrarAuto();
})

//funciones
function mostrarAutos(autos){
    limpiarHTML();
    autos.forEach(auto => {
        const {marca,modelo, year, puertas, transmision, precio,color}= auto;
        const autoHTML= document.createElement('P');
        autoHTML.textContent=`${marca} - ${modelo} - ${year} - ${puertas} - ${transmision} - ${precio} - ${color}`;

        //insertar en html
        resultados.appendChild(autoHTML);
    });
}

function limpiarHTML(){
    while (resultados.firstChild){
        resultados.removeChild(resultados.firstChild);
    }
}

function llenarSelect(){
    for (let i= maxDate; i>= minDate;i--){
        const opcion= document.createElement('option');
        opcion.value=i;
        opcion.textContent= i;
        year.appendChild(opcion);
    }
}

function filtrarAuto(){
    const resultados= autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    
    if (resultados.length){
        mostrarAutos(resultados);
    }else{
        sinResultados();
    }
}

function sinResultados(){
    limpiarHTML();
    const sinResultados= document.createElement('DIV');
    sinResultados.classList.add('alert','error');
    sinResultados.textContent='No Hay Resultados';
    resultados.appendChild(sinResultados);
}

function filtrarMarca(auto){
    const {marca}= datosBusqueda;
    if (marca){
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto){
    const {year}= datosBusqueda;
    if (year){
        return auto.year === parseInt(year);
    }
    return auto;
}

function filtrarMinimo(auto){
    const {minimo}= datosBusqueda;
    if (minimo){
        return auto.precio >= minimo ;
    }
    return auto;
}

function filtrarMaximo(auto){
    const {maximo}= datosBusqueda;
    if (maximo){
        return auto.precio <= maximo ;
    }
    return auto;
}

function filtrarPuertas(auto){
    const {puertas}= datosBusqueda;
    if (puertas){
        return auto.puertas === parseInt(puertas);
    }
    return auto;
}

function filtrarTransmision(auto){
    const {transmision}= datosBusqueda;
    if (transmision){
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto){
    const {color}= datosBusqueda;
    if (color){
        return auto.color === color;
    }
    return auto;
}