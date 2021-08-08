import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import {
  Avatar,
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Grid,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import CardAtom from "./cardAtom";
import image from "../Static/assets/images.jpg";

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
    margin: "0px 5%",
    "@media(max-width: 1000px)": {
      width: "90%",
      margin: "0 auto",
      alignItem: "center",
      textAlign: "center",
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

export default function NewsList() {
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
      id: 1,
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      size: 3,
      category: "Sports",
      color: "green",

      author: "Manish Singh",
      title:
        "Twitter appoints resident grievance officer in India to comply with new internet rules",
      description:
        "Twitter has appointed a resident grievance officer in India days after the American social media firm said to have lost the liability protection on user-generated content in the South Asian nation over non-compliance with local IT rules. On Sunday, Twitter id…",
      url: "https://techcrunch.com/2021/07/10/twitter-appoints-resident-grievance-officer-in-india-to-comply-with-new-internet-rules/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2021/05/GettyImages-866244028.jpg?w=600",
      publishedAt: "2021-07-11T06:55:03Z",
      content:
        "Twitter has appointed a resident grievance officer in India days after the American social media firm said to have lost the liability protection on user-generated content in the South Asian nation ov… [+2450 chars]",
    },
    {
      id: 2,
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      color: "blue",

      category: "Technology",
      size: 3,
      author: "Devin Coldewey",
      title:
        "Watch live as Virgin Galactic's first passenger flight takes off with Richard Branson on board",
      description:
        "Virgin Galactic is set to launch its first passengers to space tomorrow morning, and you can watch the whole thing right here. The launch is scheduled for 6 AM Pacific, with streaming festivities (including commentary by Stephen Colbert) starting on the hour.…",
      url: "https://techcrunch.com/2021/07/10/watch-live-as-virgin-galactics-first-passenger-flight-takes-off-with-richard-branson-on-board/",
      urlToImage:
        "https://themes.hasthemes.com/hashnews/wp-content/uploads/2018/02/27-371x221.jpeg?w=600",
      publishedAt: "2021-07-10",
      content:
        "Virgin Galactic is set to launch its first passengers to space tomorrow morning, and you can watch the whole thing right here. The launch is scheduled for 6 AM Pacific, with streaming festivities (in… [+918 chars]",
    },
    {
      id: 3,
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      size: 3,
      category: "Technology",
      color: "blue",

      author: "Sarah Perez",
      title:
        "This Week in Apps: Android ad prices jump, TikTok resumes, Google Play's antitrust lawsuit",
      description:
        "Welcome back to This Week in Apps, the weekly TechCrunch series that recaps the latest in mobile OS news, mobile applications and the overall app economy. The app industry continues to grow, with a record 218 billion downloads and $143 billion in global consu…",
      url: "https://techcrunch.com/2021/07/10/this-week-in-apps-android-ad-prices-jump-tiktok-resumes-google-plays-antitrust-lawsuit/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2020/10/this-week-in-apps-splash-2.png?w=753",
      publishedAt: "2021-07-10",
      content:
        "Welcome back to This Week in Apps, the weekly TechCrunch series that recaps the latest in mobile OS news, mobile applications and the overall app economy.\r\nThe app industry continues to grow, with a … [+18487 chars]",
    },
    {
      id: 4,
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      category: "Business",
      color: "yellow",

      size: 3,
      author: "Natasha Mascarenhas",
      title: "The 36 questions that lead to love (but with your co-founder)",
      description:
        "After months of beta testing, Y Combinator has launched a co-founder matching platform. The platform invites entrepreneurs to create profiles, which include information about themselves and preferences for a co-founder, such as location and skill sets. It dig…",
      url: "https://techcrunch.com/2021/07/10/the-36-questions-that-lead-to-love-but-with-your-co-founder/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2019/09/GettyImages-594836455.jpg?w=533",
      publishedAt: "2021-07-10",
      content:
        "After months of beta testing, Y Combinator has launched a co-founder matching platform. The platform invites entrepreneurs to create profiles, which include information about themselves and preferenc… [+8135 chars]",
    },
    {
      id: 5,
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      size: 3,
      category: "Sports",
      color: "green",

      author: "Manish Singh",
      title:
        "Twitter appoints resident grievance officer in India to comply with new internet rules",
      description:
        "Twitter has appointed a resident grievance officer in India days after the American social media firm said to have lost the liability protection on user-generated content in the South Asian nation over non-compliance with local IT rules. On Sunday, Twitter id…",
      url: "https://techcrunch.com/2021/07/10/twitter-appoints-resident-grievance-officer-in-india-to-comply-with-new-internet-rules/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2021/05/GettyImages-866244028.jpg?w=600",
      publishedAt: "2021-07-11T06:55:03Z",
      content:
        "Twitter has appointed a resident grievance officer in India days after the American social media firm said to have lost the liability protection on user-generated content in the South Asian nation ov… [+2450 chars]",
    },
    {
      id: 6,
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      color: "blue",

      category: "Technology",
      size: 3,
      author: "Devin Coldewey",
      title:
        "Watch live as Virgin Galactic's first passenger flight takes off with Richard Branson on board",
      description:
        "Virgin Galactic is set to launch its first passengers to space tomorrow morning, and you can watch the whole thing right here. The launch is scheduled for 6 AM Pacific, with streaming festivities (including commentary by Stephen Colbert) starting on the hour.…",
      url: "https://techcrunch.com/2021/07/10/watch-live-as-virgin-galactics-first-passenger-flight-takes-off-with-richard-branson-on-board/",
      urlToImage:
        "https://themes.hasthemes.com/hashnews/wp-content/uploads/2018/02/27-371x221.jpeg?w=600",
      publishedAt: "2021-07-10",
      content:
        "Virgin Galactic is set to launch its first passengers to space tomorrow morning, and you can watch the whole thing right here. The launch is scheduled for 6 AM Pacific, with streaming festivities (in… [+918 chars]",
    },
    {
      id: 7,
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      size: 3,
      category: "Technology",
      color: "blue",

      author: "Sarah Perez",
      title:
        "This Week in Apps: Android ad prices jump, TikTok resumes, Google Play's antitrust lawsuit",
      description:
        "Welcome back to This Week in Apps, the weekly TechCrunch series that recaps the latest in mobile OS news, mobile applications and the overall app economy. The app industry continues to grow, with a record 218 billion downloads and $143 billion in global consu…",
      url: "https://techcrunch.com/2021/07/10/this-week-in-apps-android-ad-prices-jump-tiktok-resumes-google-plays-antitrust-lawsuit/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2020/10/this-week-in-apps-splash-2.png?w=753",
      publishedAt: "2021-07-10",
      content:
        "Welcome back to This Week in Apps, the weekly TechCrunch series that recaps the latest in mobile OS news, mobile applications and the overall app economy.\r\nThe app industry continues to grow, with a … [+18487 chars]",
    },
    {
      id: 8,
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      category: "Business",
      color: "yellow",

      size: 3,
      author: "Natasha Mascarenhas",
      title: "The 36 questions that lead to love (but with your co-founder)",
      description:
        "After months of beta testing, Y Combinator has launched a co-founder matching platform. The platform invites entrepreneurs to create profiles, which include information about themselves and preferences for a co-founder, such as location and skill sets. It dig…",
      url: "https://techcrunch.com/2021/07/10/the-36-questions-that-lead-to-love-but-with-your-co-founder/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2019/09/GettyImages-594836455.jpg?w=533",
      publishedAt: "2021-07-10",
      content:
        "After months of beta testing, Y Combinator has launched a co-founder matching platform. The platform invites entrepreneurs to create profiles, which include information about themselves and preferenc… [+8135 chars]",
    },
    {
      id: 9,
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      size: 3,
      category: "Sports",
      color: "green",

      author: "Manish Singh",
      title:
        "Twitter appoints resident grievance officer in India to comply with new internet rules",
      description:
        "Twitter has appointed a resident grievance officer in India days after the American social media firm said to have lost the liability protection on user-generated content in the South Asian nation over non-compliance with local IT rules. On Sunday, Twitter id…",
      url: "https://techcrunch.com/2021/07/10/twitter-appoints-resident-grievance-officer-in-india-to-comply-with-new-internet-rules/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2021/05/GettyImages-866244028.jpg?w=600",
      publishedAt: "2021-07-11T06:55:03Z",
      content:
        "Twitter has appointed a resident grievance officer in India days after the American social media firm said to have lost the liability protection on user-generated content in the South Asian nation ov… [+2450 chars]",
    },
    {
      id: 10,
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      color: "blue",

      category: "Technology",
      size: 3,
      author: "Devin Coldewey",
      title:
        "Watch live as Virgin Galactic's first passenger flight takes off with Richard Branson on board",
      description:
        "Virgin Galactic is set to launch its first passengers to space tomorrow morning, and you can watch the whole thing right here. The launch is scheduled for 6 AM Pacific, with streaming festivities (including commentary by Stephen Colbert) starting on the hour.…",
      url: "https://techcrunch.com/2021/07/10/watch-live-as-virgin-galactics-first-passenger-flight-takes-off-with-richard-branson-on-board/",
      urlToImage:
        "https://themes.hasthemes.com/hashnews/wp-content/uploads/2018/02/27-371x221.jpeg?w=600",
      publishedAt: "2021-07-10",
      content:
        "Virgin Galactic is set to launch its first passengers to space tomorrow morning, and you can watch the whole thing right here. The launch is scheduled for 6 AM Pacific, with streaming festivities (in… [+918 chars]",
    },
    {
      id: 11,
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      size: 3,
      category: "Technology",
      color: "blue",

      author: "Sarah Perez",
      title:
        "This Week in Apps: Android ad prices jump, TikTok resumes, Google Play's antitrust lawsuit",
      description:
        "Welcome back to This Week in Apps, the weekly TechCrunch series that recaps the latest in mobile OS news, mobile applications and the overall app economy. The app industry continues to grow, with a record 218 billion downloads and $143 billion in global consu…",
      url: "https://techcrunch.com/2021/07/10/this-week-in-apps-android-ad-prices-jump-tiktok-resumes-google-plays-antitrust-lawsuit/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2020/10/this-week-in-apps-splash-2.png?w=753",
      publishedAt: "2021-07-10",
      content:
        "Welcome back to This Week in Apps, the weekly TechCrunch series that recaps the latest in mobile OS news, mobile applications and the overall app economy.\r\nThe app industry continues to grow, with a … [+18487 chars]",
    },
    {
      id: 12,
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      category: "Business",
      color: "yellow",

      size: 3,
      author: "Natasha Mascarenhas",
      title: "The 36 questions that lead to love (but with your co-founder)",
      description:
        "After months of beta testing, Y Combinator has launched a co-founder matching platform. The platform invites entrepreneurs to create profiles, which include information about themselves and preferences for a co-founder, such as location and skill sets. It dig…",
      url: "https://techcrunch.com/2021/07/10/the-36-questions-that-lead-to-love-but-with-your-co-founder/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2019/09/GettyImages-594836455.jpg?w=533",
      publishedAt: "2021-07-10",
      content:
        "After months of beta testing, Y Combinator has launched a co-founder matching platform. The platform invites entrepreneurs to create profiles, which include information about themselves and preferenc… [+8135 chars]",
    },
    {
      id: 13,
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      category: "Political",
      color: "red",

      size: 8,
      author: "Alex Wilhelm",
      title:
        "Trillion-dollar horses, surfeit funding rounds and Future’s future",
      description:
        "Welcome back to The TechCrunch Exchange, a weekly startups-and-markets newsletter for your weekend enjoyment.",
      url: "https://techcrunch.com/2021/07/10/trillion-dollar-horses-surfeit-funding-rounds-and-futures-future/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2020/06/NSussman_Techcrunch_Exchange-multicolor.jpg?w=533",
      publishedAt: "2021-07-10",
      content:
        "Welcome back to The TechCrunch Exchange, a weekly startups-and-markets newsletter. Its inspired by what the weekday Exchange column digs into, but free, and made for your weekend reading. Want it in … [+5528 chars]",
    },
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
        <Grid className={classes.root}>
          {data.map((d, i) => (
            <CardAtom d={d} />
          ))}
        </Grid>
        <Grid className={classes.root_filter_inner}></Grid>
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
              <img src={image} className={classes.image} alt="" />
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
