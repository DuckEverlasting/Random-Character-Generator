import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Field from "./Field";
import ShadowRealm from "./ShadowRealm";
import {arr} from '../utils/dummyData'
import {dataRecieved} from '../actions'

class Battlefield extends React.Component {
  state = {
    monsters:arr,
    players:[],
    list:[],
    formUpdated:true
  }

  componentDidMount(){
    if(this.state.formUpdated){
      let temp=this.state.monsters.map(i=>({...i,
          initiative:Math.floor(Math.random()*20+1 +(Math.floor((i.dexterity-10)/2))),
          is_Alive:true
      })).concat(this.state.players)

      temp.sort((a,b)=>a.inititative-b.inititative)
      this.setState({
        list:temp,
        formUpdated:false
      })
    }
  }

  next=e=>{
    let temp=this.state.list.map(i=>i)
    let tempChar=temp.shift()
    temp.push(tempChar)
    this.setState({list:temp})
  }

  last=e=>{
    let temp=this.state.list.map(i=>i)
    let tempChar=temp.pop()
    temp.unshift(tempChar)
    this.setState({list:temp})
  }

  render() {
    
    return (
      <Battlegrounds>
        <section className="buttonBox">
          <button onClick={this.last}>Previous</button><button onClick={this.next}>Next</button>
        </section>
        <FieldBox
          style={{
            backgroundImage: `url(/assets/${this.state.terrain}.jpg)`
          }}
        >
          <Field monsters={this.state.list} />
        </FieldBox>
        <ShadowRealmBox>
          <ShadowRealm monster={this.state.list} />
        </ShadowRealmBox>
      </Battlegrounds>
    );
  }
}

const Battlegrounds = styled.div`
display: flex;
flex-direction: column;
height: 77vh;
width: 50%;
@media (max-width: 800px) {
      width: 100%;
    }
`;

const FieldBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  align-items: center;
  justify-content: space-around;
  height: 67%;
  overflow: scroll;
  background-repeat: no-repeat;
  /* background-positon: center; */
`;

const ShadowRealmBox = styled.div`
height: 33%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
overflow: scroll;
background: url(https://cdn.pixabay.com/photo/2018/01/30/13/08/old-3118750_1280.jpg);
background-repeat: no-repeat;
background-size: cover;
background-position: center;
width: 100%`;

//redux
const mapStateToProps = state => {
  return {
    monsters: state.moonsters,
    players: state.players
  };
};

const mapDispatchToProps={
  dataRecieved
}

export default connect(mapStateToProps,mapDispatchToProps)(Battlefield);
