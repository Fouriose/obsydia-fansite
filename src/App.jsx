import BackgroundCharacter from "./Components/BackgroundCharacter";
import MainLogo from "./Components/MainLogo";
import petra from './media/Petra_Gurin.png'
import selen from './media/Selen_Tatsuki.png'
import rosemi from './media/Rosemi_Lovelock.png'

function App() {
  return (
    <>
    <div className='mainMenuContainer'>
          <MainLogo petra={petra} selen={selen} rosemi={rosemi} />
      </div>
    <div className="bgContainer">

      
      <div className='bgImage'></div>
      <div className="bgCharacterContainer">
        <BackgroundCharacter imgPath={petra}/>
        <BackgroundCharacter imgPath={selen}/>
        <BackgroundCharacter imgPath={rosemi}/>
      </div>
    </div>
    </>
  );
}

export default App;
