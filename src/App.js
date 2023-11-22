import './App.css';
import Header from './components/Header/Header';
import Mylinechart from './components/Mylinechart/Mylinechart';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <h1 className="text-3xl font-bold italic">

        HelloYouuuu!
      </h1>
      <Header></Header>
      <Mylinechart></Mylinechart>

    </div>
  );
}

export default App;
