export default class CurrencyService {
  static async getConversions() {
    try {
      const dataResponse = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      if (!dataResponse.ok) {
        throw Error(dataResponse.statusText);
      }
      return dataResponse.json();
    } catch (error) {
      return error.message;
    }
  }
}