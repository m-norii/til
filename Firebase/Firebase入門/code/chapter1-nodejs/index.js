const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const firebase = require("firebase");

// 設定値の値は、どこまで公開していいデータかわからないので、いったんすべて伏せておく
const firebaseConfig = {
      apiKey: "******",
      authDomain: "******",
      databaseURL: "******",
      projectId: "******",
      storageBucket: "******",
      messagingSenderId: "******",
      appId: "******"
};

var fbase = firebase.initializeApp(config);

const server = http.createServer(
  (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><body><h1>Firebase</h1>');
    res.write('<p>Database name: ' + fbase.name + '</p>');
    res.end('</body></html>\n');
  }
);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
