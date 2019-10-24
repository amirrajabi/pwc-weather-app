import IpFetcher from "../api/ipfetcher";
import IpGeoLocation from "../api/ipGeoLocation";
import CityLocation from "../api/cityLocation";
import ForeCastAPI from "../api/foreCastAPI";

class GetWeather {
  constructor() {
    this.ipFetcher = new IpFetcher();
    this.ipGeoLocation = new IpGeoLocation();
    this.cityLocation = new CityLocation();
    this.foreCastAPI = new ForeCastAPI();
    this.cityName = "";
  }

  async fetch(cityName) {
    this.cityName = cityName;
    try {
      await this.ipFetcher.fetch();
      await this.ipGeoLocation.fetch(this.ipFetcher.ip);
      const city =
        this.cityName !== "" ? this.cityName : this.ipGeoLocation.data.city;
      await this.cityLocation.fetch(city);
      const latitude = this.cityLocation.data.results[0].geometry.lat;
      const longitude = this.cityLocation.data.results[0].geometry.lng;
      await this.foreCastAPI.fetch(latitude, longitude);
      this.data = {
        city,
        ...this.foreCastAPI.data
      };
      // Keep console for monitoring all data
      console.table(this.data);
    } catch (error) {
      this.data = undefined;
    }
  }
}

export default GetWeather;
