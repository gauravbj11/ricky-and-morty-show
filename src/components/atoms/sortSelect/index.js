import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    paddig: theme.spacing(1)
  },
  select: {
    textAlign: "left"
  }
}));

export default function SortSelect(props) {
  const classes = useStyles();
  const { sortValue, onSortChange } = props;

  const handleChange = event => {
    const {
      target: { value }
    } = event;
    onSortChange(value);
  };

  return (
    <FormControl className={classes.formControl} fullWidth>
      <InputLabel id="simple-select-label">Sort By Id</InputLabel>
      <Select
        labelId="simple-select-label"
        id="simple-select"
        value={sortValue}
        onChange={handleChange}
        className={classes.select}
      >
        <MenuItem value={"asc"}>Ascending</MenuItem>
        <MenuItem value={"desc"}>Descending</MenuItem>
      </Select>
    </FormControl>
  );
}
