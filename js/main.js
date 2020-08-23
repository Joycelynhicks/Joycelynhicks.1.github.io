$(document).ready(function() {
    var $input = $('.search');
   var $submit = $('.submit');
   var apiKey = 'lR1UUS4tJNxsOi7rD9s7EJuiVS2hEINo';
   
 //Submit Button  
 
   $submit.on('click', function (event) {
       event.preventDefault();
       $('.img-container').empty();
       var inputVal = $input.val();
       getGiphys(inputVal);
       $input.val('');
   });

//Giphy API

   function getGiphys(inputVal) {
    $.get('https://api.giphy.com/v1/gifs/search?q=' + inputVal + '&api_key=' + apiKey + '&limit=6')
        .done(function (data) {
            for(var i = 0; i < 6; i++) {
                var gifImg = data.data[i].images.downsized.url;
                createBox(gifImg);
            }
        });


   };

//Appended images

function createBox(gifImg) {
    var $newImg = $('<img>');
    $newImg.attr('src', gifImg);

    $('.img-container').append($newImg);
    


}
  

});