import React, { useState } from 'react';
import Square from './Square';
import calculateWinner from './CalculateWinner';
import Winnings from './Winnings';
import { connect } from 'react-redux'
import { handleIncrementWins } from '../redux/user-action';
import Winner from './Winner';

function Board(props) {

  const [squares, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setXNext] = useState(true);

  function handleClick(i) {
    const squares1 = squares.slice();
    if (calculateWinner(squares1).winner || squares1[i]) {
      props.dispatch(handleIncrementWins(winner));
      setXNext('X');
      setSquare(Array(9).fill(null));
      return;
    }
    squares1[i] = xIsNext ? 'X' : 'O';
    setXNext(!xIsNext);
    setSquare(squares1);
  }

  function renderSquare(i) {
    return (
      <Square
        value={i}
        winnerHeighlight={line}
        player={squares[i]}
        onClick={() => handleClick(i)}
      />
    );
  }

  const { winner, line } = calculateWinner(squares);
  const { player1, player2, wins1, wins2 } = props;
  if (winner === 'X' || winner === 'O') {
    //console.log("winner", winner);
    // setXNext('X');
    //const count = () => props.dispatch(handleIncrementWins(winner));
  }
  var once = function () {
    if (once.done) return;
    console.log('Doing this once!');
    props.dispatch(handleIncrementWins(winner));
    once.done = true;
  };
  once.done = false;
  once();
  return (
    <div>
      {(winner && (wins1 === 6 || wins2 === 6))
        ? <Winner winner={winner} player={wins1 === 6 ? player1 : player2} />
        : <div className="board">
          <div className="player-info" >
            <div className="player-status">{winner ?
              (winner === 'D' ? "DRAW" : (winner === 'X' ? "WINNER" : ""))
              : (xIsNext && "Your Turn")}
            </div>
            <div className="square-player" style={{
              border: (winner === 'D' || winner === 'X') && "2px solid orange"
            }}>
              <div className="player-color">Player 1</div>
              <div className="player-name">{player1}</div>
              <div className="player-symbol">X</div>
            </div>
            <div className="winnings"> <Winnings player='X' winCount={wins1} /> </div>
          </div>

          <div className="outer-square">
            <div className="inner-square">
              <div>{renderSquare(0)}</div>
              <div>{renderSquare(1)}</div>
              <div>{renderSquare(2)}</div>
              <div>{renderSquare(3)}</div>
              <div>{renderSquare(4)}</div>
              <div>{renderSquare(5)}</div>
              <div>{renderSquare(6)}</div>
              <div>{renderSquare(7)}</div>
              <div>{renderSquare(8)}</div>
            </div>
          </div>

          <div className="player-info" >
            <div className="player-status">{winner ?
              (winner === 'D' ? "DRAW" : (winner === 'O' ? "WINNER" : ""))
              : (!xIsNext && "Your Turn")}
            </div>
            <div className="square-player" style={{
              border: (winner === 'D' || winner === 'O') && "2px solid orange"
            }}>
              <div className="player-color">Player 2</div>
              <div className="player-name">{player2}</div>
              <div className="player-symbol">O</div>
            </div>
            <div className="winnings">
              <Winnings player='O' winCount={wins2} />
            </div>
          </div>
        </div >}
    </div>
  );
}
function mapStateToProps(store) {
  return {
    player1: store.players[0].name,
    player2: store.players[1].name,
    wins1: store.players[0].wins,
    wins2: store.players[1].wins
  }
}
export default connect(mapStateToProps)(Board);
