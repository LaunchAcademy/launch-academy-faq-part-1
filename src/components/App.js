import React, { useState } from 'react';

import FAQTile from './FAQTile';

const App = (props) => {

  const [selectedFaqId, setSelectedFAQId] = useState(null)

  const FAQTileComponents = props.faqArray.map((faqObject) => {
    return (
      <FAQTile 
        key={faqObject.id}
        id={faqObject.id}
        selectedFaqId={selectedFaqId}
        setSelectedFAQId={setSelectedFAQId}
        question={faqObject.question}
        answer={faqObject.answer}
      />
    )
  })

  return(
    <div className="page">
      <h1>Launch Academy FAQs</h1>

      {FAQTileComponents}

    </div>
  )
}

export default App;

