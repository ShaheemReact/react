import image from '../assets/pexels-ricky-esquivel-1964471.jpg'
function CoreConcept({title,description}){
    return(
            <li>
            <img src={image} height={300} alt='...'/>
            <h1>{title}</h1>
            <p>{description}</p>
            </li>
        
    )
}

export { CoreConcept}