import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import RecipeContainer from './containers/RecipeContainer';
import AppContainer from './containers/AppContainer';
import UserContainer from './containers/UserContainer'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppContainer />}/>
        <Route path='/recipes' element={<RecipeContainer />} />
        <Route path='/account' element={<UserContainer />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
