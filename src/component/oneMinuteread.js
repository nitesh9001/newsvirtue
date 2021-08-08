import React from "react";
import SliderRead from "./SliderRead";
import ScrollableTabsButtonAuto from "./TabsContent";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import CardNews from "./CardNews";

const UseStyles = makeStyles((theme) => ({
  app_bar: {
    height: "47px !important",
  },
  div_heading: {
    width: "30%",
    height: "35px",
    margin: "9px",
  },
  div_heading_title: {
    fontSize: "20px",
    fontWeight: "bold",
    paddingLeft: "10px",
    borderLeft: "3px solid white",
  },
  paperroot: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(19),
      height: theme.spacing(19),
    },
  },
  avatar_root: {
    margin: "0 auto",
    width: "50px",
    height: "50px",
    background: "white",
    boxShadow: "0 2px 6px grey",
  },
}));

function oneMinuteread() {
  const classes = UseStyles();

  const constDataFollow = [
    {
      id: 1,
      avatar: "fa fa-fw fa-twitter",
      title: "Followers",
      followers: "40",
      color: "#40bff5",
      link: "/twitter",
    },
    {
      id: 2,
      avatar: "fa fa-fw fa-facebook",
      title: "Followers",
      followers: "40",
      color: "#eb5e4c",
      link: "/facebook",
    },
    {
      id: 3,
      avatar: "fa fa-fw fa-instagram",
      title: "Followers",
      followers: "40",
      color: "#3B5998",
      link: "/instagram",
    },
    {
      id: 4,
      avatar: "fa fa-fw fa-linkedin",
      title: "Followers",
      followers: "40",
      color: "#40bff5",
      link: "/linkedin",
    },
  ];

  return (
    <div className="top_positon_one_read">
      <div className="header_news_slider">
        <div className="header_title">
          <div className="wrapper_header_title">
            <p>Breaking News</p>
          </div>
        </div>
        <div className="news_header_content">
          <p>If you are going to use a passage generator</p>
        </div>
        <div className="changer_next_prev">
          <button>
            <i className="fa fa-caret-left"></i>
          </button>
          <button>
            <i className="fa fa-caret-right"></i>
          </button>
        </div>
      </div>
      <div>
        <SliderRead />
      </div>
      <div style={{ textAlign: "center", margin: "60px auto" }}>
        <p className="p_tag_for_heading">Grab Your favrouite News </p>
      </div>
      <div className="header_news_tavb_scroll">
        <div className="header_news_tavb_scroll_flex right">
          <ScrollableTabsButtonAuto />
        </div>
        <div className="header_news_tavb_scroll_flex left ">
          <div>
            <AppBar position="static" className={classes.app_bar}>
              <div className={classes.div_heading}>
                <div className={classes.div_heading_title}>Follow Us</div>
              </div>
            </AppBar>
          </div>
          <div className="top_border">
            <div className={classes.paperroot}>
              {constDataFollow.map((d, i) => (
                <Paper elevation={3} style={{ background: d.color }}>
                  <div
                    style={{
                      margin: "20px auto",
                      width: "80%",
                      textAlign: "center",
                    }}
                  >
                    <Link to={`/${d.link}`} style={{ textDecoration: "none" }}>
                      <Avatar className={classes.avatar_root}>
                        <i className={d.avatar} style={{ color: d.color }}></i>
                      </Avatar>
                      <div className="text_follow_width">
                        <div className="text_follow">{d.followers}</div>
                        <div className="text_follow">{d.title}</div>
                      </div>
                    </Link>
                  </div>
                </Paper>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <CardNews />
      </div>
    </div>
  );
}

export default oneMinuteread;
