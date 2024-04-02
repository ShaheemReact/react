import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"

function App() {
  const [gameTurns , setGameTurns ] = useState([])
  const [activePlayer,setActivePlayer] = useState('x')

  function handleSquareChange(rowIndex,colIndex){
    setActivePlayer((curActivePlayer)=> curActivePlayer === 'x'? 'o':'x')
    setGameTurns( prevTurns =>{
      let currentPlayer = 'x';
      if( prevTurns.length > 0 && prevTurns[0].Player==='x'){
        currentPlayer = 'o'
      }
      const updatedTurns = [{square:{row:rowIndex,col:colIndex},Player:currentPlayer},...prevTurns]
      return updatedTurns;
    });
  }

  return (<main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="player-1" symbol="x" isActive={activePlayer==='x'}/>
        <Player initialName="player-2" symbol="o" isActive={activePlayer==='o'}/>
      </ol>
      <GameBoard onSelectSquare={handleSquareChange} turns={gameTurns}/>
    </div>
    <Log/>
  </main>
  )  
}
export default App
