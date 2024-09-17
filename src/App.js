import logo from './logo.svg';
import './App.css';
import FunnelGraph from './FunnelGraph'
import Funnel from './Funnel'
import RectangleChart from './RectangleChar';
import Trapezoid from './Trapezoid';
import HorizontalFunnel from './HorizontalFunnel';

function App() {
  return (
    <div className="App">
      <h1>Funnel Details</h1>
      <FunnelGraph />
      {/* <Funnel /> */}
      <HorizontalFunnel />
    </div>
  );
}

export default App;
