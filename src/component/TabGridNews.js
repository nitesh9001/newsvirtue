import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { Chip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "wrap",
    height: "280px",
    wordWrap: "wrap",
    marginBottom: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    position: "relative",
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  paper_bottom: {},
  typo_title: {
    background: "rgba(0,0,0,0.5)",
    color: "white",
    // fontWeight: "bold",
    padding: "5px",
    // height: "100px",
  },
  tag_style: {
    position: "absolute",
    top: "6px",
    color: "white",
  },
}));

export default function TabGridNews() {
  const classes = useStyles();

  const data = [
    {
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
      publishedAt: "2021-07-10T22:30:04Z",
      content:
        "Virgin Galactic is set to launch its first passengers to space tomorrow morning, and you can watch the whole thing right here. The launch is scheduled for 6 AM Pacific, with streaming festivities (in… [+918 chars]",
    },
    {
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
      publishedAt: "2021-07-10T18:03:29Z",
      content:
        "Welcome back to This Week in Apps, the weekly TechCrunch series that recaps the latest in mobile OS news, mobile applications and the overall app economy.\r\nThe app industry continues to grow, with a … [+18487 chars]",
    },
    {
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
      publishedAt: "2021-07-10T18:00:32Z",
      content:
        "After months of beta testing, Y Combinator has launched a co-founder matching platform. The platform invites entrepreneurs to create profiles, which include information about themselves and preferenc… [+8135 chars]",
    },
    {
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
      publishedAt: "2021-07-10T17:00:43Z",
      content:
        "Welcome back to The TechCrunch Exchange, a weekly startups-and-markets newsletter. Its inspired by what the weekday Exchange column digs into, but free, and made for your weekend reading. Want it in … [+5528 chars]",
    },
    {
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
      publishedAt: "2021-07-10T16:09:48Z",
      content:
        "Digital technologies have disrupted the structure of markets with unprecedented breadth and scale. Today, there is yet another wave of innovation emerging, and that is the decarbonization of the glob… [+4507 chars]",
    },
  ];
  const [setGrid, setsetGrid] = useState(0);

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 781 && window.innerWidth > 425
        ? setsetGrid(1)
        : window.innerWidth < 425
        ? setsetGrid(2)
        : setsetGrid(3);
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  return (
    <div>
      <Grid container spacing={1} className="grid_responive">
        {data.map((d, i) => (
          <Grid
            item
            xs={
              setGrid === 0
                ? d.size
                : setGrid === 1
                ? 6
                : setGrid === 2
                ? 12
                : d.size
            }
            className={classes.customegrid}
          >
            <Paper
              className={classes.paper}
              style={{ backgroundImage: `url(${d.urlToImage})` }}
            >
              <Chip
                size="small"
                label={d.category}
                style={{ background: d.color }}
                className={classes.tag_style}
              />
              <Grid className={classes.paper_bottom}>
                <Typography className={classes.typo_title}>
                  {d.title}
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Divider className={classes.divider} />
    </div>
  );
}
