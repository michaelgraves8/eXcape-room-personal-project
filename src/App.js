import './App.css';
import routes from './routes'
import Header from './components/Header'
// import Inventory from './components/Inventory';


function App() {
  return (
    <div className="App">
      <Header />
      {routes}
      {/* <Inventory /> */}
    </div>
  );
}

export default App;
