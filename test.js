var fs = require('fs');

var data = {}
data.table = []
data.table.push({ username: "lola" })
fs.writeFile("username.json", JSON.stringify(data), function(err) {
    if (err) throw err;
    console.log('complete');
});


fetch("username.json")
    .then(response => response.json())
    .then(json => console.log(json));