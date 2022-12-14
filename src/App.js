import Carosel from './components/Carosel/Carosel';
import Destinations from './components/Destinations/Destinations';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import ImagesList from './components/ImagesList/ImagesList';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div >
      <NavBar />
      <Hero />
      <Destinations />
      <Details />
      <ImagesList />
      <Carosel />
      <Footer />
    </div>
  );
}

export default App;
