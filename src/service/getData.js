import axios from "axios";

const key = process.env.REACT_APP_WEATHER_API_KEY;
class GetData {
  async getWeather(lat, lon) {
    const result = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${key}&units=metric`
      )
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      });
    console.log(result);
    return result;
  }

  async getUserInfo() {
    const result = await axios
      .get(`http://localhost:8000/UserInfo`)
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      });
    return result;
  }
}

export default GetData;
