import React,{useState,useMemo} from 'react'
import {useSelector} from 'react-redux'
import { SmallPiece } from '../components/projects'
import SampleChild from './SampleChild'

const SampleParent = () => {
    const selector = useSelector;

    const [a,setA] = useState(""),
          [b,setB] = useState(""),
          [c,setC] = useState("");



return(
        <>
            <SampleChild />
        </>
    )
}

export default SampleParent