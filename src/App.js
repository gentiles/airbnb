
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Cards from './components/Cards'
function App() {
  return (
    <div>
      <NavBar />
      <Hero />
            <div className='container'>
              <Cards
                img ="../image/swimming_v2.png"
                rating ="5.0 (6)"
                location =". USA"
                name = "Life lessons with Katie Zaferes"
                price = "From $136"
              />
              <Cards
                img ="../image/swimming_v2.png"
                rating ="5.0 (6)"
                location =". USA"
                name = "Life lessons with Katie Zaferes"
                price = "From $136"
              />
              <Cards
                img ="../image/swimming_v2.png"
                rating ="5.0 (6)"
                location =". USA"
                name = "Life lessons with Katie Zaferes"
                price = "From $136"
              />
            </div>

      </div>
      
  );
}

export default App;
