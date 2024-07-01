// import logo from './logo.svg';
import './App.css';
// import UseMemoComp from './components/UseMemo';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './components/Menu';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';

function App() {
  // let Comp1Name ="Comp1"
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu />}>
            <Route index element={<Comp1 name="Comp 1" />} />
            <Route path='/comp1' element={<Comp1 name="Comp 1" />} />
            <Route path='/comp2' element={<Comp2 />} />
            <Route />
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
