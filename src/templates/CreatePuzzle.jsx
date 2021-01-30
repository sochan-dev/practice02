import React,{useState,useCallback, useMemo,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {addPiece} from '../reducks/projects/operations';
import {getLargePieces,getSelectedLargePiece} from '../reducks/projects/selectors';
import {InputText,SquareRadioButton,CompleteButton,BothEndsLabelSwitch} from '../components/puzzleUIkit';
import {SetGoalArea,LargePieceList,EditPieceTabs,EditPieceArea} from '../components/projects';


export const PieceData = React.createContext();

const CreatePuzzle = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const largePieces = getLargePieces(selector);
    let selectedLargePiece = getSelectedLargePiece(selector);

    //仮で中と小のピースを宣言
    const selectedMediumPiece = {
        id:"",
        pieceName:"",
        pieceDetail:"",
        pieceStart:"",
        pieceEnd:"",
        pieceGoals:[]
    };
    const selectedSmallPiece = {
        id:"",
        pieceName:"",
        pieceDetail:"",
        pieceStart:"",
        pieceEnd:"",
        pieceGoals:[]
    };
    
    const [tabDisable,setTabDisable] = useState([false,true,true]);
//選択中大ピースの初期値
    const [largePieceId,setLargePieceId] = useState(""),
          [largePieceName,setLargePieceName] = useState(""),
          [largePieceType,setLargePieceType] = useState("large"),
          [largePieceDetail,setLargePieceDetail] = useState(""),
          [largePieceStart,setLargePieceStart] = useState(""),
          [largePieceEnd,setLargePieceEnd] = useState(""),
          [largePieceGoals,setLargePieceGoals] = useState([]);
//選択中中ピースの初期値
    const [mediumPieceId,setMediumPieceId] = useState(selectedMediumPiece.id),
          [mediumPieceName,setMediumPieceName] = useState(selectedMediumPiece.pieceName),
          [mediumPieceType,setMediumPieceType] = useState("medium"),
          [mediumPieceDetail,setMediumPieceDetail] = useState(selectedMediumPiece.pieceDetail),
          [mediumPieceStart,setMediumPieceStart] = useState(selectedMediumPiece.pieceStart),
          [mediumPieceEnd,setMediumPieceEnd] = useState(selectedMediumPiece.pieceEnd),
          [mediumPieceGoals,setMediumPieceGoals] = useState(selectedMediumPiece.pieceGoals);
//選択中小ピースの初期値
    const [smallPieceId,setSmallPieceId] = useState(selectedSmallPiece.id),
          [smallPieceName,setSmallPieceName] = useState(selectedSmallPiece.pieceName),
          [smallPieceType,setSmallPieceType] = useState("small"),
          [smallPieceDetail,setSmallPieceDetail] = useState(selectedSmallPiece.pieceDetail),
          [smallPieceStart,setSmallPieceStart] = useState(selectedSmallPiece.pieceStart),
          [smallPieceEnd,setSmallPieceEnd] = useState(selectedSmallPiece.pieceEnd),
          [smallPieceGoals,setSmallPieceGoals] = useState(selectedSmallPiece.pieceGoals);
//それぞれの選択中ピースの新規と追加の切り替え論理値と切り替える関数
const [largePieceSwitch,setLargePieceSwitch] = useState(false),
      [mediumPieceSwitch,setMediumPieceSwitch] = useState(false),
      [smallPieceSwitch,setSmallPieceSwitch] = useState(false);
    const changeLargePieceSwitch = useCallback(() => {
        setLargePieceSwitch(!largePieceSwitch);
    })
    const changeMediumPieceSwitch = useCallback(() => {
        setMediumPieceSwitch(!mediumPieceSwitch);
    })
    const changeSmallPieceSwitch = useCallback(() => {
        setSmallPieceSwitch(!smallPieceSwitch);
    })

//選択中ピースの変更
console.log(`if入る前のラージピースIDー＞${largePieceId}`)
console.log(`if入る前のreduxラージピースIDー＞${selectedLargePiece.id}`)
    if(selectedLargePiece.id !== largePieceId){
        console.log('選択された大ピースの変更を検知')
        setLargePieceId(selectedLargePiece.id)
        setLargePieceName(selectedLargePiece.name)
        setLargePieceDetail(selectedLargePiece.detail)
        setLargePieceStart(selectedLargePiece.start)
        setLargePieceEnd(selectedLargePiece.end)
        setLargePieceGoals(selectedLargePiece.goals)
        console.log(`largePieceIdー＞${largePieceId}`)
        const newLargePieceId = selectedLargePiece.id
        if(newLargePieceId === ""){
            setTabDisable([false,true,true])
            console.log('通った')
        }else if(mediumPieceId === ""){
            setTabDisable([false,false,true])
            console.log('large認識')
        }else if(smallPieceId === ""){
            setTabDisable([false,true,false])
        }
    
    }
    

//現在選択中の大ピース
    const choosingLargePiece = {
        id:largePieceId,
        name:largePieceName,
        type:largePieceType,
        detail:largePieceDetail,
        start:largePieceStart,
        end:largePieceEnd,
        goals:largePieceGoals
    }
//現在選択中の大ピースを変更するメソッド
    const setLargePiece = {
        setPieceName:useCallback((event) => {
                        setLargePieceName(event.target.value);
                    },[setLargePieceName]),
        setPieceDetail:useCallback((event) => {
                            setLargePieceDetail(event.target.value);
                        },[setLargePieceDetail]),
        setPieceStart:useCallback((event) => {
                            setLargePieceStart(event.target.value);
                        },[setLargePieceStart]),
        setPieceEnd:useCallback((event) => {
                            setLargePieceEnd(event.target.value);
                        },[setLargePieceEnd]),
        setPieceGoals:setLargePieceGoals
    }
//現在選択中の中ピース
    const choosingMediumPiece = {
        id:mediumPieceId,
        name:mediumPieceName,
        type:mediumPieceType,
        detail:mediumPieceDetail,
        start:mediumPieceStart,
        end:mediumPieceEnd,
        goals:mediumPieceGoals
    }
//現在選択中の中ピースを変更するメソッド
    const setMediumPiece = {
        setPieceName:useCallback((event) => {
                        setMediumPieceName(event.target.value);
                    },[setMediumPieceName]),
        setPieceDetail:useCallback((event) => {
                            setMediumPieceDetail(event.target.value);
                        },[setMediumPieceDetail]),
        setPieceStart:useCallback((event) => {
                            setMediumPieceStart(event.target.value);
                        },[setMediumPieceStart]),
        setPieceEnd:useCallback((event) => {
                            setMediumPieceEnd(event.target.value);
                        },[setMediumPieceEnd]),
        setPieceGoals:setMediumPieceGoals
    }
//現在選択中の小ピース
    const choosingSmallPiece = {
        id:smallPieceId,
        name:smallPieceName,
        type:smallPieceType,
        detail:smallPieceDetail,
        start:smallPieceStart,
        end:smallPieceEnd,
        goals:smallPieceGoals
    }
//現在選択中の小ピースを変更するメソッド
    const setSmallPiece = {
        setPieceName:useCallback((event) => {
                        setSmallPieceName(event.target.value);
                    },[setSmallPieceName]),
        setPieceDetail:useCallback((event) => {
                            setSmallPieceDetail(event.target.value);
                        },[setSmallPieceDetail]),
        setPieceStart:useCallback((event) => {
                            setSmallPieceStart(event.target.value);
                        },[setSmallPieceStart]),
        setPieceEnd:useCallback((event) => {
                            setSmallPieceEnd(event.target.value);
                        },[setSmallPieceEnd]),
        setPieceGoals:setSmallPieceGoals
    }

    return(
        <div className="section-wrap-left">

            <div id="editPieceArea">
                <EditPieceTabs labels={[selectedLargePiece.id !== "" ? "大ピース" : "大ピースを作成","中ピース","小ピース"]}
                initialValue={0} tabDisable={tabDisable}>
                    <EditPieceArea pieceType={"large"} piece={choosingLargePiece} setPiece={setLargePiece}
                                    switch={largePieceSwitch} changeSwitch={changeLargePieceSwitch}
                                    addPiece={() => dispatch(addPiece(largePieceName,largePieceType,largePieceDetail,largePieceStart,largePieceEnd,largePieceGoals))}
                    />
                    <EditPieceArea pieceType={"medium"} piece={choosingMediumPiece} setPiece={setMediumPiece}
                                    switch={mediumPieceSwitch} changeSwitch={changeMediumPieceSwitch}
                                    addPiece={() => dispatch(addPiece(largePieceName,largePieceType,largePieceDetail,largePieceGoals,largePieceId))}
                    />
                    <EditPieceArea pieceType={"small"} piece={choosingSmallPiece} setPiece={setSmallPiece}
                                    switch={smallPieceSwitch} changeSwitch={changeSmallPieceSwitch}
                                    addPiece={() => dispatch(addPiece(largePieceName,largePieceType,largePieceDetail,largePieceGoals,smallPieceId))}
                    />
                </EditPieceTabs>
            </div>

            <div id="showPuzzleArea">
                <PieceData.Provider
                    value={{setPieceName:setLargePieceName,SetPieceType:setLargePieceType,
                        setPieceDetail:setLargePieceDetail,setPieceGoals:setLargePieceGoals}}>
                    <LargePieceList largePieces={largePieces} />
                </PieceData.Provider>
            </div>

        </div>
    )

}
export default CreatePuzzle;