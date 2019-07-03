import React from "react";
import MonsterToken from "./MonsterToken";

class ShadowRealm extends React.Component {
  render() {
    return this.props.monsters !== undefined
      ? this.props.monsters
          .filter(monster => monster.is_Alive === false)
          .map(monster => <MonsterToken key={monster.id} monster={monster} />)
      : null;
  }
}

export default ShadowRealm;
