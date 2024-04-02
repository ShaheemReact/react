import { useState } from 'react';
import { CoreConcept } from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import {CORE_CONCEPTS, EXAMPLES   } from "./components/data"
import Tabs from './components/Tabs';


function App() {
  const [selectedTopic,setSelectedTopic ] = useState();
  function handleClick(selectedButton){
    setSelectedTopic(selectedButton)
    console.log(selectedTopic)
    console.log('hello WOrld')
}
let TabContent = <p >Please Select  A topic</p>
if (selectedTopic){
  TabContent = (<div id="tab-content">
  <h3>{EXAMPLES[selectedTopic].title}</h3>
  <p>{EXAMPLES[selectedTopic].description}</p>        
  <pre>
    <code>
      {EXAMPLES[selectedTopic].code}
    </code>
  </pre>
</div>);

}
console.log("APP CONTENT")
  return (
    <div>
      <header>
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item)=>(
                <CoreConcept key={item.title}{...item}/>
            ))}
          </ul>
        </section>
        <h2>Time to get started!</h2>
      <section id="examples">
      <h2>Examples</h2>
      <Tabs buttonContainer buttons={<><TabButton isSelected={selectedTopic==='components'} onSelect={()=>handleClick('components')}>Components</TabButton>
        <TabButton isSelected={selectedTopic==='jsx'} onSelect={()=>handleClick('jsx')}>JSX</TabButton>
        <TabButton isSelected={selectedTopic==='props'} onSelect={()=>handleClick('props')}>Props  </TabButton>
        <TabButton isSelected={selectedTopic==='state'} onSelect={()=>handleClick('state')}>STATE</TabButton> </>}>{TabContent}</Tabs>

         </section>
      </main>
    </div>
  );
}

export default App;
