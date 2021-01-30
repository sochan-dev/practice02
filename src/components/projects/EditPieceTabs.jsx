import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
  root: {
    width:'100%',
    padding:0,
    margin:0
  },
  tab:{
      minWidth:'0',
      width:'33%',
  }
});


const TabPanel = (props) => {
    const classes = useStyles();
    const { children, value, i } = props;

    return (
    <div
        className={classes.root}
        role="tabpanel"
        hidden={value !== i}
        id={`simple-tabpanel-${i}`}
        aria-labelledby={`simple-tab-${i}`}
    >
        {value === i && (
            <Box>
                {children}
            </Box>
        )}
    </div>
    );
}


const EditPieceTabs = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(props.initialValue);
    const handleChange = (e,newValue) => {
    setValue(newValue);
    };

  return (
    <>
        <Tabs
            className={classes.root}
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            centered
        >
            {props.labels.map((label,i) => <Tab label={label} key={i} className={classes.tab} disabled={props.tabDisable[i]}></Tab>)}
        </Tabs>

        {props.children.map((child, i) =>
            <TabPanel value={value} i={i} key={i}>{child}</TabPanel>)
        }
    </>
  );
}

export default EditPieceTabs