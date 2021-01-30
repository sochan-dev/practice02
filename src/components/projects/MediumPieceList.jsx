import React from 'react';
import {makeStyles} from '@material-ui/styles';
import classNames from 'classnames';
import {MediumPiece} from './index';


const useStyles = makeStyles((theme) => ({
    root:{
        position:'absolute'
    },
    pieceList:{
        width:'100%',
        height:'100%'
    },
    fullContent:{
        width:'20%',
    },
    oneLess:{
        width:'25%',
    },
    twoLess:{
        width:'33.33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333%',
    },
    threeLess:{
        width:'50%',
    },
    fourLess:{
        width:'100%',
    },
    oneLine:{
        height:'100%'
    },
    oneLine:{
        height:'100%'
    },
    twoLine:{
        height:'50%'
    },
    threeLine:{
        height:'33.33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333%'
    },
    fourLine:{
        height:'25%'
    }
}))

/** border:'1px solid black',
        boxSizing:'border-box'*/
export const MediumPieceList = (props) => {
    const classes = useStyles();

    const mediumPieces = props.mediumPieces;
    const length = mediumPieces.length;
    let pieceHeight,pieceWidth,addedSurplusStyle = "";
    let lineNum = 1;
    let surplus = 0;

    const confirmWidth =(row) => {
        switch(Math.floor(length / row)){
            case 1:
                pieceWidth = classes.fourLess;
                addedSurplusStyle = (length % row) === 0 ? classes.fourLess : classes.threeLess;
                return;
            case 2:
                pieceWidth = classes.threeLess;
                addedSurplusStyle = (length % row) === 0 ? classes.threeLess : classes.twoLess;
                return;
            case 3:
                pieceWidth = classes.twoLess;
                addedSurplusStyle = (length % row) === 0 ? classes.twoLess : classes.oneLess;
                return;
            case 4:
                pieceWidth = classes.oneLess;
                addedSurplusStyle = (length % row) === 0 ? classes.oneLess : classes.fullContent;
                return;
            case 5:
                pieceWidth = classes.fullContent;
                addedSurplusStyle = classes.fullContent;
                return;
        }
    }

    switch(true){
        case length <= 3:
            confirmWidth(lineNum = 1);
            pieceHeight = classes.oneLine
            surplus = 0;
            break;
        case length <= 10:
            confirmWidth(lineNum = 2);
            pieceHeight = classes.twoLine
            surplus = length % lineNum
            //surplus = length % lineNum === 0 ? 1: length % lineNum;
            break;
        case length <= 15:
            confirmWidth(lineNum = 3);
            pieceHeight = classes.threeLine
            surplus = length % lineNum
            break;
        case length <= 20:
            confirmWidth(lineNum = 4);
            pieceHeight = classes.fourLine
            surplus = length % lineNum
            break;
    }


    return(
            <>
                {mediumPieces.length > 0 && (
                    mediumPieces.map((mediumPiece,i) => (
                        <MediumPiece
                            key={i}
                            styles={classNames(
                                pieceHeight,
                                (i+1 <= (lineNum - surplus) * Math.floor((length / lineNum))) ? pieceWidth : addedSurplusStyle
                            )}
                            id={i}
                            avatar={'中'}
                            mediumPiece={mediumPiece}
                        />
                    ))
                )}
            </>
        )

}

export default MediumPieceList;