import React from "react";
import MonsterToken from "./MonsterToken";
import PlayerToken from "./PlayerToken";

class Field extends React.Component {
  render() {
    console.log(this.props.monsters)
    return this.props.monsters.length
      ? Array.from(this.props.monsters)
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
