import BackgroundCharacter from "./Components/BackgroundCharacter";
import MainLogo from "./Components/MainLogo";
import petra from './media/Petra_Gurin.png'
import selen from './media/Selen_Tatsuki.png'
import rosemi from './media/Rosemi_Lovelock.png'

function App() {
  return (
    <>
    <div className='main-menu-container'>
          <MainLogo petra={petra} selen={selen} rosemi={rosemi} />
      </div>
    <div className="main-container">

      
      <div className='bg-image'></div>
      <div className="bg-char-container">
        <BackgroundCharacter imgPath={petra}/>
        <BackgroundCharacter imgPath={selen}/>
        <BackgroundCharacter imgPath={rosemi}/>
      </div>
    </div>
    </>
  );
}

export default App;
