const request = require('request');
const {JSDOM} = require('jsdom');
const camelCase = require('camelcase');

const removeAccents = require('./RemoveAccents');
const config = require('../config/config.json');

class QuoteRealEstateFounds{

    getQuote = (found, callback) => {

        request(`${config.url}/${found}`, (err, res, body) => {

            let quote = {};

            if (err) {
                callback(quote);
            }

            const dom = new JSDOM(body);
            let document = dom.window.document;

            let indicators = document.getElementById('main-indicators-carousel');

            if (indicators) {

                let indicatorsDivs = indicators.querySelectorAll('div');

                indicatorsDivs.forEach((indicator) => {
                    let spans = indicator.querySelectorAll('span');

                    if (spans.length > 1) {
                        let label = removeAccents(spans[0].textContent);
                        let value = removeAccents(spans[1].textContent);

                        quote[camelCase(label)] = value.toUpperCase();
                    }

                });

            }

            callback(null, quote);

        });

    }

}

module.exports = new QuoteRealEstateFounds();