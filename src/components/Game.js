import React from 'react';
import Board from './Board';
import Title from './Title';
import Players from './Players'
class Game extends React.Component {
  render() {
    return (
      <div className="window">
        <Title />
        <Players />
      </div>
    );
  }
}
export default Game;
