import React from 'react';
import styles from './weather.module.css';
import Hourly from '../../molecules/weather_hourly/hourly';
import Daily from '../../molecules/weather_daily/daily';
import Heading1 from '../../atoms/heading1/heading1';
const Weather = ({ data, address }) => {
    return (
      <section className={styles.container}>
        {data.currentIcon != null && (
          <div>
            <Heading1 className="address" text={`${address.state} ${address.city}의 현재 날씨`}
            />
            <div className={styles.current}>
              <img
                className={styles.weatherImg}
                src={`http://openweathermap.org/img/w/${data.currentIcon}.png`}
                alt="weatherIcon"
              />
              <Heading1 className="currentTemp" text={`${Math.round(data.currentTemp)}°`}/>
            </div>
            <Hourly hourly={data.hourly} />
            <Daily daily={data.daily} />
          </div>
        )}
      {/*   {data.currentIcon === null && <Loading />} */}
      </section>
    );
  };
export default Weather;