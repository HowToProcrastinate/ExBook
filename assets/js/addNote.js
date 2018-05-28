$('#enviar').click(function(){
  var datos = {title: $('#title').val(), body: $('#body').val()};
  $.ajax({
          url : 'https://ex-book-api.herokuapp.com/notes',
          data : datos, 
          method : 'post', 
          dataType : 'json',
          success : function(response){
                 //codigo de exito
          },
          error: function(error){
                 //codigo error
          }
  });
});

const card_view = document.getElementById('card_view')
const boton_obtener = document.getElementById('obtener');
boton_obtener.addEventListener('click', evt => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://ex-book-api.herokuapp.com/notes', true)
  xhr.addEventListener('load', e=>{
    const data = JSON.parse(e.target.responseText)
    draw(data)
    console.log(data)
  })
  xhr.send()
})

const draw = data => {
  data.forEach(card => {
    const card_container = document.createElement('div')
    card_container.setAttribute('class', 'card')
    const title = document.createElement('h2')
    title.setAttribute('class','title')
    const content = document.createElement('p')
    content.setAttribute('class','body')
    
    title.textContent = card.title
    content.textContent = card.body

    card_container.appendChild(title)
    card_container.appendChild(content)
    card_view.appendChild(card_container)
  });
}

