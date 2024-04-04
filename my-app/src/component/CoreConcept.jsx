import './CoreConcept.css'
import reactImg from '../assets/pexels-ricky-esquivel-1964471.jpg'

function CoreConcept({title,description}){
    return(
        <footer>
            <li>
        <img src={reactImg} width={190} height={300} alt='...'/>
            <h1>{title}</h1>
            <p>{description}</p>
            </li>
        </footer>
        
    )
}

export { CoreConcept}