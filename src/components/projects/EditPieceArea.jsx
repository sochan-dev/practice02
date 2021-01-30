import React,{useState,useCallback} from 'react';
import {SetGoalArea,SetPeriodArea} from "./index"
import {InputText,CompleteButton,BothEndsLabelSwitch} from "../puzzleUIkit";
/*
BothEndsLabelSwitchコンポーネントを解体して、EditPieceAreaにロジックを含有させる。
EditPieceAreaに渡すsetPieceプロップスの中の関数は、useCallback化せず、setStateをそのまま渡す。
そしてEditPieceAreaでuseCallback化して渡す。
(useCallback化はイベントハンドラに渡すためにする、その役目を担っているのはEditPieceAreaだから。)
*/
const EditPieceArea = (props) => {
    const piece = props.piece
    const setPiece = props.setPiece
    const tabSwitch = props.switch
    const changeTabSwitch = props.changeSwitch

    if(tabSwitch === true){
        setPiece.setPieceName({
            target:{
                value:"true"
            }
        });
    }else{
        setPiece.setPieceName({
            target:{
                value:"false"
            }
        })
    }

    return(
        <div>
            <BothEndsLabelSwitch onChange={changeTabSwitch} checked={tabSwitch}
            left={'編集'} right={'新規追加'}
            />

            <InputText fullWidth={true} label={"ピース名"} multiline={false} required={true}
            rows={1} value={piece.name} type={"text"} onChange={setPiece.setPieceName}/>
            <div className="spacer--extra-small" />

            <InputText fullWidth={true} label={"ピース詳細"} multiline={true} required={true}
            rows={2} value={piece.detail} type={"text"} onChange={setPiece.setPieceDetail}/>
            <div className="spacer--extra-small" />

            <SetPeriodArea
                start={piece.start} setStart={setPiece.setPieceStart}
                end={piece.end} setEnd={setPiece.setPieceEnd}
            />

            <SetGoalArea goals={piece.goals} setGoals={setPiece.setPieceGoals} />

            <CompleteButton
                variant={'contained'} color={'primary'} label={'追加'} size={"small"}
                onClick={() => props.addPiece()}
            />
        </div>
    )
}

export default EditPieceArea;