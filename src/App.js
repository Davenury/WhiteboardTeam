import { useEffect } from 'react';

function App() {

  let wt = null;

  useEffect(() => {
    wt = new window.api.WhiteboardTeam('#wt-container', {
      clientId: process.env.REACT_APP_CLIENT_ID,
      boardCode: process.env.REACT_APP_WHITEBOARD_CODE
    });
  }, [])

  const getUser = () => {
    if(wt != null){
      wt.getCurrentUser()
        .then(user => console.log(user));
    }
  }

  return (
    <div className="App" style={{width: "100%", height: "100%"}}>
      <div style={{width: "100%", height: "600px"}} id="wt-container"></div>
      <button onClick={getUser}>Click!</button>
    </div>
  );
}

export default App;
