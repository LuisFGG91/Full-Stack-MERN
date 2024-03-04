import React, { useState } from 'react';
import './App.css';
//import Nav from './components/nav'
import Nav from './components/nav-material-ui'
import Main from './components/main'
import MessageForm from './components/messageForm';
import MessageDisplay from './components/messageDisplay';
import MyContext from './contexts/myContext';
import AppWrapperComponent from './components/appWrapperComponnet';

/*



*/


function App() {
  const [currentMsg, setCurrentMsg] = useState("There are no messages");

  const youveGotMail = (newMessage) => {
    setCurrentMsg(newMessage);
  }

  return (
    <>

      <Nav></Nav>
     
      <Main></Main>
      <MyContext.Provider value={"context value"}>
        <AppWrapperComponent>
        </AppWrapperComponent>
        <AppWrapperComponent>
        </AppWrapperComponent>
        <AppWrapperComponent>
        </AppWrapperComponent>
      </MyContext.Provider>
      <AppWrapperComponent>
      </AppWrapperComponent>
      <MessageForm onNewMessage={youveGotMail} />
      <MessageDisplay message={currentMsg} />
    </>
  );
}

export default App;


