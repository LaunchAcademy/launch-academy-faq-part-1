import React from 'react';
import QuestionsList from './QuestionsList';
import QuestionsList2 from './QuestionsList2';

const App = (props) => {
  return(
    <div className="page">
      <QuestionsList2
        questions={props.data}
      />
    </div>
  )
}

export default App;
