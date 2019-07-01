import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {dataRecieved} from '../actions'
import '../styles/Initiaitve.css'
import Token from './MonsterToken'
import {ButtonSection,PrevButton,NextButton} from '../styles/Initiative'

function InitiaitiveField() {

    const [list,setList]=useState([])

    const dispatch=useDispatch()
    
    const formUpdated=useSelector(state=>state.formUpdated)
    const monsters=useSelector(state=>state.monsters)
    const players=useSelector(state=>state.players)

    useEffect(()=>{
        if(formUpdated){
            let temp=monsters.map(i=>({...i,
                initiative:Math.random()*20+1 +(Math.floor((i.dexterity-10)/2))
            })).concat(players)

            temp.sort((a,b)=>a.inititative-b.inititative)
            setList(temp)
            dispatch(dataRecieved())
        }
    },[formUpdated,dispatch,monsters,players])

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
        <section>
            <section>
                {list.map(token=>{
                    return <Token {...token}/>
                })}
            </section>
            <ButtonSection>
                <PrevButton onClick={last}>Last Initiative</PrevButton>
                <NextButton onClick={next}>Next Initiative</NextButton>
            </ButtonSection>
        </section>
    )
}

export default InitiaitiveField
