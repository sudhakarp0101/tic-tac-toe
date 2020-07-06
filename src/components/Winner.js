import React from 'react';

function Winner(props) {
    const { player, winner } = props;
    return (
        <div >
            <div className="board">
                <div className="player-outer-square">
                    <div className="player-data" >
                        <div className="player-status-large">WINNER!</div>
                        <div className="square-player-large" >
                            <div className="player-color">{winner === 'X' ? "Player 1" : "Player 2"}</div>
                            <div className="player-name-large">{player}</div>
                            <div className="player-symbol-large">{winner}</div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default Winner;