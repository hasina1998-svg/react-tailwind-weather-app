import "./App.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Location from "./components/Location";

function App() {
  const API_keys = "0c7d8f56f7de0a34fd0b9b96e2c657ff";
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [position, setPosition] = useState({
    lat: "",
    long: "",
  });
  const [weather, setWeather] = useState({});
  const [description, setDescription] = useState({});
  const city_url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.lat}&longitude=${position.long}&localityLanguage=en`;
  const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.long}&appid=${API_keys}`;
  const fetchData = async () => {
    try {
      const cityResponse = await fetch(city_url);
      const weatherResponse = await fetch(weather_url);
      const cityData = await cityResponse.json();
      const weatherData = await weatherResponse.json();
      setDescription(cityData);
      setWeather(weatherData);
      setLoading(!loading);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setPosition({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
    });
    fetchData();
  }, []);

  const darkModeHandler = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  };
  if (loading) return <h1> Page is loding </h1>;
  return (
    <div className={`app ${darkMode && "dark"}`}>
      {/* Header (Title , Toggle Switch => Dark / Light Mode)*/}
      <Header darkMode={darkMode} darkModeHandler={darkModeHandler} />
      <Location position={position} description={description} />
      {console.log(weather)}
    </div>
  );
}

export default App;
