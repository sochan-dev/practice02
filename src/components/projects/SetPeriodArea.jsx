import React, { useCallback } from 'react';
import {InputDateTime} from '../puzzleUIkit/';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root:{
        padding:'0.1rem 0.3rem 0',
        border:'0.1rem solid gray',
    },
    period:{
        display:'inline-block',
        margin:'0.5rem',
        verticalAlign:'bottom',
        fontSize:'1.5rem',
    }
})

const SetPeriodArea = (props) => {
const classes = useStyles();

    return(
        <div className={classes.root}>
            <InputDateTime fullWidth={true} label={"プロジェクト開始"} multiline={false} required={true}
                rows={1} onChange={props.setStart} value={props.start} />

                <span className={classes.period}>～</span>

                <InputDateTime fullWidth={true} label={"プロジェクト終了/納期"} multiline={false} required={true}
                rows={1} onChange={props.setEnd} value={props.end} />
        </div>
    )

}

export default SetPeriodArea;