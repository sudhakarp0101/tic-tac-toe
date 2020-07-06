import React from 'react';

function Square(props) {
  let a, b, c;
  if (props.winnerHeighlight) {
    [a, b, c] = props.winnerHeighlight;
  }
  return (
    <button className="square" style={{
      borderLeftStyle: (props.value === 1 || props.value === 4 || props.value === 7) ? "dashed" : "none",
      borderRightStyle: (props.value === 1 || props.value === 4 || props.value === 7) ? "dashed" : "none",
      borderTopStyle: (props.value === 3 || props.value === 4 || props.value === 5) ? "dashed" : "none",
      borderBottomStyle: (props.value === 3 || props.value === 4 || props.value === 5) ? "dashed" : "none",

      borderTopLeftRadius: props.value === 0 ? 25 : 0,
      borderTopRightRadius: props.value === 2 ? 25 : 0,
      borderBottomLeftRadius: props.value === 6 ? 25 : 0,
      borderBottomRightRadius: props.value === 8 ? 25 : 0,
      color: (props.value === a || props.value === b || props.value === c) ? "orange" : "white"
    }} onClick={props.onClick}>
      {props.player}
    </button>
  );
}
export default Square;