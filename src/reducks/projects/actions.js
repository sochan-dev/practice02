export const SAVE_PROJECT_ACTION = 'SAVE_PROJECT_ACTION';
export const saveProjectAction = (project) => {
    return{
        type:'SAVE_PROJECT_ACTION',
        payload:project
    }
}

export const ADD_LARGE_PIECE_ACTION = 'ADD_LARGE_PIECE_ACTION';
export const addLargePieceAction = (piece) => {
    return{
        type:'ADD_LARGE_PIECE_ACTION',
        payload:piece
    }
}

export const SELECT_LARGE_PIECE_ACTION = 'SELECT_LARGE_PIECE_ACTION';
export const selectLargePieceAction = (largePiece) => {
    return{
        type:'SELECT_LARGE_PIECE_ACTION',
        payload:largePiece
    }
}