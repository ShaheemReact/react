import './App.css';
import Header from './component/Header/Header.jsx';
import { CoreConcept } from './component/CoreConcept.jsx';
import TabButton from './component/TabButton.jsx';

function App() {
  return (
    <>
      <header>
        <Header/>
        <h1>React Essentials  </h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      <section id="core-concept">
        <ul>
      <CoreConcept title="Game" description="its about game"/>
      <CoreConcept title="Footer" description="new footer"/>
      </ul>
      </section>
      <section id="examples">
      <h2>Examples</h2>


        <menu>
        <TabButton>Components</TabButton>
        <TabButton>JSX</TabButton>
        <TabButton>STATE</TabButton>
        </menu>

      </section>
      </main>
    </>
  );
}

export default App;
