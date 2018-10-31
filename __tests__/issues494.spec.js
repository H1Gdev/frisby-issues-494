const frisby = require('frisby');
const path = require('path');
const fs = require('fs');

let importCsvApi = 'http://localhost:10011/importcsv';
let sessionToken = 'aaaa';

const contentPath = path.resolve(__dirname, './order.csv');
let form = frisby.formData();
let content = fs.createReadStream(contentPath);

form.append('file', content, {
    knownLength: fs.statSync(contentPath).size
});

it('issues 494', () => {
    return frisby
        .setup({
            request: {
                 headers: {
                      'Authorization': sessionToken,
                      'Content-Type': 'multipart/form-data; boundary=' + form.getBoundary(),
                 }
            }
        })
        .post(importCsvApi, {
            body: form
        })
        .expect('status', 200);
});
