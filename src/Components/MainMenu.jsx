import logo from '../media/Logo.svg'
import CharacterBox from './CharacterBox';
import arrowLeft from '../media/Arrow-left.svg'
import arrowRight from '../media/Arrow-right.svg'
import { useState } from 'react'

function MainMenu(props){
    const [menuIsActive, setMenuIsActive] = useState(false)

    return(
        <>
        <img src={arrowLeft} id={menuIsActive ? 'arrowLeft__active' : undefined} alt='logo' className='arrowLeft'></img>
        <CharacterBox 
            character={props.petra}
            characterBoxState={menuIsActive ? 'characterBox-1__active' : undefined}
            characterTooltipState={menuIsActive ? 'characterTooltip-1__active' : undefined}
        />
        <CharacterBox 
            character={props.selen}
            characterBoxState={menuIsActive ? 'characterBox-2__active' : undefined}
            characterTooltipState={menuIsActive ? 'characterTooltip-2__active' : undefined}
        />
        <CharacterBox 
            character={props.rosemi}
            characterBoxState={menuIsActive ? 'characterBox-3__active' : undefined}
            characterTooltipState={menuIsActive ? 'characterTooltip-3__active' : undefined}
        />
        
        <img src={logo} alt='logo'
        className='obsydiaLogo'
        id={menuIsActive ? 'logo__active' : undefined} 
        onClick={(e) => {if(menuIsActive === false) {
            setMenuIsActive(true)
            e.target.classList.add('obsydiaLogo__active')
        }}}
        ></img>
        <img src={arrowRight} id={menuIsActive ? 'arrowRight__active' : undefined} alt='logo' className='arrowRight'></img>
        </>
    )
}

export default MainMenu