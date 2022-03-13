import { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)
    let avRating = feedback.reduce((acc, item)=>{
        return acc + item.rating;
    },0) / feedback.length;
    avRating = avRating.toFixed(1).replace(/[.,]0$/, '')
  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Avarage rating: {isNaN(avRating) ? 0 : avRating }</h4>
    </div>
  )
}


export default FeedbackStats