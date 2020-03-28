const rp = require('request-promise');
module.exports = () => {
  let currencies = [];




  return {
    load: async () => {
      await rp('https://www.cbr-xml-daily.ru/daily_json.js')
      .then(r => {
        let data = JSON.parse(r);
        for(let i in config.currencies) {

          if(data.Valute[config.currencies[i]]) {
            currencies.push({
              name:config.currencies[i],
              price:data.Valute[config.currencies[i]].Value
            });
          } else {
            currencies.push({
              name:config.currencies[i],
              price:1
            });
          }
        }
      }).catch( err => {
        console.log(err);
        process.exit();
      });
    },
    get_all: () => {
      return currencies;
    }
  }




};
