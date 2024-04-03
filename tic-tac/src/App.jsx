import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./components/winning-comination"
import GameOver from "./components/GameOver"

const initailGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]]


function derivedActivePlayer(gameTurns){
    let currentPlayer = 'x';
    if( gameTurns.length > 0 && gameTurns[0].Player==='x'){
      currentPlayer = 'o'
    }

    return currentPlayer;

}

function App() {
    const [gameTurns , setGameTurns ] = useState([])
    const activePlayer = derivedActivePlayer(gameTurns);
    let gameBoard = [...initailGameBoard.map(array=>  [...array])];

    for(const turn of gameTurns){
        const {square , Player} = turn;
        const { row,col} = square;

        gameBoard[row][col] = Player
    }

    let winner; 
    for (const combination of WINNING_COMBINATIONS){
        const firstSymbol = gameBoard[combination[0].row][combination[0].column];
        const scondSymbol = gameBoard[combination[1].row][combination[1].column];
        const thirdSymbol = gameBoard[combination[2].row][combination[2].column];

        if(firstSymbol && firstSymbol===scondSymbol && firstSymbol === thirdSymbol) {
          winner = firstSymbol
        }
    }

    const hasDraw = gameTurns.length === 9 && !winner;


    function handleSquareChange(rowIndex,colIndex){
      setGameTurns((prevTurns)=>{
          const currentPlayer = derivedActivePlayer(prevTurns)
          const updatedTurns = [{square:{row:rowIndex,col:colIndex},Player:currentPlayer},...prevTurns]
          return updatedTurns;
      });

    }
    function handleRestart(){
      setGameTurns([]);
    }

    return (<main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="player-1" symbol="x" isActive={activePlayer==='x'}/>
          <Player initialName="player-2" symbol="o" isActive={activePlayer==='o'}/>
        </ol>
        {(winner|| hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <GameBoard onSelectSquare={handleSquareChange} board={gameBoard}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
    )  
}
export default App
