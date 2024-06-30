
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './component/Header';
import Content from './component/Content';
function App() {
  return (
    <>    
      <Header>
        
      </Header>
      <div className="App">
        <div>
          <Routes>
            <Route path='/' element={<Content/>} />
            <Route path='/detail' element={<Content/>} />
          </Routes>
        </div>

      </div>
    </>
  );
}

export default App;
