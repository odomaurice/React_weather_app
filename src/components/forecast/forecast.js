import {Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel} from "react-accessible-accordion";

import "./forecast.css"

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Forecast = ({data}) => {

    const dayInWeek = new Date().getDay();
    const forecastForDays = days.slice(dayInWeek, days.length).concat(days.slice(0, dayInWeek));

    console.log(forecastForDays);
    return (
      <>
        <label className="title">Daily Forecast</label>
        <Accordion allowZeroExpanded>
          {data.list.splice(0, 7).map((item, idx) => (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <img
                      alt="weather"
                      className="icon-small"
                      src={`icons/${item.weather[0].icon}.png`}
                    />
                    <label className="day">{forecastForDays[idx]}</label>
                    <label className="description">
                      {item.weather[0].description}
                    </label>
                    <label className="day">
                      {Math.round(item.main.temp_min)}°c
                    </label>
                    <label className="min-max">
                      {Math.round(item.main.temp_min)} /
                      {Math.round(item.main.temp_max)}°c
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="daily-grid-details">
                  <div className="daily-grid-details-item">
                    <label>Pressure</label>
                    <label>{item.main.pressure}hPa</label>
                  </div>
                  <div className="daily-grid-details-item">
                    <label>Humidity</label>
                    <label>{item.main.humidity}%</label>
                  </div>
                  <div className="daily-grid-details-item">
                    <label>Clouds</label>
                    <label>{item.clouds.all}%</label>
                  </div>
                  <div className="daily-grid-details-item">
                    <label>Wind Speed</label>
                    <label>{item.wind.speed} m/s</label>
                  </div>
                  <div className="daily-grid-details-item">
                    <label>Sea Level</label>
                    <label>{item.main.sea_level}m</label>
                  </div>
                  <div className="daily-grid-details-item">
                    <label>Feels Like</label>
                    <label>{Math.round(item.main.feels_like)}°c</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </>
    );

}

export default Forecast;