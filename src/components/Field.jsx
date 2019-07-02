import React from "react";
import MonsterToken from "./MonsterToken";

class Field extends React.Component {
  render() {
    return this.props.monsters
      ? this.props.monsters
          .filter(monster => monster.is_Alive === true)
          .map(monster => <MonsterToken key={monster.id} monster={monster} />)
      : null;
  }
}

export default Field;
