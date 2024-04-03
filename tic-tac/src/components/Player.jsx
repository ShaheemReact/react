import { useState } from "react"

export default function Player({initialName,symbol,isActive}){
    const [playerName,setPlayerName]=useState(initialName)
    const [isEditing,setIsEditing] = useState(false);
    function handleEditClick(){
        setIsEditing((editing)=>!editing)
    }
    function handeChange(event){
        setPlayerName(event.target.value);

    }
    let editalePlayerName = <span className="player-name">{playerName}</span>
    if(isEditing){
        editalePlayerName = <input type="text" required value={playerName} onChange={handeChange}/>

    }
    return(
        <li className={isActive ?'active': undefined}>
        <span className="player-name">{editalePlayerName}</span>
        <span className="player-symbol">{symbol}</span>
         <button onClick={handleEditClick}>{isEditing ? "Save" :"Edit"}</button>
        </li>
    )
}