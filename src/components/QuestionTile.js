import React, { useState } from 'react'

const QuestionTile = props => {
  const [expanded, setExpanded] = useState(false)
  const [favorited, setFavorited] = useState(false)

  const handleClick = () => {
    // if(expanded === true) {
    //   setExpanded(false)
    // } else {
    //   setExpanded(true)
    // }
    setExpanded(!expanded)
    // setExpanded essentially does the below, but the "React" way
    // expanded = !expanded
  }
  console.log(props.question)
  console.log(expanded)

  const clickHeart = () => {
    setFavorited(!favorited)
  }
  let heartIconClassName
  if(favorited) {
    heartIconClassName = "fa fa-heart fa-2x red"
  } else {
    heartIconClassName = "fa fa-heart fa-2x"
  }

  // 1. Set up our state
  // 2. Create a click function to update that state when certain things are clicked
  // 3. Add that click function to an element
  // 4. Add a conditional to change what shows up on our page

  let answer, iconClassName
  if(expanded) {
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
        onClick={handleClick}
      />
      <h5>{props.question}</h5>
      {answer}
      <i className={heartIconClassName} onClick={clickHeart}/>
    </div>
  )

  // if(expanded === true) {
  //   return (
  //     <div>
  //       <i
  //         className="fa fa-minus-square fa-2x green"
  //         onClick={handleClick}
  //       />
  //       <h5>{props.question}</h5>
  //       <p>{props.answer}</p>
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div>
  //       <i
  //         className="fa fa-plus-square fa-2x green"
  //         onClick={handleClick}
  //       />
  //       <h5>{props.question}</h5>
  //     </div>
  //   )
  // }
}

export default QuestionTile
