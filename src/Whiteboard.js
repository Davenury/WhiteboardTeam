import { useEffect } from 'react';

export function Whiteboard(props) {

  let wt = null;

  useEffect(() => {
    wt = new window.api.WhiteboardTeam('#wt-container', {
      clientId: props.client_id,
      boardCode: props.code
    });
  }, [])

  const getUser = () => {
    if(wt != null){
      wt.getCurrentUser()
        .then(user => console.log(user));
    }
  }

  return (
    <div style={{width: "100%", height: "100%"}}>
      <div style={{width: "100%", height: "600px"}} id="wt-container"></div>
      <button onClick={getUser}>Click!</button>
    </div>
  );
}