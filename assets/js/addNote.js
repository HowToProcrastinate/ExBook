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

