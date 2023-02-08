// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {emojiUrl, emojiName, id} = emojiDetails

  const onClickEmojiIcon = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emojis-cards">
      <button className="btn" type="button" onClick={onClickEmojiIcon}>
        <img src={emojiUrl} alt={emojiName} className="fun-emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
