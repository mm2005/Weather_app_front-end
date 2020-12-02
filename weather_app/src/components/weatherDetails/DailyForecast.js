import React, { useContext } from "react";
import { ChosenDayContext } from "../../context/ChosenDayContext";
import { parseDay, parseDayOfWeek } from "../../util/daysOfWeek";

const DailyForecast = (props) => {
  const [chosenDay, setChosenDay] = useContext(ChosenDayContext);

  const clickHandler = (e) => {
    setChosenDay(parseInt(e.currentTarget.dataset.dayofweek));
    const elem = e.currentTarget;
    const currentChosenDayElement = document.querySelector(".chosen-day");
    if (currentChosenDayElement) {
      currentChosenDayElement.style.borderTop = "5px solid transparent";
      currentChosenDayElement.classList.remove("chosen-day");
    }
    elem.classList.add("chosen-day");
    elem.style.borderTop = "5px solid orange";
  };

  const mouseEnterHandler = (e) => {
    const elem = e.currentTarget;
    elem.classList.add("hovered-day");
    elem.style.borderTop = elem.classList.contains("chosen-day")
      ? "5px solid #fc6203"
      : "5px solid #fcd303";
  };

  const mouseLeaveHandler = (e) => {
    const elem = e.currentTarget;
    elem.classList.remove("hovered-day");
    elem.style.borderTop = elem.classList.contains("chosen-day")
      ? "5px solid orange"
      : "5px solid transparent";
  };

  const loadHandler = (e) => {
    const elem = e.currentTarget;
    if (parseInt(elem.dataset.dayofweek) === chosenDay) {
      elem.classList.add("chosen-day");
      elem.style.borderTop = "5px solid orange";
    }
  };

  return props.forecasts.map((item) => (
    <div
      key={item.exactDate}
      onClick={clickHandler}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onLoad={loadHandler}
      style={initialStyle}
      data-dayofweek={parseDayOfWeek(item.date)}
    >
      <h4>{parseDay(item.date)}</h4>
      <img
        src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
        alt=""
        style={{ width: "auto" }}
      />
      <p>{Math.round(item.temp) + "°"}</p>
      <p>{item.description}</p>
    </div>
  ));
};

const initialStyle = {
  padding: "10px 7px 0 7px",
  borderTop: "5px solid transparent",
  cursor: "pointer",
};

export default DailyForecast;
