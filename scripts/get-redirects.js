const fs = require('fs');
const neatCsv = require('neat-csv');

const getRedirects = async () => {
  return new Promise((resolve, reject) => {
    fs.readFile('./redirects.csv', async (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      const csv = await neatCsv(data, { separator: ';', headers: false });
      const redirects = csv.map(item => {
        return {
          from: item[0],
          to: item[1],
        };
      });
      resolve(redirects);
    });
  });
};
module.exports = getRedirects;
