var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, list){
  if (err) return console.error(err);
  let suffix = '.' + process.argv[3];

  // Loop through list of files and print
  // those that match provided suffix.
  list.forEach(function(element){
    if (path.extname(element) === suffix){
      console.log(element);
    }
  });
})
