import './App.css';
import Navbar from './NavBar';
import ScreenerSectionHome from './ScreenerSectionHome';
import StockSlideshow from './StockSlideshow';




function App() {
  return (
    <div className='container'>
      <Navbar />
      <StockSlideshow />
      <ScreenerSectionHome/>
     
    </div>
  );
}

export default App;
