import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/styles";
import { grey } from '@material-ui/core/colors';

    const useStyles = makeStyles((theme) => ({
        "button":{
            backgroundColor:'grey',
            color:"#000",
            fontSize:16,
            height:48,
            marginButton:16,
            width:256
        }
    }))

const GrayButton = (props) => {
    const classes = useStyles();
    return(
        <Button className={classes.button} variant="contained" onClick={() => props.onClick()}>
            {props.label}
        </Button>
    )
}

export default GrayButton