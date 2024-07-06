
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './component/common/Header';
import Content from './pages/Contents/Content';
import Footer from './component/common/Footer';
import ContentDetail from './pages/Contents/ContentDetail';
function App() {
  
  const categories = ['fashion','brand','music','art','architecture','life']
  return (
    <>    
      <Header>
        
      </Header>
      <div className="App">
          <Routes>
            <Route path='/' element={<Content />} />
            {
              categories.map((category, index)=> {
                return (
                  <Route 
                    path={`/${category}`}
                    element={<Content category={category}/>}
                    key = {index}
                  >
                    <Route 
                      path={`detail`}
                      key = {index}
                      ></Route>
                  </Route>
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

const IndexCarousel = () => {
  return (
      <>
      </>
  )
}