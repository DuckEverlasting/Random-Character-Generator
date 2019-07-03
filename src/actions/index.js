import axios from "axios";
import buildEncounter from "../logic/buildEncounter.js"
import {filter,convertToJson, monstersFull, baseURL, byCr} from '../utils/remoteAxios'

export const [
  SUBMIT_FORM_START,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_FAILURE,
  DATA_RECIEVED,
  SUBMIT_PLAYER,
  TOGGLE_MONSTER_DEATH,
  TOGGLE_PLAYER_DEATH,
  SELECT_CREATURE,
  END_ENCOUNTER
] = [
  "SUBMIT_FORM_START",
  "SUBMIT_FORM_SUCCESS",
  "SUBMIT_FORM_FAILURE",
  "DATA_RECIEVED",
  "SUBMIT_PLAYER",
  "TOGGLE_MONSTER_DEATH",
  "TOGGLE_PLAYER_DEATH",
  "SELECT_CREATURE",
  "END_ENCOUNTER"
];

export const submitForm = data => async dispatch => {
  
  dispatch({ type: SUBMIT_FORM_START });

  const {encounterLevel, numberEncounter, type, terrain, alignment} = data;

  let url=byCr(encounterLevel)
  if(terrain!=='any')
    url+=`?terrain=${terrain[0].toUpperCase()+terrain.slice(1)}`

  let res=await axios.get(url)
  let list=await res.data

  list=list.map(monster=>convertToJson(monster))

  const filteredByType = list.filter(monster => type===[] || type.includes("any") || type.includes(monster.type))
  
  console.log(filteredByType);

  const filteredByAlignment = filteredByType.filter(monster => alignment.includes('any') || alignment.includes(monster.alignment))

  const finalData = buildEncounter(encounterLevel, numberEncounter, filteredByAlignment)

  dispatch({ type: SUBMIT_FORM_SUCCESS, payload: {monsters:finalData,terrain:terrain} });
};

export const submitPlayer = player => {
  return {
    type: SUBMIT_PLAYER,
    payload: player
  };
};

export const dataRecieved = () => {
  return {
    type: DATA_RECIEVED
  };
};

export const toggleMonsterDeath = (id) => {
  return {
    type: TOGGLE_MONSTER_DEATH,
    payload: id
  };
};

export const togglePlayerDeath = (id) => {
  return {
    type: TOGGLE_PLAYER_DEATH,
    payload: id
  };
};

export const selectCreature = (creature) => {
  return {
    type: SELECT_CREATURE,
    payload: creature
  };
};

export const endEncounter = () => {
  return {
    type: END_ENCOUNTER
  };
}