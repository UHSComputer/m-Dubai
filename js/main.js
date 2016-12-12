var webURL = 'http://localhost:9000';
$('#newQuote').click(function(){
  $.get(webURL + '/quotes.txt', function(data) {
    var quotes = data.split("\n");
    var quote = quotes[Math.floor(Math.random() * (quotes.length-1))];
    $('#quoteBox').html(quote);
  });
})
