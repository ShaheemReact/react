import NewProject from "./components/NewProject";
import NoProjectAdded from "./components/NoProjectAdded";
import SideBar from "./components/SideBar";
import {useState} from 'react';

function App() { 
  const [projectState,setProjectState]=useState({
    selectedProjectId: undefined,
    projects:[]
  })
  function handleStartAddProject(){
    setProjectState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:null,
      }
    })
  }
  let content;
  if(projectState.selectedProjectId === null){
    content =<NewProject/>
  }else if(projectState.selectedProjectId=== undefined){
    content = <NoProjectAdded onStart={handleStartAddProject}/>

  }
  return (
    <main className="h-screen my-8 flex gap-8">
    <SideBar onStart={handleStartAddProject}/>
    {content}
    </main>
  );
}

export default App;
