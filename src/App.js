
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Cards from './components/Cards'
import Data from './components/data'


function App() {
  const Card = Data.map((item) =>{
    return (
        <Cards 
          img ={item.img}
          rating ={item.rating}
          location ={item.location}
          name ={item.name}
          price ={item.price}
          openSpot ={item.openSpot}
        />
    )
  }) 
  return (
    <div>
      <NavBar />
      <Hero />
            <div className='container'>
              {Card}
            </div>

      </div>
      
  );
}

export default App;



