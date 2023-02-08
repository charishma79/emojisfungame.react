// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, emojisList, onClickPlay} = props

  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const onResetEmojiGame = () => {
    onClickPlay()
  }

  return (
    <div className="main-score-card-container">
      <div className="score-card-bg-container">
        <div className="score-details-container">
          {isWon ? (
            <h1 className="title">You Won</h1>
          ) : (
            <h1 className="title">You Lose</h1>
          )}
          {isWon ? (
            <p className="best-score">Best Score</p>
          ) : (
            <p className="best-score">Score</p>
          )}
          {isWon ? (
            <p className="marks">12/12</p>
          ) : (
            <p className="marks">
              {score}/{emojisList.length}
            </p>
          )}
          <button className="play-btn" type="button" onClick={onResetEmojiGame}>
            Play Again
          </button>
        </div>
        <img src={imageUrl} className="result-logo" alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
