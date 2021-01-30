import React,{useContext} from 'react';
import {useDispatch} from "react-redux";
import {PieceData} from "../../templates/CreatePuzzle";
import {makeStyles} from '@material-ui/styles';
import {MediumPieceList} from "./index";
import {selectLargePiece} from "../../reducks/projects/operations";

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

const LargePiece = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const largePiece = props.largePiece;
    const setPieceData = useContext(PieceData);

    const setPieceName = setPieceData.setPieceName;
    const setPieceDetail = setPieceData.setPieceDetail;
    const setPieceGoals = setPieceData.setPieceGoals;
    const setPieceType = setPieceData.setPieceType;

    const clickLargePiece =() => {
        setPieceName(largePiece.pieceName);
        setPieceDetail(largePiece.pieceDetail);
        setPieceGoals(largePiece.pieceGoals);
        setPieceType('large');
    }

    return(
        <div className={props.styles + " " + classes.root} key={props.id} onClick={() => dispatch(selectLargePiece(props.id))}>
            {props.id}
            <div className={classes.childPieceArea}>
                {largePiece.mediumPieces && (
                    <MediumPieceList mediumPieces={largePiece.mediumPieces} />
                )}
                
            </div>
        </div>
    )


}

export default LargePiece;

/**
 *<Card className={props.styles + " " + classes.root} key={props.id}>
            <CardHeader
                avatar={
                    <Avatar className={props.avatarStyle}>
                        {props.avatar}
                    </Avatar>
                }
                title={props.title}
            >
        </CardHeader>
        <CardMedia
                className={classes.media}
                component="img"
                title={'仮実装'}
                src={NoImage}
            />
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
        </Card>
 */

 /*
                <p>{props.title}</p>
            <p>{props.detail}</p>
            {props.goals.length > 0 && (
                props.goals.map((goal) => (
                    <p>{goal}</p>
                ))
            )}
 */