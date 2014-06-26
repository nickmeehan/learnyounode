var fs = require('fs')

module.exports = function(directoryName, fileExtension, callback) {
  fs.readdir(directoryName, function(error, list) {
    if (error) {
      return callback(error)
    }
    var goodFiles = []
    for (var i = 0; i < list.length; i++) {
      var fileExt = list[i].split('.')[1]
      if (fileExt === fileExtension) {
        goodFiles.push(list[i])
      }
    }
    callback(null, goodFiles)
  })
}