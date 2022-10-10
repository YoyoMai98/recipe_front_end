import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import RecipeContainer from './containers/RecipeContainer';
import AppContainer from './containers/AppContainer';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppContainer />}/>
        <Route path='/recipe' element={<RecipeContainer />} />
      </Routes>
    </BrowserRouter>
    
   
  );
}

export default App;
