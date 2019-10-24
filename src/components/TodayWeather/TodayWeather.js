import React, { useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Typography } from "@material-ui/core";

import { icons } from "../../utils/icons";

import { useStyles } from "./TodayWeather.styles";

TodayWeather.prototype = {
  city: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  precipIntensity: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  visibility: PropTypes.number.isRequired
};

TodayWeather.defaultProps = {};

export default function TodayWeather({ city, temperature, icon }) {
  const [cf, setCF] = useState(true);

  const classes = useStyles();

  function handleDegree() {
    setCF(!cf);
  }

  return (
    <div>
      <Typography variant="h3" component="p" gutterBottom>
        <Typography variant="srOnly">city name</Typography>
        {city}
      </Typography>
      <Typography variant="subtitle1" component="p" gutterBottom>
        <Typography variant="srOnly">date</Typography>
        {moment().format("dddd")}, {moment().format("MMMM Do YYYY")}
      </Typography>
      <div className={classes.temperature}>
        <img alt={icon} src={icons[icon]} className={classes.icon} />
        <Typography
          variant="h1"
          component="p"
          gutterBottom
          className={classes.temperatureText}
        >
          <Typography variant="srOnly">temperature</Typography>
          {cf
            ? Math.round(((temperature - 32) * 5) / 9)
            : Math.round(temperature)}
        </Typography>
        <div className={classes.degree}>
          <span className={classes.degreeDot}>
            <Typography variant="srOnly">degree</Typography>
          </span>
          <span className={classes.degreeLetter} onClick={handleDegree}>
            <span aria-hidden={true}>{cf ? "C" : "F"}</span>
            <Typography variant="srOnly">
              {cf ? "celsius" : "fahrenheit"}
            </Typography>
          </span>
        </div>
      </div>
    </div>
  );
}
