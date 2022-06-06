//RASCUNHO PRA PASSAR PRA JQUERY
let imagem = $('#imagem')
let video = $('#video')
let titulo = $('#titulo')
let texto = $('#texto')
let erro = $('#erro')
let imgInicial =$('#img-inicial')
let desc = $('#description')
let data;


const getApi = function(data) {
$.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=aCd38BAb5khPvcBczh10lO2dteGdooJFUlEJerhK&date=${data}`,
    type: 'GET',

    success: function(consultaApi){
        erro.css('display', 'none')
        titulo.css('display', 'block')
        titulo.html(`${consultaApi.title}`)
        imgInicial.css('display', 'none')
        desc.css('display', 'block')


        if (consultaApi.media_type == 'image') {
            imagem.css('display', 'block')
            video.css('display', 'none')
            imagem.attr('src',`${consultaApi.url}`)
            //SEMPRE que for usar TEMPLATE STRING -> usa-se `CRASE` envolvendo o ${}
        }

        else {
            video.css('display', 'block')
            imagem.css('display', 'none')
            video.attr('src',`${consultaApi.url}`)
        }
        
            texto.css('display', 'block')
            texto.html(`${consultaApi.explanation}`)
        
        }, 
        
        error: function(){
            video.css('display', 'none')
            imagem.css('display', 'none')
            erro.css('display', 'block')
            titulo.css('display', 'none')
            texto.css('display', 'none')
            texto.html(`${consultaApi.explanation}`)
            
            
        }
})
}


$('#formInput').submit(function(e){
    e.preventDefault()
    data = $('#data').val()
    getApi(data)

})





// aCd38BAb5khPvcBczh10lO2dteGdooJFUlEJerhK
// You can start using this key to make web service requests. Simply pass your key in the URL when making a web request. Here's an example:

// https://api.nasa.gov/planetary/apod?api_key=aCd38BAb5khPvcBczh10lO2dteGdooJFUlEJerhK



// evita o carregamento da página ao clicar no botão de selecionar a data
