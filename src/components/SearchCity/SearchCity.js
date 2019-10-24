import React, { useState } from "react";
import PropTypes from "prop-types";
import { Paper, InputBase, Button, CircularProgress } from "@material-ui/core";

import { useStyles } from "./SearchCity.styles";

SearchCity.prototype = {
  handleSearch: PropTypes.func.isRequired,
  newLoadingData: PropTypes.bool.isRequired
};

SearchCity.defaultProps = {};

export default function SearchCity({ handleSearch, newLoadingData }) {
  const classes = useStyles();
  const [city, setCity] = useState("");

  function handleChange(e) {
    setCity(e.target.value);
  }

  function handleSearchName() {
    handleSearch(city);
  }

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="City name"
        inputProps={{ "aria-label": "City name" }}
        onChange={handleChange}
      />

      <Button
        color="secondary"
        className={classes.button}
        onClick={handleSearchName}
      >
        {newLoadingData ? (
          <CircularProgress color="secondary" size={24} />
        ) : (
          "Search"
        )}
      </Button>
    </Paper>
  );
}
