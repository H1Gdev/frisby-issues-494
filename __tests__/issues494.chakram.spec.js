const chakram = require('chakram'),
      expect = chakram.expect;
const path = require('path');
const fs = require('fs');

let importCsvApi = 'http://localhost:10011/importcsv';
let sessionToken = 'aaaa';

const contentPath = path.resolve(__dirname, './order.csv');
let content = fs.createReadStream(contentPath);

it('issues 494 using chakram', () => {
    let response = chakram.post(importCsvApi, undefined, {
        headers: {
            'Authorization': sessionToken,
            'content-type': 'multipart/form-data'
        },
        formData: {
            file: {
                value: content,
                options: {
                    filename: contentPath,
                    contentType: null
                }
            }
        }
    });
    expect(response).to.have.status(200);
    return chakram.wait();
});
