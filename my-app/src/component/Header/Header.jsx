import './Header.css'
const name =['shaheem','abijith','max'];

function generateRandomInd(max){
    return Math.floor(Math.random()*(max + 1));
}



export default function Header(){
    const names = name[generateRandomInd(2)];
    return(
        <header>
          <h1>Header</h1>
        <p>Good Morning mr.{names}</p>
        </header>
    )
}

