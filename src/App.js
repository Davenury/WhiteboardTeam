import { useState } from 'react';
import { Whiteboard } from './Whiteboard'; 

function App() {

  const [clientId, setClientID] = useState('');
  const [code, setCode] = useState('');
  const [submitted, setSubmitted] = useState(false);


  const handleClientID = ({ target }) => {
    setClientID(target.value)
  }

  const handleCode = ({target}) => {
    setCode(target.value)
  }

  const handleSubmit = () => {
    setSubmitted(true)
  }


  return(<div>
    {
    submitted
     ?
      <div>
        <Whiteboard client_id={clientId} code={code}/>
      </div>
     :
     <div>
        <label>ClientID: </label>
        <input type="text" onChange={handleClientID} />
        <label>Code: </label>
        <input type="text" onChange={handleCode}/>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    }
</div>
  )
}

export default App;
