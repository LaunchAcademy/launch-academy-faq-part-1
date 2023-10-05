import React from "react" 

const FAQTile = (props) => {

  let answerElement
  if (props.selectedFaqId === props.id) {
    answerElement = <p> {props.answer}</p>
  }

  const handleQuestionClick = () => {
    props.setSelectedFAQId(props.id)
  }

  return(
    <div className="faq-tile">
      <h4 onClick={handleQuestionClick}>
        {props.question}
      </h4>
     {answerElement}
    </div>
  )
}

export default FAQTile