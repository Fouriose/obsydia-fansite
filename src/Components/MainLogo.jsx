import logo from '../media/Logo.svg'
import CharacterBox from './CharacterBox';
import testLogo from '../media/Obsydia_logo_transparent_cropped.png'
import arrow from '../media/Arrow.svg'
import arrowLeft from '../media/Arrow-left.svg'
import arrowRight from '../media/Arrow-right.svg'
import { useState, useRef } from 'react'

function MainLogo(props){
    const [arrowAnimState, setArrowAnimState] = useState(true)
    const [menuIsActive, setMenuIsActive] = useState(false)

    return(
        <>
        <img src={arrowLeft} id={menuIsActive ? 'arrowLeft__active' : undefined} alt='logo' className='arrowLeft'></img>
        <CharacterBox id={menuIsActive ? 'characterBox-1__active' : undefined} char={props.petra}/>
        <CharacterBox id={menuIsActive ? 'characterBox-2__active' : undefined} char={props.selen}/>
        <CharacterBox id={menuIsActive ? 'characterBox-3__active' : undefined} char={props.rosemi}/>
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

export default MainLogo