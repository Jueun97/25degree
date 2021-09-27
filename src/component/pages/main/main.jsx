import React, {useState} from 'react';
import { useLocation } from 'react-router';
import { useEffect } from 'react/cjs/react.development';
import MainTemplate from '../../templates/main_template/main_template';
import GoogleMap from '../../../service/geocode';
import cityInformation from "../../../service/location.json";

const Main = ({ getData, posts }) => {
    const [filteredPosts, setFilteredPosts] = useState(null);
    const location = useLocation();
    const { user } = location.state ? location.state : '';
    const [city, setCity] = useState("location");
    const [address, setAddress] = useState("");
    const [data, setData] = useState({
      currentTemp: null,
      currentIcon: null,
      daily: null,
      hourly: null,
    });
  
    useEffect(() => {
        if (city === "location") {
            navigator.geolocation.getCurrentPosition((pos) => {
                getData //
                    .getWeather(pos.coords.latitude, pos.coords.longitude)
                    .then((data) =>
                        setData({
                            currentTemp: data.current.temp,
                            currentIcon: data.current.weather[0].icon,
                            daily: data.daily,
                            hourly: data.hourly
                        })
                    );
                GoogleMap(pos.coords.latitude, pos.coords.longitude).then((res) => {
                    setAddress(res);
                });
            });
        } else {
            getData //
                .getWeather(city[0].coord.lat, city[0].coord.lon)
                .then((datas) => {
                    setData({
                        currentTemp: datas.current.temp,
                        currentIcon: datas.current.weather[0].icon,
                        daily: datas.daily,
                        hourly: datas.hourly
                    });
                });
            setAddress({ state: "", city: city[0].value });
        }
    }, [getData,city]);

    const onClickCategory = (event) => {
        const category = event.target.value;
        if (category === '전체')
            setFilteredPosts(null);
        else {
            const filtered = posts.filter(post => post.style === category);
            setFilteredPosts(filtered);
        }
    };
    const onChangeCity = (event) => {
        const cityName = event.target.value;
        const city = cityInformation.filter((item) => cityName === item.name);
        setCity(city);
      };
    return (
        <MainTemplate posts={filteredPosts ? filteredPosts : posts} data={data} address={address} onClickCategory={onClickCategory} onChangeCity={onChangeCity} user={user}/>
    );
};

export default Main;