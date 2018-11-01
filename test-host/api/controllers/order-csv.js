'use strict';

module.exports = {
  importCsv: importCsv
};

function importCsv(req, res) {
  var message = 'received!';

  // output formData
  console.log('file:', req.swagger.params.file);
  console.log('content:', req.swagger.params.file.value.buffer.toString());

  res.json(message);
}
