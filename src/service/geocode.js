import Geocode from "react-geocode";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
Geocode.setLanguage("ko");

const GoogleMap = async (latitude, longitude) => {
  let address = {};
  let islocated = false;

  await Geocode.fromLatLng(latitude, longitude)
    .then(
      (response) => {
        let city, state;
        for (
          let i = 0;
          i < response.results[0].address_components.length;
          i++
        ) {
          for (
            let j = 0;
            j < response.results[0].address_components[i].types.length;
            j++
          ) {
            switch (response.results[0].address_components[i].types[j]) {
              case "locality":
                city = response.results[0].address_components[i].long_name;
                islocated = true;
                break;
              case "administrative_area_level_1":
                state = response.results[0].address_components[i].long_name;
                break;
            }
          }
          if (!islocated) city = "";
        }
        console.log(response);
        return { state, city };
      },
      (error) => {
        console.error(error);
      }
    )
    .then((res) => ((address.state = res.state), (address.city = res.city)));
  return address;
};

export default GoogleMap;
