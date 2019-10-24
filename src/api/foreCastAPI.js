class ForeCastAPI {
  constructor(apiSecret) {
    this.secret = apiSecret;
    this.endpoint = (latitude, longitude) =>
      `https://api.darksky.net/forecast/6e2e4ed263d73ad2ca53f8bfbba8ca46/${latitude},${longitude}`;
    this.data = null;
  }

  async fetch(latitude, longitude) {
    try {
      const response = await fetch(this.endpoint(latitude, longitude));
      this.data = await response.json();
    } catch (error) {
      throw new Error(`ForeCastAPI unable to fetch: ${error.message}`);
    }
  }
}

export default ForeCastAPI;
