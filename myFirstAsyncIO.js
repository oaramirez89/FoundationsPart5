var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, content){
  if (err) throw err;
  var nbrOfLines = content.split('\n').length - 1;
  console.log(nbrOfLines);
});
