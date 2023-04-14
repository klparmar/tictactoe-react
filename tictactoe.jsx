import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}

function Square(props) {
  const [currTile, setCurrTile] = React.useState("");

  const handleTile = ()=> {
    if (currTile == ""){
      if(props.didWin() == true) return;
      setCurrTile(props.placeMark);
      props.handleChange();
      props.changeBoard(props.row, props.tile);
    }
  }

  return (
    <div
      className="square"
      style={squareStyle}
      onClick={handleTile}>
      {currTile}
    </div>
  );
}


function Board() {
  const start =  {
     1: "",
     2: "",
     3: "",
     4: "",
     5: "",
     6: "",
     7: "",
     8: "",
     9: "",

   }

  const [currPlayer, setCurrPlayer] = React.useState("X");
  const [winner, setWinner] = React.useState("None");
  const [thexo, setthexo] = React.useState(true);
  const [board, setBoard] = React.useState(start);
  
  const [hasWon, sethasWon] = React.useState(false);

  const checkWinner = () =>{

    if(board[1] == board[2] && board[1] == board[3]){
      if(board[1] != "" && board[2] != "" && board[3] != ""){
          setWinner(board[1])
        sethasWon(true)
      }
        
    }

    else if(board[4] == board[5] && board[4]  == board[6]){
      if(board[4] != "" && board[5] != "" && board[6] != ""){
        setWinner(board[4])
        sethasWon(true)
      }
        
      console.log(board[4] == board[5])
    }

    else if(board[7] == board[8] && board[7] == board[9]){
      if(board[7] != "" && board[8] != "" && board[9] != ""){
        setWinner(board[7])
        sethasWon(true)
      }
        
    }

    else if(board[1] == board[4] && board[1] == board[7]){
      if(board[1] != "" && board[4] != "" && board[7] != ""){
        setWinner(board[1])
        sethasWon(true)
      }
        
    }

    else if(board[2] == board[5] && board[2] == board[8]){
      if(board[2] != "" && board[5] != "" && board[8] != ""){
        setWinner(board[2])
        sethasWon(true)
      }
        setWinner(board[2])
    }

    else if(board[3] == board[6] && board[3]== board[9]){
      if(board[3] != "" && board[6] != "" && board[9] != ""){
        sethasWon(true)
        setWinner(board[3])
      }
    }

    else if(board[1] == board[5] && board[1]== board[9]){
      if(board[1] != "" && board[5] != "" && board[9] != ""){
        sethasWon(true)
        setWinner(board[1])
      }
    }
  };

  React.useEffect(() => {
    checkWinner();
  },[board]);
 

  const handleChangePlayer = ()=> {
    setthexo(!thexo);

    if(thexo){
      setCurrPlayer("O")
    }else{
      setCurrPlayer("X")
    }
  }


  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>{currPlayer}</span></div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>{winner}</span></div>
      <button style={buttonStyle} onClick={() => location.reload()}>Reset</button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square 
          row={1}
          tile={1}
          placeMark = {currPlayer} 
          handleChange={() => handleChangePlayer()}
          didWin = {() => {return hasWon}}
          changeBoard={() => {
            if(!hasWon){
              setBoard({...board, 1:currPlayer})
            }
          }}
          />
          <Square 
          row={1}
          tile={2}
          placeMark = {currPlayer} 
          handleChange={() => { if(!hasWon)handleChangePlayer()}}
          didWin = {() => {return hasWon}}
          changeBoard={() => {
            if(!hasWon){
              setBoard({...board, 2:currPlayer})
            }
          }}
          />
          <Square 
          row={1}
          tile={3}
          placeMark = {currPlayer} 
          handleChange={() => { if(!hasWon)handleChangePlayer()}}
          didWin = {() => {return hasWon}}
          changeBoard={() => {
            if(!hasWon){
              setBoard({...board, 3:currPlayer})
            }
          }}
          />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square 
          row={2}
          tile={1}
          placeMark = {currPlayer} 
           handleChange={() => { if(!hasWon)handleChangePlayer()}}
           didWin = {() => {return hasWon}}
          changeBoard={() => {
            if(!hasWon){
              setBoard({...board,4:currPlayer})
            }
          }}
          />
          <Square 
          row={2}
          tile={2}
          placeMark = {currPlayer} 
           handleChange={() => { if(!hasWon)handleChangePlayer()}}
           didWin = {() => {return hasWon}}
          changeBoard={() => {
            if(!hasWon){
              setBoard({...board, 5:currPlayer})
            }
          }}
          />
          <Square 
          row={2}
          tile={3} 
          placeMark = {currPlayer} 
           handleChange={() => { if(!hasWon)handleChangePlayer()}}
           didWin = {() => {return hasWon}}
          changeBoard={() => {
            if(!hasWon){
              setBoard({...board, 6:currPlayer})
            }
          }}
          />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square 
          row={3}
          tile={1}
          placeMark = {currPlayer} 
           handleChange={() => { if(!hasWon)handleChangePlayer()}}
           didWin = {() => {return hasWon}}
          changeBoard={() => {
            if(!hasWon){
              setBoard({...board, 7:currPlayer})
            }
          }}
          />
          <Square 
          row={3}
          tile={2}
          placeMark = {currPlayer} 
           handleChange={() => { if(!hasWon)handleChangePlayer()}}
           didWin = {() => {return hasWon}}
         changeBoard={() => {
            if(!hasWon){
              setBoard({...board, 8:currPlayer})
            }
          }}
          />
          <Square 
          row={3}
          tile={3}
          placeMark = {currPlayer} 
           handleChange={() => { if(!hasWon)handleChangePlayer()}}
           didWin = {() => {return hasWon}}
         changeBoard={() => {
            if(!hasWon){
              setBoard({...board, 9:currPlayer})
            }
          }}
          />
        </div>
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Game />);