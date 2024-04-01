import { CoreConcept } from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import {CORE_CONCEPTS} from "./components/data"
function App() {
  function handleClick(selectedButton){
    console.log(selectedButton)
    console.log('hello WOrld')
}
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
          <h2>Core Concept</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <h2>Time to get started!</h2>
      <section id="examples">
      <h2>Examples</h2>
        <menu>
        <TabButton onSelect={()=>handleClick}>Components</TabButton>
        <TabButton onSelect={()=>handleClick}>JSX</TabButton>
        <TabButton onSelect={()=>handleClick}>STATE</TabButton>
        </menu>
        Dyanamic
      </section>
      </main>
    </div>
  );
}

export default App;
