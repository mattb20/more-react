
import Player from './components/Player.jsx';

function App() {  
  return (
    <main>
      <div id="game-container">
        ## Players component
        <ol id="players">
          <Player name="Player 1" symbol="X"/>
          <Player name="Player 2" symbol="O"/>
        </ol>
        ## Game board component
      </div>
      ## Game log component
    </main>
  )
}

export default App
