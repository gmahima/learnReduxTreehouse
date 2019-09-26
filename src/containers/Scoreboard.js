import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreaters } from "redux";
import * as PlayerActionCreators from "../actions/player";
import AddPlayerForm from "../components/AddPlayerForm";
import Player from "../components/Player";
import Header from "../components/Header";

class Scoreboard extends Component {
  static PropTypes = {
    players: PropTypes.array.isRequired
  };
  render() {
    const { dispatch, players } = this.props;
    const addPlayer = bindActionCreaters(
      PlayerActionCreators.addPlayer,
      dispatch
    );
    const removePlayer = bindActionCreaters(
      PlayerActionCreators.removePlayer,
      dispatch
    );
    const updatePlayerScore = bindActionCreaters(
      PlayerActionCreators.updatePlayerScore,
      dispatch
    );
    const playerComponents = players.map((player, index) => (
      <Player index={index} name={player.name} score={player.score} key = {player.name}/>
    ));
    return (
      <div className="scoreboard">
        <Header players={this.state.players} />
        <div className="players">
          {this.state.players.map(
            function(player, index) {
              return (
                <Player
                  name={player.name}
                  score={player.score}
                  key={player.name}
                  onScoreChange={delta => this.onScoreChange(index, delta)}
                  onRemove={() => this.onRemovePlayer(index)}
                />
              );
            }.bind(this)
          )}
        </div>
        <AddPlayerForm onAdd={this.onAddPlayer} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  players: state;
};
export default connect(mapStateToProps)(Scoreboard);
Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
  onRemove: React.PropTypes.func.isRequired,
  onScoreChange: React.PropTypes.func.isRequired
};
