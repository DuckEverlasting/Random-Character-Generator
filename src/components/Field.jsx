import React from "react";
import MonsterToken from "./MonsterToken";

class Field extends React.Component {
  render() {
    return this.props.monster
      .filter(monster => monster.is_Alive === true)
      .map(monster => <MonsterToken key={monster.id} monster={monster} />);
  }
}

export default Field;
