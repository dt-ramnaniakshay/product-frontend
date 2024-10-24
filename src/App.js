import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from "./Components/NavBar"
import HomePage from './Pages/HomePage'
import ViewPage from './Pages/ViewPage'
import CreatePage from './Pages/CreatePage'
import DeletePage from './Pages/DeletePage'
import UpdatePage from './Pages/UpdatePage'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/view' element={ <ViewPage /> } />
        <Route path='/create' element={ <CreatePage /> } />
        <Route path='/delete' element={ <DeletePage /> } />
        <Route path='/update' element={ <UpdatePage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
