const url = 'https://api.giphy.com/v1/gifs/search?api_key=M8VP3NcRD9N1TabYD2KBeHcmqjvfNIyJ';
const url_subir = 'https://upload.giphy.com/v1/gifs?api_key=M8VP3NcRD9N1TabYD2KBeHcmqjvfNIyJ&source_image_url=';
function aleatorio(a,l=25){
        let opciones= {
            method: 'GET'
        }
        let url_completa = url + "&q=" + a +"&limit=" +l;
        return fetch(url_completa, opciones)
            .then((respuesta) => respuesta.json())
            .then((json) => json);
}


function subir(url){
    let opciones= {
        method: 'POST'
    }
    let url_completa = url_subir + url;
    return fetch(url_completa, opciones)
        .then((respuesta) => respuesta.json())
        .then((json) => json);
}
  
 

  // Llamar a la función inicialmente
  //toggleHtmlClass();