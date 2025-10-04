import React, { use, useState } from "react";
import Weathercars from "./Weathercars";

function Weatherapp() {
  const [city, setcity] = useState("");
  const [weather, setweather] = useState(null);
  const[forecast , setforecast] = useState([])
  const API_KEY = "ce6f623ff3220c685ef35d80fa096786";

  const today = new Date();
  const weekday = today.toLocaleDateString("en-US", { weekday: "long" });
  const monthday = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const Data = await res.json();
      if (Data.cod == "404") {
        alert("city not found");
        setweather(null);
      } else {
        setweather(Data);
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
    console.log(setweather);
  };
  return (
    <div className="h-screen bg-[#DFDDD9] relative overflow-hidden">
      <h1 className="font-[RM] text-[30px] pt-[2vh] ml-[2vw]">
        zeyphr <span className="absolute -mt-[0vh] -ml-0 text-[35px]"> 🌩️</span>
      </h1>
      <p className="font-[penna] text-[30px] ml-[2vw] leading-none mt-[5vh] ml-[2vw]">
        {weekday}, <br />
        {monthday}
      </p>
      <input
        className="font-[Thin] text-[30px] h-[4vh] w-[80vw] ml-[5vh] mt-[4vh] text-center mx-auto border-b-2 border-[grey] outline-none"
        type="text"
        value={city}
        onChange={(e) => setcity(e.target.value)}
        placeholder="City Name"
      />
      <div>
        <button
          className="h-[6vh] w-[25vw] bg-[transparent] text-[gray] mt-[5vh] font-[RM] rounded-md ml-[35vw] border-2"
          onClick={fetchWeather}
        >
          search
        </button>
      </div>
      <div className="cards h-[50vh] ml-[10vw] mt-[5vh]">
      <Weathercars name={weather?.name} country={weather?.sys?.country} temp={weather?.main.temp} cap={weather?.weather[0].description} humidity={(weather?.main.humidity)} wind={weather?.wind.speed}  />
      </div>
    </div>
  );
}

export default Weatherapp;
