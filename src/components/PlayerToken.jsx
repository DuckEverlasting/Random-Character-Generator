import React from "react";
import { Card, CardContent, Typography, IconButton } from "@material-ui/core";
import styled from "styled-components";
import { connect } from "react-redux";
import { toggleMonsterDeath, selectCreature } from "../actions";

class PlayerToken extends React.Component {
  monsterDeath = e => {
    e.preventDefault();
    e.stopPropagation();
    this.props.toggleMonsterDeath(this.props.monster.id);
    console.log("dead");
  };

  selectMonster = e => {
    e.preventDefault();
    e.stopPropagation();
    console.log("selected");
    this.props.selectCreature(this.props.monster);
  };

  render() {
    if (!this.props.monster) {
      return null;
    }
    return (
      <CreatureToken onClick={this.selectMonster}>
        <MonsterInfo>
          <NameHolder>
            <Typography>{this.props.monster.name}</Typography>
            <IconButton onClick={this.monsterDeath}>
              {this.props.monster.is_Alive === true ? (
                <i className="fas fa-skull-crossbones" />
              ) : (
                <i className="fas fa-undo" />
              )}
            </IconButton>
          </NameHolder>
          <StatHolder>
            <NumberStat>
              <i className="fas fa-bolt" />
              <Typography>{this.props.monster.initiative}</Typography>
            </NumberStat>
          </StatHolder>
        </MonsterInfo>
      </CreatureToken>
    );
  }
}

const NameHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const CreatureToken = styled(Card)({
  width: "115px",
  height: "150px",
  padding: "1%",
  textAlign: "center",
  margin: "2px",
  border: "1px solid black"
});

const MonsterInfo = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "0 !important",
  minHeight: "100%"
});

const StatHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

const NumberStat = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 30%;
`;

//redux
const mapStateToProps = state => {
  return {
    monsters: state.moonsters,
    players: state.players
  };
};

export default connect(
  mapStateToProps,
  { toggleMonsterDeath, selectCreature }
)(PlayerToken);
