import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    padding: theme.spacing(4),
    marginTop: theme.spacing(4)
  },
  app: {
    display: "flex",
    width: "100%",
    flexDirection: "column"
  },
  todayWeather: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center"
  },
  loader: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: 120
  }
}));
