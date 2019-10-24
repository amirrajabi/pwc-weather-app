class CityLocation {
  constructor(apiSecret) {
    this.secret = apiSecret;
    this.endpoint = cityName =>
      `https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=ac0af8ce2ee54bf7a4da305bf936813e&language=en&pretty=1`;
    this.data = null;
  }

  async fetch(cityName) {
    try {
      const response = await fetch(this.endpoint(cityName));
      this.data = await response.json();
    } catch (error) {
      throw new Error(`ForeCastAPI unable to fetch: ${error.message}`);
    }
  }
}

export default CityLocation;
