import React from "react" 

const FAQTile = (props) => {

  let answerElement
  if (props.selectedFaqIds.includes(props.id)) {
    answerElement = <p> {props.answer}</p>
  }

  const handleQuestionClick = () => {
    const newArrayOfIds = props.selectedFaqIds.concat(props.id)
    props.setSelectedFAQIds(newArrayOfIds)
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