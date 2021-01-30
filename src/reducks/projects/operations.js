import {push} from "connected-react-router";
import {saveProjectAction,addLargePieceAction,selectLargePieceAction} from './actions';

export const saveProject = (name,detail,start,end,goals) => {
    return async(dispatch) => {
        const project = {
            name:name,
            detail:detail,
            start:start,
            end:end,
            goals:goals
        }
        dispatch(saveProjectAction(project));
        dispatch(push('/sample/create'))
    }
}

export const addPiece = (pieceName,pieceType,pieceDetail,pieceStart,pieceEnd,pieceGoals,parentPieceId) => {

    return async(dispatch) => {
        switch(pieceType){
            case "large":
            const largePiece = {
                name:pieceName,
                type:pieceType,
                detail:pieceDetail,
                start:pieceStart,
                end:pieceEnd,
                goals:pieceGoals
            }

            dispatch(addLargePieceAction(largePiece));

        }

    }
}
export const selectLargePiece = (id) => {
    return async(dispatch,getState) => {

        const largePiece = getState().project.puzzle.largePieces[id];

        const selectedLargePiece = {
            id:id,
            ...largePiece
        }
        dispatch(selectLargePieceAction(selectedLargePiece));

    }
}