import './GameOver.css';

const GameOver = ({retry}) => {
  return (
    <div>
        <div>
            <h1>Game Over</h1>
            <button onClick={retry}>Resetar o jogo</button>
        </div>
    </div>
  )
}

export default GameOver