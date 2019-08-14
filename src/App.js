import React from 'react';
import MainHeader from './components/mainheader'
import MainFooter from './components/mainfooter'
import MainRouter from './router'

function App() {
  return (
    <div className="App">
      <MainHeader />
      <main>
        <MainRouter />
      </main>
      <MainFooter />
    </div>
  );
}

export default App;
