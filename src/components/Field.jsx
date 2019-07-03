import React from "react";
import MonsterToken from "./MonsterToken";
import PlayerToken from "./PlayerToken";

class Field extends React.Component {
  render() {
    return this.props.monsters
      ? this.props.monsters
          .filter(monster => monster.is_Alive === true)
          .map(monster =>
            monster.hit_points !== undefined ? (
              <MonsterToken key={monster.id} monster={monster} />
            ) : (
              <PlayerToken key={monster.id} monster={monster} />
            )
          )
      : null;
  }
}

export default Field;
