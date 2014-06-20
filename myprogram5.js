var fs = require('fs')

var text;
fs.readdir(process.argv[2], function(error, list) {
  for (var i = 0; i < list.length; i++) {
    var fileExt = list[i].split('.')[1]
    if (fileExt === process.argv[3]) {
      console.log(list[i])
    }
  }
})