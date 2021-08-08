import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {
  Avatar,
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import CardAtom from "./cardAtom";
import image from "../Static/assets/images.jpg";
import SingleFeed from "./SingleFeed";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    margin: "5px",
    marginLeft: 0,
    display: "flex",
    flexWrap: "wrap",

    "@media(min-width: 1600px)": {
      width: "88%",
    },
    "@media(max-width: 1000px)": {
      width: "98%",
      justifyContent: "center",
    },
  },
  root_filter_inner: {
    width: "0%",
    position: "relative",
  },
  root_filter: {
    width: "20%",
    marginRight: "5%",
    "@media(max-width: 1400px)": {
      width: "25%",
      right: "5%",
    },
    "@media(max-width: 1000px)": {
      display: "none",
    },
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
  root_flex_itmes: {
    width: "95%",
    margin: "20px 60px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    "@media(max-width: 1000px)": {
      width: "98%",
      justifyContent: "center",
      margin: "20px auto",
    },
  },
  flex_heading: {
    width: "90%",
    margin: "20px auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    "@media(max-width: 1000px)": {
      width: "98%",
      justifyContent: "space-between",
    },
  },
  root_news: {
    margin: "20px auto",
    maxWidth: 360,
  },
  root_news_fiexd: {
    margin: "20px auto",
    top: "420px",
    position: "fixed",
    width: "20%",
    right: "3%",
    backgroundColor: theme.palette.background.paper,
  },
  root_list_fiexd: {
    margin: "0 auto",
    top: "120px",
    position: "fixed",
    width: "20%",
    right: "3%",
  },
  root_list: {
    width: "100%",
    maxWidth: 360,
    margin: "0 auto",
  },
  image: {
    width: "100%",
    height: "280px",
    margin: "0 auto",
  },
  image_top_img: {
    width: "100%",
    height: "120px",
  },
  image_top: {
    width: "90%",
    height: "120px",
    margin: "0 auto",
    alignItem: "center",
    textAlign: "center",
    "@media(max-width: 1000px)": {
      width: "98%",
    },
  },
  pagination: {
    width: "90%",
    height: "120px",
    margin: "120px auto",
    alignItem: "center",
    textAlign: "center",
    "@media(max-width: 1000px)": {
      width: "350px",
      height: "50px",
      margin: "120px auto",
      alignItem: "center",
      display: "flex",
      justifyContent: "center",
    },
    "@media(max-width: 425px)": {
      zoom: 0.8,
      height: "40px",
    },
  },
  root_list_top: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  root_list_top_modal: {
    maxWidth: "450px",
    backgroundColor: theme.palette.background.paper,
  },
  smallAvatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    fontSize: "12px",
  },
  listItme: {
    "&:hover": {
      background: "rgba(255,255,250,0.6)",
      boxShadow: "0 0px 3px grey",
      cursor: "pointer",
      //   transform: "translateX(5px)",
    },
  },
}));

export default function SingleNews() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const data = [
    {
      id: 14,
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      category: "Technology",
      color: "blue",

      size: 4,
      author: "Albert Wenger",
      title: "The case for funding fusion",
      description:
        "Now is the time to go all-in on decarbonization. Funding fusion with its breakthrough potential must be part of that effort.",
      url: "https://techcrunch.com/2021/07/10/the-case-for-funding-fusion/",
      urlToImage:
        "https://themes.hasthemes.com/hashnews/wp-content/uploads/2018/02/27-371x221.jpeg?w=600",
      publishedAt: "2021-07-10",
      content:
        "Digital technologies have disrupted the structure of markets with unprecedented breadth and scale. Today, there is yet another wave of innovation emerging, and that is the decarbonization of the glob… [+4507 chars]",
    },
  ];
  const dataCategory = [
    { id: 1, title: "Travel12", color: "red", number: 4 },
    { id: 2, title: "Technology10", color: "orange", number: 10 },
    { id: 3, title: "Food & Drinks15", color: "green", number: 15 },
    { id: 4, title: "Lifestyle11", color: "blue", number: 4 },
    { id: 5, title: "Entertainment", color: "purpule", number: 6 },
  ];
  const [box, setBox] = useState(false);
  const geFirstletter = (d) => {
    let str = d;
    console.log(d, "fdfd");
    // let ret = str.substring(0, 1);
    // return ret;
  };
  const fitbox = () => {
    if (window.scrollY >= 90) {
      setBox(true);
    } else {
      setBox(false);
    }
  };
  const [setGrid, setsetGrid] = useState(false);

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1000 ? setsetGrid(true) : setsetGrid(false);
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);
  window.addEventListener("scroll", fitbox);
  return (
    <div style={{ paddingTop: "120px" }}>
      <Grid className={classes.image_top}>
        <img src={image} className={classes.image_top_img} alt=" " />
      </Grid>
      <Grid className={classes.flex_heading}>
        <Typography
          variant="h5"
          color="white"
          component="p"
          style={{ color: "white" }}
        >
          Latest News
        </Typography>
        {setGrid && (
          <Button
            variant="contained"
            color="white"
            contained
            onClick={handleOpen}
          >
            Category Filter
          </Button>
        )}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Categories</DialogTitle>
          <DialogContent>
            <List className={classes.root_list_top_modal}>
              {dataCategory.map((d, i) => (
                <ListItem className={classes.listItme}>
                  <ListItemText id="switch-list-label-wifi" primary={d.title} />
                  <ListItemSecondaryAction>
                    <Avatar
                      className={classes.smallAvatar}
                      style={{ background: `${d.color}` }}
                    >
                      {d.number}
                    </Avatar>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </DialogContent>
        </Dialog>
      </Grid>
      <Grid className={classes.root_flex_itmes}>
        <Grid></Grid>
        <Grid className={classes.root}>
          {data.map((d, i) => (
            <SingleFeed d={d} />
          ))}
        </Grid>

        <Grid className={classes.root_filter}>
          <Grid className={box ? classes.root_list_fiexd : classes.root_list}>
            <List className={classes.root_list_top}>
              <ListItem>Categories</ListItem>
              {dataCategory.map((d, i) => (
                <ListItem className={classes.listItme}>
                  <ListItemText id="switch-list-label-wifi" primary={d.title} />
                  <ListItemSecondaryAction>
                    <Avatar
                      className={classes.smallAvatar}
                      style={{ background: `${d.color}` }}
                    >
                      {d.number}
                    </Avatar>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
            <Grid className={box ? classes.root_news_fiexd : classes.root_news}>
              <img src={image} className={classes.image} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.pagination}>
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button>
            <ArrowLeftIcon />
          </Button>
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>...</Button>
            <Button>9</Button>
            <Button>10</Button>
          </ButtonGroup>
          <Button>
            <ArrowRightIcon />
          </Button>
        </ButtonGroup>
      </Grid>
    </div>
  );
}
