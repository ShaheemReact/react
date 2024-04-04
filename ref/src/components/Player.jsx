import { useState,useRef } from "react";

export default function Player() {
  const [intialName,setIntialName ]=useState('')
  const playerName = useRef();
  console.log(playerName)



  function handleClick(){
    console.log(playerName,'ok')
    setIntialName(playerName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {intialName?? intialName}</h2>
      <p>
        <input ref={playerName} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
