const request = require('request');

class Locations {
  callGetlocations(req) {
    return new Promise((resolve, reject) => {
      const number_of_results_required = 6;
      const opts = {
        url: `https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${number_of_results_required}&solrTerm=${req.params.search_term}`,
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        }
      };
      request(opts, (error, response, body) => {
        if (error) {
          return reject({ error });
        }
        if (response.statusCode && response.statusCode !== 200) {
          return reject({ error: 'Unable to get locations' });
        }
        const parsedBody = JSON.parse(body);
        return resolve(parsedBody);
      })
    })
  }
}

module.exports = Locations;
