import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {dataRecieved} from '../actions'

function InitiaitiveField() {

    const [list,setList]=useState([])

    const dispatch=useDispatch()
    
    const formUpdated=useSelector(state=>state.formUpdated)
    const monsters=useSelector(state=>state.monsters)
    const players=useSelector(state=>state.players)

    useEffect(()=>{
        if(formUpdated){
            let temp=monsters.concat(players)
            temp.sort((a,b)=>a.inititative-b.inititative)
            setList(temp)
            dispatch(dataRecieved())
        }
    })

    next=e=>{
        let temp=list.map(i=>i)
        let tempChar=temp.shift()
        temp.push(tempChar)
        setList(temp)
    }

    last=e=>{
        let temp=list.map(i=>i)
        let tempChar=temp.pop()
        temp.unshift(tempChar)
        setList(temp)
    }

    return (
        <section>
            {list.map(token=>{
                <Token {...token}/>
            })}
        </section>
    )
}

export default InitiaitiveField
