import Player from './components/Player.jsx';
import TimerChallengers from './components/TimeChallengers.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallengers title="easy" targetTime={1}/>
        <TimerChallengers title=" not easy" targetTime={5}/>
        <TimerChallengers title=" getting easy" targetTime={10}/>
        <TimerChallengers title="pro" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
