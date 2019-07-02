import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {dataRecieved} from '../actions'
import Token from './MonsterToken'
import {ButtonSection,PrevButton,NextButton, InitList, Inits} from '../styles/Initiative'

import {arr as dummy} from '../utils/dummyData'

function InitiaitiveField() {

    const [list,setList]=useState([])

    const [all,setAll]=useState([])

    const dispatch=useDispatch()
    
    // const formUpdated=useSelector(state=>state.formUpdated)
    // const monsters=useSelector(state=>state.monsters)
    // const players=useSelector(state=>state.players)

    const monsters=dummy
    const players=[]
    const [formUpdated,setFormUpdated]=useState(true)

    useEffect(()=>{
        if(formUpdated){
            setFormUpdated(false)
            let temp=monsters.map(i=>({...i,
                initiative:Math.floor(Math.random()*20+1 +(Math.floor((i.dexterity-10)/2))),
                isAlive:true
            })).concat(players)

            temp.sort((a,b)=>a.inititative-b.inititative)
            setAll(temp)
            setList(temp)
            // dispatch(dataRecieved())
        }
    },[formUpdated,dispatch,monsters,players,list])

    const next=e=>{
        let temp=list.map(i=>i)
        let tempChar=temp.shift()
        temp.push(tempChar)
        setList(temp)
    }

    const last=e=>{
        let temp=list.map(i=>i)
        let tempChar=temp.pop()
        temp.unshift(tempChar)
        setList(temp)
    }

    return (
        <InitList>
            <Inits>
                {list.filter(token=>token.isAlive).map(token=>{
                    return <Token monster={token}/>
                })}
            </Inits>
            <ButtonSection>
                <PrevButton onClick={last}>Last Initiative</PrevButton>
                <NextButton onClick={next}>Next Initiative</NextButton>
            </ButtonSection>
        </InitList>
    )
}

export default InitiaitiveField
