
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Cards from './components/Cards'
function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Cards
        img ="../image/swimming_v2.png"
        rating ="5.0 (6)"
        location =". USA"
        name = "Life lessons with Katie Zaferes"
        price = "From $136"
      />
    </div>
  );
}

export default App;
