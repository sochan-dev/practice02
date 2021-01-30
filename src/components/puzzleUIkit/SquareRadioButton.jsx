import React from 'react';
import {makeStyles} from '@material-ui/styles';
import { isWidthDown } from '@material-ui/core';

const useStyles = makeStyles({
    root:{
        display:'flex',
        "& input[type=radio]":{
            display:'none',
            '&:checked + label': {
                background: 'darksalmon',
                color: 'black'
                }
        },

        "& label":{
            border:'0.1rem solid grey',
            padding:'0.3rem',
            display:'block',
            width:'100%',
            textAlign:'center',
            color:'grey',
            cursor:'pointer',
            borderRadius: '5px',
            margin:'0 0.1rem',
            '&:hover':{
                backgroundColor:'lightsalmon'
            }
        }
    },
    label:{
        fontSize:'1rem',
        color:'grey'
    }
})

const SquareRadioButton = (props) => {

    const classes = useStyles();

    

    return(
        <>
            <p className={classes.label}>{props.label}</p>
            <div className={classes.root} >
                {props.radios.map((radio) => (
                    <>
                        <input type="radio" name="square-radio-button" value={radio.value} id={radio.id} />
                        <label for={radio.id} onClick={(event) => props.onClick(event)}>
                            {radio.label}
                        </label>
                    </>
                ))}
            </div>
        </>
    )
}

export default SquareRadioButton