import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SelectClothes from './components/SelectClothes';
import Checkout from './components/Checkout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectClothes />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;
