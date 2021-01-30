import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        fontSize:'1.5rem',
        paddingRight:theme.spacing(5),
        paddingLeft:theme.spacing(5),
        margin:'5rem 0',
        width:'90%'
    }
}))

const CompleteButton = (props) => {

const classes = useStyles();

return(
    <Button
        variant={props.variant}
        color={props.color}
        onClick={() => props.onClick()}
        className={classes.root}
        size={props.size}
    >
        {props.label}
    </Button>

)

}
export default CompleteButton;