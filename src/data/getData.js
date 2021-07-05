import axios from "axios";

class GetData {
  async getUserInfo() {
    const result = await axios
      .get(`http://localhost:8000/`)
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      });
    return result;
  }
}

export default GetData;
