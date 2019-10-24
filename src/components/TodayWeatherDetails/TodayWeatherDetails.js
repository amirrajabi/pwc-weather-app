import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

TodayWeather.prototype = {
  precipIntensity: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  visibility: PropTypes.number.isRequired
};

TodayWeather.defaultProps = {};

export default function TodayWeather({
  precipIntensity,
  humidity,
  wind,
  visibility
}) {
  return (
    <div>
      <Typography variant="subtitle2" component="p" gutterBottom>
        Precipitation: {precipIntensity}
      </Typography>
      <Typography variant="subtitle2" component="p" gutterBottom>
        Humidity: {Math.round(humidity * 100)}%
      </Typography>
      <Typography variant="subtitle2" component="p" gutterBottom>
        Wind: {wind} kph
      </Typography>
      <Typography variant="subtitle2" component="p" gutterBottom>
        Visibility: {Math.round(visibility)}%
      </Typography>
    </div>
  );
}
