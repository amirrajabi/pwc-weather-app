import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  days: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  card: {
    width: 130,
    margin: theme.spacing(2, 2),
    textAlign: "center"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12,
    marginLeft: -15
  },
  icon: {
    width: 60
  },
  degree: {
    position: "relative"
  },
  degreeDot: {
    position: "absolute",
    top: -35,
    marginLeft: 5,
    border: "1px solid #000",
    borderRadius: "50%",
    height: 5,
    width: 5
  },
  degreeLetter: {
    position: "absolute",
    fontSize: 12,
    fontWeight: 100,
    top: -38,
    marginLeft: 14
  }
}));
