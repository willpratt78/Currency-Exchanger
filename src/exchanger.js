export class CurrencyExchanger {
  static amount(currency1) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency1}`) 
      .then(function(response) {
        // sessionStorage.setItem("storedApi", JSON.stringify(response));
        // const mySessionData = JSON.parse(sessionStorage.getItem("storedApi"));
        if(!response.ok) {
          throw Error(response.status);
        }else return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}
