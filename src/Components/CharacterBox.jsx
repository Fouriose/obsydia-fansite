import { useEffect, useRef } from "react"

function CharacterBox(props){
    let charName = ''
    let bgImage;
    let tooltip;
    let tooltipAnimation;
    // eslint-disable-next-line default-case
    switch(props.id){
        case 'characterBox-1__active': charName = 'Petra Gurin'
            bgImage = document.querySelectorAll('.bgCharacter')[0]
            tooltip = document.querySelectorAll('.chararcterTooltip')[0]
            tooltipAnimation = 'characterBox-petra__active';
        break;
        case 'characterBox-2__active': charName = 'Selen Tatsuki'
            bgImage = document.querySelectorAll('.bgCharacter')[1]
            tooltip = document.querySelectorAll('.chararcterTooltip')[1]
            tooltipAnimation = 'characterBox-selen__active';
        break;
        case 'characterBox-3__active': charName = 'Rosemi Lovelock'
            bgImage = document.querySelectorAll('.bgCharacter')[2]
            tooltip = document.querySelectorAll('.chararcterTooltip')[2]
            tooltipAnimation = 'characterBox-rosemi__active';
        break;
    }

    return(
        <div className='characterBox' id={props.id} 
        onMouseEnter={() => {
            bgImage.classList.add('bgCharacter__active')
            tooltip.classList.add(tooltipAnimation)
        }}

        onMouseLeave={() => {
            bgImage.classList.remove('bgCharacter__active')
            tooltip.classList.remove(tooltipAnimation)
        }}>
            <div className='portraitWrapper'>
                <div className='chararcterTooltip'>
                    <h1>{charName}</h1>
                </div>
                <img src={props.char} className='characterBox-portrait' alt=''></img>
            </div>
            
        </div>
    )
}

export default CharacterBox