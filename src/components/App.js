import React, { useState } from 'react';

import FAQTile from './FAQTile';

const App = (props) => {

  const [selectedFaqIds, setSelectedFAQIds] = useState([])

  let secretMessage
  if (selectedFaqIds.includes(props.specialEasterEggFAQ)) {
    secretMessage = "THE LANGUAGE DOESNT MATTER, THE CONCEPTS DO!"
  }

  const FAQTileComponents = props.faqArray.map((faqObject) => {
    return (
      <FAQTile 
        key={faqObject.id}
        id={faqObject.id}
        selectedFaqIds={selectedFaqIds}
        setSelectedFAQIds={setSelectedFAQIds}
        question={faqObject.question}
        answer={faqObject.answer}
        specialEasterEggFAQ={props.specialEasterEggFAQ}
      />
    )
  })

  return(
    <div className="page">
      <h1>Launch Academy FAQs</h1>

      {FAQTileComponents}

      <br/>

      {secretMessage}
    </div>
  )
}

export default App;

