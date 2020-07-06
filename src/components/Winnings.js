import React from 'react';

function Winnings(props) {
    var indents = [];
    for (var i = 0; i < 6; i++) {
        if (i < props.winCount)
            indents.push(<span className='white-dot' key={i}></span>);
        else
            indents.push(<span className='dot' key={i}></span>);
    }
    return indents;

}
export default Winnings;