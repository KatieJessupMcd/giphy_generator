$(function() {
  //get the input  from search

  $('#search').on('click', function(e) {
    e.preventDefault();

    let $searchStr = $('#searchStr').val();

    let giphyUrl = `http://api.giphy.com/v1/gifs/search?q=${$searchStr}&api_key=dc6zaTOxFJmzC`;

    $.get(giphyUrl, appendGiphy);

    //http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=dc6zaTOxFJmzC
  });

  function appendGiphy(res) {
    let randomNum =  Math.floor(Math.random() * res.data.length);
    console.log(randomNum); 

    let giphyPic = res.data[randomNum].images.downsized_large.url;

    let $img = $("<img class='newGiphy' width='500'>");
    $img.attr('src', giphyPic);

    $('.container-fluid').append($img);
  }

  $('#remove').on('click', function() {
    $('.newGiphy').remove();
  });

  function randomGiphy() {
    let randomNum = Math.random(100);
    return randomNum; 
  }
});
