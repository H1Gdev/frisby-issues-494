'use strict';

module.exports = {
  importCsv: importCsv
};

function importCsv(req, res) {
  var message = 'received!';

  res.json(message);
}
