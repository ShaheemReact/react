import image from '../assets/no-projects.png'
import Button from './Button'

export default function NoProjectAdded({onStart}){
    return(
        <div className="mt-24 text-center w-2/3">
            <img src={image} alt="empty task" className='w-16 h-16 object-contain mx-auto'/>
            <h2 className='text-xl font-bold text-stone-500 my-4'>Np Project Selected</h2>
            <p className='text-stone-400 mb-4 '>Select A Project</p>
            <p className='mt-8'>
                <Button onClick={onStart}>Create a new project</Button>
            </p>
        </div>
    )
}