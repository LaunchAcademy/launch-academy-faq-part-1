import React from 'react'
import QuestionTile from './QuestionTile';

const QuestionsList = props => {
  const questionTiles = props.questions.map(question => {
    return (
      <QuestionTile
        key={question.id}
        id={question.id}
        question={question.question}
        answer={question.answer}
      />
    )
  })

  return (
    <div>
      {questionTiles}
    </div>
  )
}

export default QuestionsList
