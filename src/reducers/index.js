import {
  SUBMIT_FORM_START,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_FAILURE,
  DATA_RECIEVED,
  SUBMIT_PLAYER,
  TOGGLE_MONSTER_DEATH,
  TOGGLE_PLAYER_DEATH,
  SELECT_CREATURE,
  END_ENCOUNTER
} from "../actions";

const initialState = {
  formUpdated: false,
  formPending: false,
  formError: [],
  terrain: "",
  monsters: [],
  players: [],
  selected: undefined,
  creatureDead:undefined
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM_START:
      return {
        ...state,
        formPending: true,
        formUpdated: false,
        formError: []
      };
    case SUBMIT_FORM_SUCCESS:
      return {
        ...state,
        formPending: false,
        formUpdated: true,
        formError: [],
        monsters: action.payload.monsters,
        terrain: action.payload.terrain
      };
    case SUBMIT_FORM_FAILURE:
      return {
        ...state,
        formPending: false,
        formUpdated: false,
        formError: [...state.formError, action.payload],
      };
    case DATA_RECIEVED:
      return {
        ...state,
        formUpdated: false,
        creatureDead:undefined
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
      return {
        ...state,
        creatureDead:action.payload
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
    case SELECT_CREATURE:
      return {
        ...state,
        selected: action.payload,
        formVisible: false
      };
    case END_ENCOUNTER:
      return {
        ...state,
        selected: undefined
      };
    default:
      return state;
  }
};

export default rootReducer;
