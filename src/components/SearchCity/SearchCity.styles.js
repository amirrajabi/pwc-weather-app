import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    maxHeight: 45,
    marginBottom: theme.spacing(4),
    width: 300
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  }
}));
