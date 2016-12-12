var webURL = 'http://localhost:9000';
var lastNum;
$('#newQuote').click(function(){
  $.get(webURL + '/quotes.txt', function(data) {
    var quotes = data.split("\n");
    var newIndex = genNewIndex(quotes.length);
    while(newIndex == lastNum){
      newIndex = genNewIndex(quotes.length);
    }
    lastNum = newIndex;
    var quote = quotes[newIndex];
    $('#quoteBox').html(quote);
  });
})

function genNewIndex(length){
  return Math.floor(Math.random() * (length-1))
}
