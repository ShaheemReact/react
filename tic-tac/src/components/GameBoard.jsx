import { useState } from "react"
import Player from "./Player";

const initailGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]]

export default function GameBoard( {onSelectSquare,turns  }){
    let gameBoard = initailGameBoard;

    for(const turn of turns){
        const {square , Player} = turn;
        const { row,col} = square;

        gameBoard[row][col] = Player
    }

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
            {gameBoard.map((item,rowIndex)=>
            <li key={rowIndex}>
                <ol>
                {item.map((playerSymbol,colIndex)=>
                <li key={colIndex}>
                    <button onClick={()=>onSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    )
}