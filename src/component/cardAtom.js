import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {
  Avatar,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Chip,
  IconButton,
} from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import { Redirect } from "react-router";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
  },
  root_card: {
    width: "320px",
    margin: "8px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  flex_action: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tag_style: {
    position: "absolute",
    top: "6px",
    zIndex: "5",
    left: "5px",
    color: "white",
  },
  tag_style_share: {
    position: "absolute",
    top: "6px",
    zIndex: "5",
    right: "5px",
    background: "white",
    "&:hover": {
      background: "rgba(255,255,255,0.8)",
    },
  },
  flex_heading: {
    width: "90%",
    margin: "20px auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

export default function CardAtom({ d }) {
  const classes = useStyles();

  const geFirstletter = (d) => {
    let str = d;
    console.log(d, "fdfd");
    // let ret = str.substring(0, 1);
    // return ret;
  };

  return (
    <Card className={classes.root_card}>
      <Chip
        size="small"
        label={d.category}
        style={{ background: d.color }}
        className={classes.tag_style}
      />
      <IconButton
        aria-label="share"
        color="primary"
        className={classes.tag_style_share}
      >
        <ShareIcon fontSize="small" />
      </IconButton>
      <CardActionArea>
        <img
          onClick={() => {
            console.log(d.id);
            window.location.href = `newsfeed/${d.id}`;
          }}
          className={classes.media}
          src={d.urlToImage}
          height="200px"
          width="320px"
          alt="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="body1" color="textSecondary" component="p">
            {d.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.flex_action}>
        <Chip
          avatar={<Avatar>{geFirstletter(`${d.auther}`)}</Avatar>}
          label={d.author}
          variant="outlined"
        />
        <Typography variant="caption">{d.publishedAt}</Typography>
      </CardActions>
    </Card>
  );
}
