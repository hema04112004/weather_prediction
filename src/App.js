import WeatherApp from "./Weatherapp";
import  { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './Register';
import Login from './login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/wheather" element={<WeatherApp />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
