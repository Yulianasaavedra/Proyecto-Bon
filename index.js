var qs = require("querystring");
var http = require("https");

var options = {
  "method": "POST",
  "hostname": "api.ultramsg.com",
  "port": null,
  "path": "/instance26486/messages/chat",
  "headers": {
    "content-type": "application/x-www-form-urlencoded"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(qs.stringify({
  token: 'jve4sqqtq7mzhmpg',
  to: '+573124046670',
  body: 'Prueba de la api',
  priority: '1',
  referenceId: ''
}));
req.end();