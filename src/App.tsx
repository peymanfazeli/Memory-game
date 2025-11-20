// Styles
import './App.css'
import Controls from './components/Controls'
import GameBoard from './components/GameBoard'

function App() {

  return (
    <>
      {/* <h1>Application</h1> */}
      <div className="p-4">
        <Controls />
        <GameBoard />
      </div>
    </>
  )
}

export default App
