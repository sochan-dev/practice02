import React from 'react';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    inputDate:{
        width:'45%'
    }
})

const InputDateTime = (props) => {
    const classes = useStyles();

    return(
        <TextField
        label={props.label}
        fullWidth={true}
        margin="dense"
        multiline={props.multiline}
        required={props.required}
        rows={props.rows}
        //defaultValue={props.defaultValue}
        value={props.value}
        type="datetime-local"
        onChange={props.onChange}
        className={classes.inputDate}
        InputLabelProps={{
            shrink: true,
          }}
        
  />
    )

}

export default InputDateTime;