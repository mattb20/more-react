
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
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
        <GameBoard></GameBoard>
      </div>
      ## Game log component
    </main>
  )
}

export default App
