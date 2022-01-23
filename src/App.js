import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import AppHeaderBar from './components/AppHeaderBar'
import AddEmployee from './pages/AddEmployee';

function App() {
  return (
    <div>
      <BrowserRouter>
      <AppHeaderBar/>
        <Routes>
          <Route path="/" element={<Navigate to="/employee/list" />}></Route>
          <Route path="/employee/list" element={<Home />}></Route>
          <Route path="/employee/add" element={<AddEmployee/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
