import { useEffect, useRef } from "react"

function CharacterBox(props){
    let charName = ''
    let bgImage;
    let tooltip;
    let tooltipAnimation;
    // eslint-disable-next-line default-case
    switch(props.id){
        case 'char-box-1__active': charName = 'Petra Gurin'
            bgImage = document.querySelectorAll('.bg-char')[0]
            tooltip = document.querySelectorAll('.char-tooltip')[0]
            tooltipAnimation = 'char-box-petra__active';
        break;
        case 'char-box-2__active': charName = 'Selen Tatsuki'
            bgImage = document.querySelectorAll('.bg-char')[1]
            tooltip = document.querySelectorAll('.char-tooltip')[1]
            tooltipAnimation = 'char-box-selen__active';
        break;
        case 'char-box-3__active': charName = 'Rosemi Lovelock'
            bgImage = document.querySelectorAll('.bg-char')[2]
            tooltip = document.querySelectorAll('.char-tooltip')[2]
            tooltipAnimation = 'char-box-rosemi__active';
        break;
    }

    return(
        <div className='char-box' id={props.id} 
        onMouseEnter={() => {
            bgImage.classList.add('bg-char__active')
            tooltip.classList.add(tooltipAnimation)
        }}

        onMouseLeave={() => {
            bgImage.classList.remove('bg-char__active')
            tooltip.classList.remove(tooltipAnimation)
        }}>
            <div className='portrait-wrapper'>
                <div className='char-tooltip'>
                    <h1>{charName}</h1>
                </div>
                <img src={props.char} className='char-box-portrait' alt=''></img>
            </div>
            
        </div>
    )
}

export default CharacterBox