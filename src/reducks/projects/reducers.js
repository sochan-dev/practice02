import * as Actions from './actions';
import initialState from '../store/initialState';

export const projectsReducer = (state = initialState.project,action) => {
    switch(action.type){
        case Actions.SAVE_PROJECT_ACTION:
            return{
                ...state,
                ...action.payload
            }

        case Actions.ADD_LARGE_PIECE_ACTION:
            return{
                ...state,
                puzzle:{
                    largePieces:[...state.puzzle.largePieces,{...action.payload}]
                }
            }

        case Actions.SELECT_LARGE_PIECE_ACTION:
            return{
                ...state,
                selectedLargePiece:{...action.payload}
            }
        default:
            console.log('defaultを通過');
            return state
    }
}