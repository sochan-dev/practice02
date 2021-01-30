import React,{useState,useCallback} from 'react';
import {useDispatch} from 'react-redux';
import "../assets/sample.css";
import {InputText,CompleteButton} from '../components/puzzleUIkit';
import {SetGoalArea,SetPeriodArea} from '../components/projects';
import {saveProject} from '../reducks/projects/operations';

const RegistProject = () => {

    const dispatch = useDispatch();
    const now = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const [name,setName] = useState(""),
          [detail,setDetail] = useState(""),
          [goals,setGoals] = useState([]),
          [start,setStart] = useState(now.toISOString().substring(0,16)),
          [end,setEnd] = useState(tomorrow.toISOString().substring(0,16));

    const inputName = useCallback((event) => {
        setName(event.target.value);
    },[setName]);
    const inputDetail = useCallback((event) => {
        setDetail(event.target.value);
    },[setDetail]);
    const inputStart = useCallback((event) => {
        setStart(event.target.value)
    },[setStart])
    const inputEnd = useCallback((event) => {
        setEnd(event.target.value)
    },[setEnd])
    
    return(
        <div className="section-wrap-center">
            <div className="child-multi-content">

                <InputText fullWidth={true} label={"プロジェクト名"} multiline={false} required={true}
                rows={1} value={name} type={"text"} onChange={inputName} />
                <div className="spacer--medium" />

                <SetPeriodArea
                start={start} setStart={inputStart} end={end} setEnd={inputEnd}/>
                <div className="spacer--medium" />


                <InputText fullWidth={true} label={
                    "プロジェクト概要"} multiline={true} required={true}
                rows={3} value={detail} type={"text"} onChange={inputDetail} variant={'outlined'} />

            </div>
            
            <div className="child-multi-content">
                <SetGoalArea goals={goals} setGoals={setGoals} />
            </div>
            
            <CompleteButton variant={'contained'} color={'primary'} label={'決定'} onClick={() => dispatch(saveProject(name,detail,start,end,goals))} />
        </div>
    )

}

export default RegistProject;