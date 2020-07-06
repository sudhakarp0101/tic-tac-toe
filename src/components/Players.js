import React from 'react';
import Board from './Board';
import { connect } from 'react-redux'
import { handleAddPlayer } from '../redux/user-action'
class Players extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player1: '',
            player2: '',
            isPlayers: false
        }
        this.handleInput = this.handleInput.bind(this);
        this.navigateToGame = this.navigateToGame.bind(this);
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    navigateToGame = () => {
        if (this.state.player1.length !== 0 && this.state.player2.length !== 0) {
            const { dispatch } = this.props;
            dispatch(handleAddPlayer('X', this.state.player1));
            dispatch(handleAddPlayer('O', this.state.player2));
            this.setState({
                isPlayers: true
            });
        }
    }
    render() {
        return (
            <div>
                {this.state.isPlayers
                    ? <Board />
                    : <div className="board">
                        <div className="player-outer-square">
                            <div className="user-data" >
                                <div className="user-title">Welcome to <span className="user-text-color">TIC TAC TOE</span></div>
                                <div className="player-placing">PLAYER1</div><br />
                                <input type="text" value={this.state.player1} name="player1" onChange={(e) => this.handleInput(e)}></input><br />
                                <div className="player-placing">PLAYER2</div><br />
                                <input type="text" value={this.state.player2} name="player2" onChange={(e) => this.handleInput(e)}></input><br />
                                <button className="user-color" onClick={this.navigateToGame}>Continue</button>
                            </div>
                        </div>
                    </div >
                }
            </div>
        );
    }

}
function mapStateToProps({ store }, props) {
    return {
        store
    }
}
export default connect(mapStateToProps)(Players);
