import React from "react";
import MonsterToken from "./MonsterToken";

class ShadowRealm extends React.Component {
  render() {
    return this.props.monster
      .filter(monster => monster.is_Alive === false)
      .map(monster => <MonsterToken key={monster.id} monster={monster} />);
  }
}

export default ShadowRealm;
