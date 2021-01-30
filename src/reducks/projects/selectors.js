import {createSelector} from 'reselect';

const projectSelector = (state) => state.project;

export const getLargePieces = createSelector(
    [projectSelector],
    state => state.puzzle.largePieces
)
export const getSelectedLargePiece = createSelector(
    [projectSelector],
    state => state.selectedLargePiece
)