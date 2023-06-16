import  SearchPage  from './pages/SearchPage';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/search" element={<SearchPage/>}>
          </Route>
          <Route exact path="/" element={<Home/>}>    
          </Route>
        </Routes>
      </Router>
    </div>
    

  );
}

export default App;