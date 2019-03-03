const styles = theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: `${theme.spacing.unit * 3}px`
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing.unit
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`
  }
});

export default styles;
