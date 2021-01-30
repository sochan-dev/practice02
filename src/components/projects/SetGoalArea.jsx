import React, { useState,useCallback } from 'react';
import {InputText,InputTextWithButton} from '../puzzleUIkit';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/Delete';

const SetGoalArea = (props) => {
    let goals = [...props.goals];

    const [newGoal,setNewGoal] = useState("");

    const inputNewGoal = useCallback((event) => {
        setNewGoal(event.target.value);
    })

    const editGoals = useCallback((e,goal,i) => {
        if(e.target.value === "" || goal === e.target.value){
            return false;
        }
        goals[i] = e.target.value;
        props.setGoals(goals);
    },[goals])

    const deleteGoal = (index) => {
        const newGoals = goals.filter((goal,i) => i !== index);
        props.setGoals(newGoals);
    }

    const addGoal = () => {
        if(newGoal === "" || goals.length > 9)return false;
        props.setGoals((prevState) =>[...prevState,newGoal] );
        setNewGoal("");
    }

    const goalLabel = goals.length === 0 ? '達成条件を設定してください' : '達成条件を追加';

    return(
        <div>
            
            <InputTextWithButton
            fullWidth={true} label={goalLabel} multiline={false} required={true}
                rows={1} value={newGoal} type={"text"} onChange={inputNewGoal}
                InputProps={{
                    endAdornment:(
                        <InputAdornment position="end">
                            <IconButton onClick={addGoal}>
                                <EditOutlinedIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                />

            {
                goals.length > 0 && (
                    <List>
                    {goals.map((goal,i) => (
                        <ListItem key={i}>
                            <InputTextWithButton
                                fullWidth={true} label={`達成条件その${i + 1}`} multiline={false} required={false} value={goal} rows={1} type={"text"} onChange={(e) => editGoals(e,goal,i)}
                                InputProps={{
                                    endAdornment:(
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => deleteGoal(i)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </ListItem>
                    ))}
                    </List>
                )
            }

        </div>
      )



}
export default SetGoalArea;