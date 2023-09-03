import './App.css';
import {useState} from "react";
function App() {
  const [grid,setGrid]=useState([null,null,null,null,null,null,null,null,null]);
  const [player,setPlayer]=useState("X");
  const [clickable,setClickable]=useState(true);
  const [message,setMessage]=useState("");
  const checkWinner=()=>{
    const winConditions = [
      // Horizontal wins
      (grid[0] && grid[0] === grid[1] && grid[1] === grid[2]),
      (grid[3] && grid[3] === grid[4] && grid[4] === grid[5]),
      (grid[6] && grid[6] === grid[7] && grid[7] === grid[8]),
  
      // Vertical wins
      (grid[0] && grid[0] === grid[3] && grid[3] === grid[6]),
      (grid[1] && grid[1] === grid[4] && grid[4] === grid[7]),
      (grid[2] && grid[2] === grid[5] && grid[5] === grid[8]),
  
      // Diagonal wins
      (grid[0] && grid[0] === grid[4] && grid[4] === grid[8]),
      (grid[2] && grid[2] === grid[4] && grid[4] === grid[6]),
    ];
  
    // Check for a winning condition
    for (const condition of winConditions) {
      if (condition) {
        return true; // Return the winner ('X' or 'O')
      }
    }
    return false;
  }
  const handleClick=(e)=>{
    if(!clickable){
      return;
    }
    const index=e.target.id;
    const clickedElement=document.getElementById(index);
    if(clickedElement==null)
    return;
    if(clickedElement.innerHTML=='X' || clickedElement.innerHTML=='O')
    {
      alert('You have already selected this position');
    }
    else{
      const updatedGrid=grid;
      updatedGrid[index] = player;
      setGrid(updatedGrid);
      if(checkWinner())
      {
      setMessage(`${player} is the winner`);
      setClickable(false);
      }
      if(player=='X')
      setPlayer('O')
      else
      setPlayer('X');
    }
  }
  return (
    <>
    <div className='App'>
      <h1>WELCOME TO THE TIC -TAC TOE GAME</h1>
      <p>{message}</p>
      <p>RULES</p>
      <p>X for Player 1 </p>
      <p>O for Player 2 </p>
    <div className="container" onClick={handleClick}>
      <div className="row">
        <div className='element' id="0">{grid[0]}</div>
        <div className='element'id="1">{grid[1]}</div>
        <div className='element'id="2">{grid[2]}</div>
      </div>
      <div className="row">
        <div className='element' id="3">{grid[3]}</div>
        <div className='element' id="4">{grid[4]}</div>
        <div className='element' id="5">{grid[5]}</div>
      </div>
      <div className="row">
        <div className='element' id="6">{grid[6]}</div>
        <div className='element' id="7">{grid[7]}</div>
        <div className='element' id="8">{grid[8]}</div>
      </div>
    </div>
    </div>
    </>
  );
}

export default App;
