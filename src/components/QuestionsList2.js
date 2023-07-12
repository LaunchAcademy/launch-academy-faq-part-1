import React, { useState } from 'react'
import QuestionTile2 from './QuestionTile2';

const QuestionsList2 = props => {
  const [expandedQuestionId, setExpandedQuestionId] = useState(null)

  console.log("expandedQuestionId", expandedQuestionId)

  const questionTiles = props.questions.map(question => {
    // INSIDE OUR MAP -- LOOKING AT ONE QUESTION AT A TIME
    let expanded
    if(expandedQuestionId === question.id) {
      expanded = true
    } else {
      expanded = false
    }

    const handleClick = () => {
      setExpandedQuestionId(question.id)
    }

    return (
      <QuestionTile2
        key={question.id}
        id={question.id}
        question={question.question}
        answer={question.answer}
        expanded={expanded}
        onClickFunction={handleClick}
      />
    )
  })

  return (
    <div>
      {questionTiles}
    </div>
  )
}

export default QuestionsList2
