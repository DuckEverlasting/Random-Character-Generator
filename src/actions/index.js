import axios from "axios";
import buildEncounter from "../logic/buildEncounter.js"
import {moreInfo} from "../data/moreMonsterInfo.js"

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

  const allCrs = [
    "1/8", "1/4", "1/2", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "11", "12", "13", "14", "15", "16", "17", "19", "20", "21", "22", "23", "24"
  ]

  const {encounterLevel, numberEncounter, type, terrain, alignment} = data;

  const crsToRequest = allCrs.slice(0, allCrs.indexOf(`${encounterLevel}`))

  const filteredByCr = await crsToRequest.map(async cr => {
      await axios
        .get('https://api-beta.open5e.com/monsters', {challenge_rating:cr})
        .then(res => {
          return res.results
        })
        .catch(err => {
          dispatch({ type: SUBMIT_FORM_FAILURE, payload: err.data });
          return "error"
        });
    }
  )

  const filteredByType = filteredByCr.filter(monster => monster.type === type)

  const filteredByTerrain = filteredByType.filter(monster => {
    // NEEDS MOAR LOGIC
  })

  const filteredByAlignment = filteredByTerrain.filter(monster => monster.alignment === alignment)

  const finalData = buildEncounter(encounterLevel, numberEncounter, filteredByAlignment)

  dispatch({ type: SUBMIT_FORM_SUCCESS, payload: finalData });
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