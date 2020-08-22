$(document).ready(function() {
    var $input = $('.search');
   var $submit = $('.submit');
   var apiKey = 'lR1UUS4tJNxsOi7rD9s7EJuiVS2hEINo';
   
   
 
   $submit.on('click', function (event) {
       event.preventDefault();
       var inputVal = $input.val();
       getGiphys(inputVal);
   });

   function getGiphys(inputVal) {
    $.get('https://api.giphy.com/v1/gifs/search?q=' + inputVal + '&api_key=' + apiKey + '&limit=6')
        .done(function (data) {
            for(var i = 0; i < 6; i++) {
                var gifImg = data.data[i].images.downsized.url;
                createBox(gifImg);
            }
        });


   };

function createBox(gifImg) {
    var $newImg = $('<img>');
    $newImg.attr('src', gifImg);

    $('.img-container').append($newImg);


}
  

});