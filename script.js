addEventListener('load', cargarDatos)

function cargarDatos(){

    const nasaAPIKey = 'd5Kbh7xgEs3NULQTBiQ3jGsHDBkrrpfr88CIJWNO';
    const root = `https://api.nasa.gov/planetary/apod?api_key=${nasaAPIKey}`

    fetch(root)
    .then(respuesta => respuesta.json())
    .then(resultado => mostrarDatos(resultado))
}

function mostrarDatos({date, explanation, media_type, title, url}){

    const titulo = document.querySelector('#titulo');
    titulo.innerHTML = title;
    const fecha = document.querySelector('#fecha');
    fecha.innerHTML = date;
    const descripcion = document.querySelector('#descripcion');
    descripcion.innerHTML = explanation;
    const multimedia = document.querySelector('#multimedia');

    if (media_type == 'video'){
        multimedia.innerHTML = ` <iframe class="embed-responsive-item" src="${url}"></iframe>`
    } else {
        multimedia.innerHTML = `<img src="${url}" class="img-fluid" alt="${url}">`

    }
    multimedia.innerHTML

}