import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import weekdays from "../../utils/weekdays";
import timeConvert from "../../utils/time";
import { icons } from "../../utils/icons";

import { useStyles } from "./WeekDays.styles";

WeekDays.prototype = {
  days: PropTypes.array.isRequired
};

WeekDays.defaultProps = {};

export default function WeekDays({ days }) {
  const classes = useStyles();

  const MaxMin = degree => {
    return (
      <div>
        <Typography className={classes.pos}>
          {Math.round(((degree - 32) * 5) / 9)}
        </Typography>
        <div className={classes.degree}>
          <span className={classes.degreeDot}>
            <Typography variant="srOnly">degree</Typography>
          </span>
          <span className={classes.degreeLetter}>
            <Typography variant="srOnly">celsius</Typography>
            <span aria-hidden={true}>C</span>
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className={classes.days}>
      {days.slice(2, 8).map(item => (
        <Card key={item.time} className={classes.card}>
          <CardContent>
            <img
              alt={item.icon}
              src={icons[item.icon]}
              className={classes.icon}
            />
            <Typography variant="srOnly">max temperature</Typography>
            {MaxMin(item.temperatureMax)}
            <Typography variant="srOnly">min temperature</Typography>
            {MaxMin(item.temperatureMin)}
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {weekdays(timeConvert(item.time).weekDay)}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
