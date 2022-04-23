export class CurrencyExchanger {
  static amount(currency1) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency1}`) 
      .then(function(response) {
        if(!response.ok) {
          throw Error(response.status);
        }else return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}
