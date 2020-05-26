import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  panel: {
    height: "100vh"
  },
  formControl: {
    padding: theme.spacing(2)
  },
  legend: {
    textAlign: "left"
  }
}));

export function CheckboxesGroup(props) {
  const classes = useStyles();
  const { filtersData, onFilterChange } = props;

  const {
    human,
    alien,
    male,
    female,
    unknown,
    postApoOrigin,
    nuptia
  } = filtersData;

  return (
    <div>
      <FormControl
        component="fieldset"
        className={classes.formControl}
        fullWidth
      >
        <FormLabel component="legend" className={classes.legend}>
          Species
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={human}
                onChange={onFilterChange}
                name="species:human"
                color="primary"
              />
            }
            label="Human"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={alien}
                onChange={onFilterChange}
                name="species:alien"
                color="primary"
              />
            }
            label="Alien"
          />
        </FormGroup>
      </FormControl>
      <FormControl
        component="fieldset"
        className={classes.formControl}
        fullWidth
      >
        <FormLabel component="legend" className={classes.legend}>
          Gender
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={male}
                onChange={onFilterChange}
                name="gender:male"
                color="primary"
              />
            }
            label="Male"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={female}
                onChange={onFilterChange}
                name="gender:female"
                color="primary"
              />
            }
            label="Female"
          />
        </FormGroup>
      </FormControl>
      <FormControl
        component="fieldset"
        className={classes.formControl}
        fullWidth
      >
        <FormLabel component="legend" className={classes.legend}>
          Origin
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={unknown}
                onChange={onFilterChange}
                name="origin:unknown"
                color="primary"
              />
            }
            label="Unknown"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={postApoOrigin}
                onChange={onFilterChange}
                name="origin:postApoOrigin"
                color="primary"
              />
            }
            label="Post-Apoclyptic Earth"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={nuptia}
                onChange={onFilterChange}
                name="origin:nuptia"
                color="primary"
              />
            }
            label="Nuptia 4"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default function FilterPanel(props) {
  const classes = useStyles();
  return (
    <aside>
      <Paper elevation={3} className={classes.panel}>
        <Typography variant="h5">Filters</Typography>
        <CheckboxesGroup {...props} />
      </Paper>
    </aside>
  );
}
