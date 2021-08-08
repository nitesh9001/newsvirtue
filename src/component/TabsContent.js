import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TabGridNews from "../component/TabGridNews";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "transparent",
  },
  appbarcss: {
    background: "#0099ff",
    display: "flex",
    flexDirection: "row",
  },
  tabs_flex: {
    width: "70%",
  },
  div_heading: {
    width: "30%",
    margin: "9px",
  },
  div_heading_title: {
    fontSize: "20px",
    fontWeight: "bold",
    paddingLeft: "10px",
    borderLeft: "3px solid white",
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbarcss}>
        <div className={classes.div_heading}>
          <div className="div_heading_title">Featured News</div>
        </div>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="white"
          variant="scrollable"
          scrollButtons="auto"
          className={classes.tabs_flex}
          aria-label="scrollable auto tabs example"
        >
          <Tab label="All" {...a11yProps(2)} />
          <Tab label="Polictical" {...a11yProps(3)} />
          <Tab label="Sports" {...a11yProps(4)} />
          <Tab label="Technology" {...a11yProps(5)} />
          <Tab label="Fashion" {...a11yProps(6)} />
          <Tab label="Travel" {...a11yProps(7)} />
          <Tab label="CryptoCurrency" {...a11yProps(8)} />
          <Tab label="Econmoics" {...a11yProps(9)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <TabGridNews />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Technology
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
