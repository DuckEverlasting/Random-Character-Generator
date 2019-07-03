import React from "react";
import MonsterToken from "./MonsterToken";
import PlayerToken from "./PlayerToken";

class ShadowRealm extends React.Component {
  render() {
    return this.props.monsters !== undefined
      ? this.props.monsters
          .filter(monster => monster.is_Alive === false)
          .map(monster =>
            monster.hit_points !== undefined ? (
              <MonsterToken key={monster.id} monster={monster} />
            ) : (
              <PlayerToken key={monster.id} monster={monster} />
            ))
      : null;
  }
}

export default ShadowRealm;
