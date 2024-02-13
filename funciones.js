const url = 'https://api.giphy.com/v1/gifs/search?api_key=M8VP3NcRD9N1TabYD2KBeHcmqjvfNIyJ';
const url_subir = 'https://upload.giphy.com/v1/gifs?api_key=M8VP3NcRD9N1TabYD2KBeHcmqjvfNIyJ&';
function aleatorio(a,l=25){
        let opciones= {
            method: 'GET'
        }
        let url_completa = url + "&q=" + a +"&limit=" +l;
        return fetch(url_completa, opciones)
            .then((respuesta) => respuesta.json())
            .then((json) => json);
}




