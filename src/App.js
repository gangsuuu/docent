
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './component/common/Header';
import Content from './component/Content';
import Footer from './component/common/Footer';
function App() {
  
  const tests = ['fashion','brand','music','art','architecture','life']
  return (
    <>    
      <Header>
        
      </Header>
      <div className="App">
          <Routes>
            <Route path='/*' element={<Content />} />
            {
              tests.map((test, index)=> {
                return (
                  <Route 
                    path={`/${test}`}
                    element={<Content/>}
                    key = {index}
                    test = {test}
                  />
                )
              })
            }
            
          </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
