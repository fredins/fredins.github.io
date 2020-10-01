const httpFetch = (tag) => {
  fetch(`http://newton.now.sh/simplify/x + 3x + 4*5`)
      .then(response => {response.json()
          .then(parsedJson => {
              let result = parsedJson.result
              console.log(result);
              document.getElementById('crime').innerHTML = result
          })
      })
}
httpFetch('45');


// const socket = new WebSocket('wss://ws.finnhub.io?token=bspr08nrh5rf33i22tbg');

// // for (i=0; i<10; i++){
// //   // Connection opened -> Subscribe
// //   socket.addEventListener('open', function (event) {
// //       socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'}))
// //       socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'BINANCE:BTCUSDT'}))
// //       socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'IC MARKETS:1'}))
// //   });

// //   // Listen for messages
// //   socket.addEventListener('message', function (event) {
// //       console.log('Message from server ', event.data);
// //   });

// //   // Unsubscribe
// //   var unsubscribe = function(symbol) {
// //       socket.send(JSON.stringify({'type':'unsubscribe','symbol': symbol}))
// //   }
// // }