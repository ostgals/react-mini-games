import React from 'react'
import { Link } from 'react-router-dom'

import GameCard from '../components/GameCard'

import games from '../games';

const GameList = () => (
  <section className="route-content game-list">
    <h3>Во что будем играть?</h3>
    <div className="game-cards">
      {games.map((game, index) => (
        <Link to={`/games/${game.id}`} key={index}>
          <GameCard game={game} />
        </Link>
      ))}
    </div>
  </section>
)

export default GameList