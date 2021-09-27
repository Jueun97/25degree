import axios from 'axios';
class Images {
    constructor() {
        this.url = `https://api.cloudinary.com/v1_1/dqp3boiv4/image/upload`;
    }
    uploadImage = async (images) => {
        const uploaders = images.map(image => {
            const formData = new FormData();
            formData.append("file", image);
            formData.append("upload_preset", "m3bcteyx");

            return axios.post(this.url, formData, {
                headers: { "X-Requested-With": "XMLHttpRequest" },
            }).then(response => {
                const data = response.data;
                const fileURL = data.url // You should store this URL for future references in your app
                return fileURL;
            })
        })

        const urls = axios.all(uploaders).then((urls) => {
            return urls;

            // ... perform after upload is successful operation
          });
    
        return urls;
    }
}
export default Images;