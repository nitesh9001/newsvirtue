import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Avatar, Chip, IconButton, Paper } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
  },
  root_card: {
    width: "95%",
    margin: "8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  papercard: {
    borderRadius: "10px",
    width: "70%",
    padding: "60px",
    border: "1px solid grey",
    margin: "-40px auto",
    position: "relative",
    "@media(max-width: 527px)": {
      width: "70%",
      margin: "-60px auto",
      padding: "40px",
    },
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  flex_action: {
    display: "flex",
    flexDirection: "row",
    marginTop: "40px",
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
  media: {
    width: "100%",
    margin: "0 auto",
    borderRadius: "10px",
    height: "320px",
  },
  fav: {
    color: "red",
  },
  favback: {
    background: "red",
    color: "red",
  },
}));

export default function SingleFeed({ d }) {
  const classes = useStyles();

  const geFirstletter = (d) => {
    let str = d;
    console.log(d, "fdfd");
    // let ret = str.substring(0, 1);
    // return ret;
  };
  const [fav, setfav] = useState(false);
  const clickfav = () => {
    setfav(!fav);
  };
  return (
    <Grid className={classes.root_card}>
      <Grid>
        <img
          className={classes.media}
          src={d.urlToImage}
          alt="Contemplative Reptile"
        />
        <Paper className={classes.papercard}>
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
          <Typography variant="body1" color="textSecondary" component="p">
            {d.description}
          </Typography>
          <Grid className={classes.flex_action}>
            <Chip
              avatar={<Avatar>{geFirstletter(`${d.auther}`)}</Avatar>}
              label={d.author}
              variant="outlined"
            />
            <IconButton aria-label="share" color="primary" onClick={clickfav}>
              {fav ? (
                <FavoriteIcon fontSize="small" className={classes.fav} />
              ) : (
                <FavoriteBorderIcon fontSize="small" className={classes.fav} />
              )}
            </IconButton>
            <Typography variant="caption">{d.publishedAt}</Typography>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
