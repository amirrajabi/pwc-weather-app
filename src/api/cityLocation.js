class CityLocation {
  constructor(apiSecret) {
    this.secret = apiSecret;
    this.endpoint = (cityName) =>
      `https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=7bbf43024e9442409871d3840cf01963&language=en&pretty=1`;
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
