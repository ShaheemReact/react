import { useState } from "react"
import Player from "./Player";


export default function GameBoard( {onSelectSquare,board  }){

    // const [gameBoard,setGameBoard] = useState(initailGameBoard);

    // function handleSelectSquare(rowIndex,colIndex){
    //     setGameBoard((prevGameBoard) =>{
    //         const updatedArray = [...prevGameBoard].map(innerArray=> [...innerArray])
    //         updatedArray[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedArray
    //     })
    //     onSelectSquare();
    // }
    return(
        <ol id="game-board">
            {board.map((item,rowIndex)=>
            <li key={rowIndex}>
                <ol>
                {item.map((playerSymbol,colIndex)=>
                <li key={colIndex}>
                    <button onClick={()=>onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol!==null}>{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    )
}