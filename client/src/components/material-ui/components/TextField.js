import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/style_Question";

import { TextField } from "@material-ui/core";

const mTextField = props => {
  const { classes } = props;

  return (
    <div>
      <TextField
        style={{ width: "100%" }}
        className={classes.margin}
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused
          }
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline
          }
        }}
        label="Question"
        variant="outlined"
        id="custom-css-outlined-input"
      />
    </div>
  );
};

export default withStyles(styles)(mTextField);
