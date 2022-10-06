import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useCityContext } from "../contexts/Citycontext";

export default function Weathercard() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const { city, data, error } = useCityContext();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const getCurrentDate = () => {
    let date = new Date();
    setDate(date.toLocaleDateString("en-us", options));
  };

  const getCurrentTime = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    setTime(
      hours > 12
        ? `${hours - 12 < 10 ? `0${hours - 12}` : hours - 12}:${
            minutes < 10 ? `0${minutes}` : minutes
          }:${seconds < 10 ? `0${seconds}` : seconds} P.M`
        : `${hours}:${minutes}:${seconds} A.M`
    );
  };

  useEffect(() => {
    getCurrentDate();
    setTimeout(() => {
      getCurrentTime();
    }, 1000);
  }, [time, date]);
  return (
    <Container className="d-flex p-4 flex-column justify-content-center align-items-center">
      <div className="time-date-div p-4 text-light w-100">
        <span className="date"> {date}</span>
        <span className="time">{time}</span>
      </div>
      <div className="text-light text-center p-4 weather-div w-100">
        {data?<h2>City Not Found</h2>:<h1>City Found</h1>}
        <div>
          <h4>{data === null ? "Please Enter a City Name" : data.name + `,${data.sys.country}`}</h4>
        </div>
        <div>
          <h1>
            {data === null ? data : Math.ceil(data.main.temp - 273) + `*C`}
            <span> {data === null ? data : data.weather[0].main}</span>
          </h1>
        </div>
      </div>
        
    </Container>
  );
}
