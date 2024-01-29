var videos=[
{titulo: 'Video 1',descripcion: 'Descripción video 1', url: 'https://www.youtube.com/embed/42aGI1k3J6o?si=iKllKL1Z6R2Q7wjf'},
{titulo: 'Video 2',descripcion: 'Descripción video 2', url: 'https://www.youtube.com/embed/RqQ1d1qEWlE?si=HA9GPvCdbddXaeyb'},
{titulo: 'Video 3',descripcion: 'Descripción video 3', url: 'https://www.youtube.com/embed/wGxDfSWC4Ww?si=0RDwcVXdd6o39-OM'},
{titulo: 'Video 4',descripcion: 'Descripción video 4', url: 'https://www.youtube.com/embed/2lpq7mEpx_I?si=o2agnUT5PVow_Azo'}
];

var listaVideos= document.getElementById('listaVideosArreglo');

mostrarListavideos(videos);

function mostrarListavideos(videosBuscados) {
    listaVideos.innerHTML='';
    videosBuscados.forEach(indiceVideo =>{
        //Crear div para las fila
        var fila=document.createElement('div');
        //Crear el div para la url del video (columna 1)
        var col1UrlVideo=document.createElement('div');
        var iframeVideo=document.createElement('iframe');
        fila.setAttribute('class','row');
        col1UrlVideo.setAttribute('class','col');
        iframeVideo.setAttribute('src',indiceVideo.url);
        iframeVideo.setAttribute('width','400px');
        iframeVideo.setAttribute('height','400px');
        iframeVideo.setAttribute('frameborder','0');
        col1UrlVideo.appendChild(iframeVideo);
        fila.appendChild(col1UrlVideo);

        //Crear div para el titulo y descripcion del video (columna 2)
         var col2TituloVideo=document.createElement('div');
         var h4TituloVideo=document.createElement('h4');
         var h6DescripcionVideo=document.createElement('h6');

         col2TituloVideo.setAttribute('class','col');
         h4TituloVideo.textContent=indiceVideo.titulo;
         h6DescripcionVideo.textContent=indiceVideo.descripcion;

         col2TituloVideo.appendChild(h4TituloVideo);
         col2TituloVideo.appendChild(h6DescripcionVideo);
         fila.appendChild(colTituloVideo);

         //Crear el div para el boton (columna 3)
         var col3BotonVideo=document.createElement('div');
         var botonVideo=document.createElement('button');

         col3BotonVideo.setAttribute('class','col');
         botonVideo.setAttribute('class','btn btn-outline-primary');
         botonVideo.innerHTML='@';

         col3BotonVideo.appendChild(botonVideo);
         fila.appendChild(col3BotonVideo)


        
       listaVideos.appendChild(fila); 
    });   
}


function buscarVideos() {
    var textoVideo=document.getElementById('txtBuscar').value;
    //alert('texto buscado' + textoVideo);
    var videosBuscados=videos.filter(
    indiceVideo =>{
        return indiceVideo.titulo.includes(textoVideo);
    }
    );

    mostrarListavideos(videosBuscados);

}