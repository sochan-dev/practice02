import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import {makeStyles} from '@material-ui/styles';
import NoImage from "../../assets/img/NoImage.png";
import {SmallPieceList} from "./index";

const useStyles = makeStyles({
    root:{
        border:'1px solid blue',
        minWidth: 0,
        minHeight:0,
        overflow:'hidden'
    },
    childPieceArea:{
        width:'100%',
        border:'1px solid red'
    },
    media:{
        boxSizing:'borderBox',
        border:'1px solid blue',
        margin:'0 auto',
        objectFit:'cover',
        width:'auto',
        height:'auto',
        maxWidth:'100%',
        maxHeight:'100%'
    }
    
})

const MediumPiece = (props) => {
const classes = useStyles();
const mediumPiece = props.mediumPiece;
    return(
        <div className={props.styles + " " + classes.root} key={props.id}>
            <div className={classes.childPieceArea}>
                {mediumPiece.smallPieces && (
                    <SmallPieceList smallPieces={mediumPiece.smallPieces} />
                )}
            </div>
        </div>
    )


}

export default MediumPiece;