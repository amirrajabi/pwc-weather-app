import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  temperature: {
    position: "relative",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: -20
  },
  temperatureText: {
    marginBottom: 10
  },
  degreeDot: {
    position: "absolute",
    top: 15,
    border: "3px solid #000",
    borderRadius: "50%",
    height: 12,
    width: 12
  },
  degreeLetter: {
    position: "absolute",
    fontSize: 26,
    fontWeight: 100,
    top: 5,
    marginLeft: 15,
    cursor: "pointer"
  },
  icon: {
    width: 120
  }
}));
