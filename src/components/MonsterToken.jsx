import React from "react";
import { Card, CardContent, Typography, IconButton } from "@material-ui/core";
import styled from "styled-components";
import { connect } from "react-redux";
import { toggleMonsterDeath, selectCreature } from "../actions";

class MonsterToken extends React.Component {
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
              <i className="fas fa-heart" />
              <Typography>{this.props.monster.hit_points}</Typography>
            </NumberStat>
            <NumberStat>
              <i className="fas fa-bolt" />
              <Typography>{this.props.monster.initiative}</Typography>
            </NumberStat>
            <NumberStat>
              <i className="fas fa-shield-alt" />
              <Typography>{this.props.monster.armor_class}</Typography>
            </NumberStat>
          </StatHolder>
          <WordStat>
            <Typography style={{ fontWeight: "bold" }}>Speed:</Typography>
            <Typography>
              {this.props.monster.speed.burrow
                ? "Burrow: " + this.props.monster.speed.burrow
                : null}{" "}
              {this.props.monster.speed.climb
                ? "Climb: " + this.props.monster.speed.climb + " "
                : null}{" "}
              {this.props.monster.speed.fly
                ? "Fly: " + this.props.monster.speed.fly + " "
                : null}{" "}
              {this.props.monster.speed.hover
                ? "Hover: " + this.props.monster.speed.hover + " "
                : null}{" "}
              {this.props.monster.speed.notes
                ? "Notes: " + this.props.monster.speed.notes + " "
                : null}{" "}
              {this.props.monster.speed.swim
                ? "Swim: " + this.props.monster.speed.swim + " "
                : null}{" "}
              {this.props.monster.speed.walk
                ? "Walk: " + this.props.monster.speed.walk + " "
                : null}{" "}
            </Typography>
          </WordStat>
          <WordStat>
            <Typography style={{ fontWeight: "bold" }}>Resistances:</Typography>
            <Typography>
              {this.props.monster.resistances
                ? this.props.monster.resistances
                : "N/A"}
            </Typography>
          </WordStat>
          <WordStat>
            <Typography style={{ fontWeight: "bold" }}>Immunities:</Typography>
            <Typography>
              {this.props.monster.immunities
                ? this.props.monster.immunities
                : "N/A"}
            </Typography>
          </WordStat>
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
  width: "105px",
  height: "144px",
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

const WordStat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
)(MonsterToken);
