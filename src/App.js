import React from 'react';
import Routes from './routes';
import AuthContext from './contexts/auth';

function App() {
  return (
    <AuthContext.Provider value={{signed: true}}>
      <Routes />
    </AuthContext.Provider>
  );
}

export default App;
