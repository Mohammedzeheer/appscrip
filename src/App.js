import './App.css';
import Text1 from './components/Text/Text1';
import Text2 from './components/Text/Text2';
import Text3 from './components/Text/Text3';
import Background from './components/background/Background';
import Twocards from './components/card1/Twocards';
import CardList from './components/card2/CardList';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import GroupPhoto from './components/photo/GroupPhoto';
import Photo2 from './components/photo/Photo2';



function App() {

  return (
    <div className="App">
     <Navbar/>
     <Background/>
     {/* <Login/> */}
     <Text1/>
     {/* <Twocards/> */}
     <CardList/>
     <Text2/>
     <GroupPhoto/>
     <Text3/>
     <Photo2/>
     <Footer/>
     
    </div>
  );
}

export default App;
