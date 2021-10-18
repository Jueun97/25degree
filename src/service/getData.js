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
      .get(`${base_url}/users`)
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      });
    return result;
  };
  getPost = async () => {
    let url = `${base_url}/posts`;
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
    const url = `${base_url}/user`;
    const data = upload_data;
    axios
      .post(url,data)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(`getData error ${error}`);
      });
  };
  updateUser = (userInfo) => {
    axios
      .put(`${base_url}/user`, userInfo)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(`getData error ${error}`);
      });
  };
  uploadPost = (upload_data) => {
    let url = `${base_url}/post`;
    let data = upload_data;
    axios.post(url, data).then((response) => {
      const data = response.data;
      return data;
    });
  };
  updatePost = (upload_data) => {
    const url = `${base_url}/post?postId=${upload_data.postId}&userId=${upload_data.userId}`;
    const data = { message: upload_data.editedMessage };
    axios.put(url, data).then(response => response.data);
  };
  deletePost = (postId, userId) => {
    let url = `${base_url}/post?postId=${postId}&userId=${userId}`;
    axios.delete(url).then(response => response.data);
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
