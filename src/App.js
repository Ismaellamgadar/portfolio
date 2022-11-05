import HomePage from './Components/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Spline from './Components/Spline';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/explore' element={<Spline />} />
      </Routes>
    </BrowserRouter>
  );
}
