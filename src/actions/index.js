import axios from "axios";

export const [
  SUBMIT_FORM_START,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_FAILURE,
  DATA_RECIEVED,
  SUBMIT_PLAYER,
  TOGGLE_MONSTER_DEATH,
  TOGGLE_PLAYER_DEATH
] = [
  "SUBMIT_FORM_START",
  "SUBMIT_FORM_SUCCESS",
  "SUBMIT_FORM_FAILURE",
  "DATA_RECIEVED",
  "SUBMIT_PLAYER",
  "TOGGLE_MONSTER_DEATH",
  "TOGGLE_PLAYER_DEATH"
];

export const submitForm = data => dispatch => {
  dispatch({ type: SUBMIT_FORM_START });
  return axios
    .get("GETREQUEST")
    .then(res => {
      // console.log(res)
      dispatch({ type: SUBMIT_FORM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: SUBMIT_FORM_FAILURE, payload: err.data });
    });
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