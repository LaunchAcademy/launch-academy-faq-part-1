import React from 'react'

const QuestionTile2 = props => {
  console.log(props.question)
  console.log(props.expanded)

  let answer, iconClassName
  if(props.expanded) {
    answer = <p>{props.answer}</p>
    iconClassName = "fa fa-minus-square fa-2x"
  } else {
    answer = null
    iconClassName = "fa fa-plus-square fa-2x green"
  }

  return (
    <div>
      <i
        className={iconClassName}
        onClick={props.onClickFunction}
      />
      <h5>{props.question}</h5>
      {answer}
    </div>
  )
}

export default QuestionTile2
