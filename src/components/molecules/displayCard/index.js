import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { getCreatedInfo } from "../../../utilities";

const useStyles = makeStyles({
  media: {
    height: 280
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  },
  content: {
    background: "#373748"
  },
  divider: {
    background: "#5d5656"
  },
  tileBar: {
    top: 213,
    textAlign: "left"
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 0"
  },
  listItemTitle: {
    color: "#9c9999",
    minWidth: "30%",
    textAlign: "left"
  },
  listItemDesc: {
    color: "darkorange",
    textAlign: "right"
  },
  root: {
    height: "100%",
    background: "#373748"
  }
});

function Item(props) {
  const classes = useStyles();
  const { title, desc, hideDivider } = props;
  return (
    <>
      <div className={classes.listItem}>
        <Typography variant="body1" className={classes.listItemTitle}>
          {title}
        </Typography>
        <Typography variant="body1" className={classes.listItemDesc}>
          {desc}
        </Typography>
      </div>
      {!hideDivider && <Divider className={classes.divider} />}
    </>
  );
}

function InfoList(props) {
  const {
    infoList: { status, species, gender, origin, location }
  } = props;
  return (
    <>
      <Item title="Status" desc={status} />
      <Item title="Species" desc={species} />
      <Item title="Gender" desc={gender} />
      <Item title="Origin" desc={origin.name} />
      <Item title="Location" desc={location.name} hideDivider />
    </>
  );
}

export default function DisplayCard(props) {
  const classes = useStyles();
  const { cardInfo } = props;
  const { image, name, id, created, ...infoProps } = cardInfo;
  const year = getCreatedInfo(created);
  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.paper}>
        <CardMedia className={classes.media} image={image} />
        <GridListTileBar
          className={classes.tileBar}
          title={name}
          subtitle={`id: ${id} - Created ${year} years ago`}
        />
        <CardContent className={classes.content}>
          <InfoList infoList={infoProps} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
