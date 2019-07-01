import {
  SUBMIT_FORM_START,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_FAILURE,
  DATA_RECIEVED,
  SUBMIT_PLAYER,
  TOGGLE_MONSTER_DEATH,
  TOGGLE_PLAYER_DEATH
} from "../actions";

const initialState = {
  formUpdated: false,
  formPending: false,
  formError: "",
  terrain: "",
  monsters: [],
  players: []
};



const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM_START:
      return {
        ...state,
        formPending: true,
        formUpdated: false,
        formError: false
      };
    case SUBMIT_FORM_SUCCESS:
      return {
        ...state,
        formPending: false,
        formUpdated: true,
        formError: false,
        monsters: action.payload.monsters,
        terrain: action.payload.terrain
      };
    case SUBMIT_FORM_FAILURE:
      return {
        ...state,
        formPending: false,
        formUpdated: false,
        formError: action.payload,
      };
    case DATA_RECIEVED:
      return {
        ...state,
        formUpdated: false
      };
    case SUBMIT_PLAYER:
      return {
        ...state,
        players: [
          ...state.players,
          action.payload
        ]
      };
    case TOGGLE_MONSTER_DEATH:
      const newMonsters = [
        state.monsters.map(monster => {
          if (monster.id === action.payload) {
            return { ...monster, isAlive: false };
          } else {
            return monster;
          }
        })
      ];
      return {
        ...state,
        monsters: newMonsters
      };
    case TOGGLE_PLAYER_DEATH:
      const newPlayers = [
        state.players.map(player => {
          if (player.id === action.payload) {
            return { ...player, isAlive: false };
          } else {
            return player;
          }
        })
      ];
      return {
        ...state,
        players: newPlayers
      };
    default:
      return state;
  }
};

export default rootReducer;
