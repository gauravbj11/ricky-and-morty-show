import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import DisplayCard from "../displayCard";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "#ebedf9",
    padding: 32
  },
  gridList: {
    transform: "translateZ(0)",
    width: "100%"
  },
  gridListTile: {
    height: "100%"
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  noDataState: {
    backgroundColor: "#ebedf9",
    height: "100%",
    padding: "25%"
  }
}));

function NoDataState() {
  const classes = useStyles();
  return (
    <Box className={classes.noDataState}>
      <Typography>
        Sorry we couldn't find any matches for applied filters
      </Typography>
    </Box>
  );
}

export default function CardsGrid(props) {
  const classes = useStyles();
  const { cards } = props;
  if (cards.length === 0) {
    return <NoDataState />;
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <GridList cellHeight={550} spacing={10} className={classes.gridList}>
          {cards.map(card => (
            <Grid item xs={6} sm={6} lg={3} key={card.id.toString()}>
              <GridListTile key={card.image} className={classes.gridListTile}>
                <DisplayCard cardInfo={card} />
              </GridListTile>
            </Grid>
          ))}
        </GridList>
      </Grid>
    </div>
  );
}
