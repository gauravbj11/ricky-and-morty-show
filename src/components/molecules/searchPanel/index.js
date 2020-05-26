import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SearchInput from "../../atoms/searchInput";
import SortSelect from "../../atoms/sortSelect";

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2),
    paddingTop: theme.spacing(0)
  }
}));

export default function SearchPanel(props) {
  const classes = useStyles();
  const { onSearchChange, onSortChange, sortValue } = props;
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={6} lg={2}>
        <SearchInput onSearchChange={onSearchChange} />
      </Grid>
      <Grid item xs={12} sm={6} lg={2}>
        <SortSelect onSortChange={onSortChange} sortValue={sortValue} />
      </Grid>
    </Grid>
  );
}
