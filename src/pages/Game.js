import React from 'react'

import games from '../games';

export default class Game extends React.Component {
  state = {
    game: null,
    gameComponent: null
  }
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    // fetch game info
    const id = this.props.match.params.gameId;
    const game = games.find(game => game.id == id);
    console.log(id, game)
    // save game info to the state
    this.setState({ game });
    // try load game component
    // ...
  }
  render() {
    const { game } = this.state;
    return (
      <section className="route-content game">
        <h3>{game.name}</h3>
      </section>
    )
  }
}