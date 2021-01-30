import React,{useState} from 'react'
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({

    root:{
        display:'flex'
    },
    child:{
        verticalAlign:'bottom',
        fontSize:'0.8rem',
        paddingTop:'0.7rem',
        margin:0
    }

})

const BothEndsLabelSwitch = (props) => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <div  className={classes.child}>
                {props.left}
            </div>
            <div>
                <Switch
                    checked={props.checked}
                    onChange={props.onChange}
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
            </div>
            <div  className={classes.child}>
                {props.right}
            </div>
        </div>
    )


}

export default BothEndsLabelSwitch