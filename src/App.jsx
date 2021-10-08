import BackgroundCharacter from "./Components/BackgroundCharacter";
import MainMenu from "./Components/MainMenu";
import petraImg from './media/Petra_Gurin.png'
import selenImg from './media/Selen_Tatsuki.png'
import rosemiImg from './media/Rosemi_Lovelock.png'

function App() {
  const petra = {
    fullName: 'Petra Gurin',
    firstName: 'Petra',
    image: petraImg,
    slot: 0,
  }
  const selen = {
    fullName: 'Selen Tatsuki',
    firstName: 'Selen',
    image: selenImg,
    slot: 1,
  }
  const rosemi = {
    fullName: 'Rosemi Lovelock',
    firstName: 'Rosemi',
    image: rosemiImg,
    slot: 2,
  }

  return (
    <>
    <div className='mainMenuContainer'>
          <MainMenu petra={petra} selen={selen} rosemi={rosemi} />
      </div>
    <div className="bgContainer">

      
      <div className='bgImage'></div>
      <div className="bgCharacterContainer">
        <BackgroundCharacter imgPath={petra.image}/>
        <BackgroundCharacter imgPath={selen.image}/>
        <BackgroundCharacter imgPath={rosemi.image}/>
      </div>
    </div>
    </>
  );
}

export default App;
