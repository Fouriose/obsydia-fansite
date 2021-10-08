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
        <img src={arrowLeft} id={menuIsActive ? 'arrow-left__active' : undefined} alt='logo' className='arrow-left'></img>
        <CharacterBox id={menuIsActive ? 'char-box-1__active' : undefined} char={props.petra}/>
        <CharacterBox id={menuIsActive ? 'char-box-2__active' : undefined} char={props.selen}/>
        <CharacterBox id={menuIsActive ? 'char-box-3__active' : undefined} char={props.rosemi}/>
        <img src={logo} alt='logo'
        className='main-logo'
        id={menuIsActive ? 'logo__active' : undefined} 
        onClick={(e) => {if(menuIsActive === false) {
            setMenuIsActive(true)
            e.target.classList.add('main-logo__active')
        }}}
        ></img>
        <img src={arrowRight} id={menuIsActive ? 'arrow-right__active' : undefined} alt='logo' className='arrow-right'></img>
        </>
    )
}

export default MainLogo