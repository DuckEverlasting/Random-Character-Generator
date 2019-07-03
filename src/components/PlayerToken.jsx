import React from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  CardActionArea
} from "@material-ui/core";
import styled from "styled-components";
import { connect } from "react-redux";
import { toggleMonsterDeath, selectCreature } from "../actions";

class PlayerToken extends React.Component {
  monsterDeath = e => {
    e.preventDefault();
    e.stopPropagation();
    this.props.toggleMonsterDeath(this.props.monster.id);
  };

  selectMonster = e => {
    e.preventDefault();
    e.stopPropagation();
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
            <Name>{this.props.monster.name}</Name>
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
  height: props => (props.alive === false ? "48px" : "160px"),
  padding: "1%",
  textAlign: "center",
  margin: "2px",
  border: "2px solid #cf291d",
  borderRadius: "10px"
});

const Name = styled(Typography)({
  lineHeight: "1 !important",
  fontWeight: "bold !important",
  fontSize: "1.3rem !important"
});

const MonsterInfo = styled(CardActionArea)({
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
    monsters: state.monsters,
    players: state.players
  };
};

export default connect(
  mapStateToProps,
  { toggleMonsterDeath, selectCreature }
)(PlayerToken);
