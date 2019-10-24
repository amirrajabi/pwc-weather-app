import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  temperature: {
    position: "relative",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
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
    right: -35,
    cursor: "pointer"
  },
  icon: {
    width: 120
  }
}));
