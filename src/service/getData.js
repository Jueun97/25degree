import axios from "axios";
const key = process.env.REACT_APP_WEATHER_API_KEY;
const base_url = "http://localhost:8000";
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
    return result;
  }

  getUserInfo = async () => {
    const result = await axios
      .get(`${base_url}/UserInfo`)
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      });
    return result;
  };
  getPost = async () => {
    let url = `${base_url}/UserPost`;
    const posts = await axios
      .get(url)
      .then((response) => response.data)
      .then((data) => data);
    return posts;
  };
  getComment = async () => {
    let url = `${base_url}/Comment`;
    const comments = await axios
      .get(url)
      .then((response) => response.data)
      .then((data) => data);
    return comments;
  };
  getLikes = async () => {
    let url = `${base_url}/Likes`;
    const comments = await axios
      .get(url)
      .then((response) => response.data)
      .then((data) => data);
    return comments;
  };
  addUser = (upload_data) => {
    axios
      .post(`${base_url}/addUser`, upload_data)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(`getData error ${error}`);
      });
  };
  updateUser = (userInfo) => {
    axios
      .post(`${base_url}/updateUser`, userInfo)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(`getData error ${error}`);
      });
  };
  uploadPost = (upload_data) => {
    let url = `${base_url}/uploadPost`;
    let data = upload_data;
    axios.post(url, data).then((response) => {
      const data = response.data;
      return data;
    });
  };
  updatePost = (upload_data) => {
    let url = `${base_url}/updatePost`;
    let data = upload_data;
    axios.post(url, data).then(response => response.data);
  };
  deletePost = (postId, userId) => {
    let url = `${base_url}/deletePost`;
    let data = { postId, userId };
    axios.post(url, data).then(response => response.data);
  };
  uploadComment = (upload_data) => {
    let url = `${base_url}/uploadComment`;
    axios.post(url, upload_data);
  };
  uploadLikes = (upload_data) => {
    let url = `${base_url}/uploadLikes`;
    axios.post(url, upload_data);
  };
  deleteLikes = (upload_data) => {
    let url = `${base_url}/deleteLikes`;
    axios.post(url, upload_data);
  };

}

export default GetData;
