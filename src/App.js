import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Students from './components/Students';
import DetailStudent from './components/DetailStudent'
import DetailBook from './components/DetailBook'
import Books from './components/Books';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/students" element={<Students/>}></Route>
        <Route path="/studentDetails/:id" element={<DetailStudent/>}></Route>
        <Route path="/books" element={<Books/>}></Route>
        <Route path="/bookDetails/:id" element={<DetailBook/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
