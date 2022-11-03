const btn = document.querySelector('button');
const contenedor = document.querySelector('#app');
const servidor = 'https://pokeapi.co/api/'

btn.addEventListener('click', function(){
    console.log('Click succesful');
    const endPoint = servidor + 'v2/pokemon?limit=100&offset=0';

    fetch (endPoint)
    .then(respuesta => {
        return respuesta.json();
    })
    .then(respuestaJSON => {
        console.log(respuestaJSON.results);
        let datos = respuestaJSON.results;
        renderizar(datos);
    })
})

function renderizar(lista){
    /* console.log(lista) */
    let html = '';
    contenedor.innerHTML = '';
    let fotoURL;
    lista.forEach(pokemon => {
        /* console.log(pokemon); */
        fetch (pokemon.url)
        .then(resp => { 
            return resp.json();
        })
        .then(respJSON=>{
            console.log(respJSON.sprites.front_default);
            fotoURL = respJSON.sprites.front_default;

            contenedor.innerHTML += `<div class="card">
            <h4>${pokemon.name}</h4>
            <img src="${fotoURL}">
            <p>${respJSON.order}</p>
            <a href="detalle.html?id=${respJSON.id}">Ver detalles</a>

        </div>`;
        console.log(html)
        })

    });

    console.log('Termine!')
}