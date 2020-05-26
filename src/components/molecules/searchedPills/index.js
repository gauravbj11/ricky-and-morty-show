import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import { getPillsData } from "../../../utilities";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: theme.spacing(2)
  },
  pills: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0
  },
  pill: {
    margin: theme.spacing(0.5)
  }
}));

export default function SearchedPills(props) {
  const classes = useStyles();
  const { filtersData, onPillsDelete } = props;
  const pillsArr = getPillsData(filtersData);

  const handleDelete = chipToDelete => () => {
    const event = {
      target: {
        name: `:${chipToDelete}`,
        checked: false
      }
    };
    onPillsDelete(event);
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h5">Selected Filters</Typography>
      <List component="ul" className={classes.pills}>
        {pillsArr.map(data => {
          return (
            <li key={data.key}>
              <Chip
                label={data.label}
                className={classes.pill}
                onDelete={handleDelete(data.key)}
                color="primary"
                variant="outlined"
              />
            </li>
          );
        })}
      </List>
    </Box>
  );
}
