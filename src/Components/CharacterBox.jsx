function CharacterBox(props){
    let bgImage = document.querySelectorAll('.bgCharacter')[props.character.slot]
    let tooltip = document.querySelectorAll('.chararcterTooltip')[props.character.slot]
    let tooltipAnimation = `characterBox-${props.character.firstName.toLowerCase()}__active`
    
    return(
        <div className={`characterBox characterBox-${props.character.firstName.toLowerCase()}}`} id={props.state} 
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
                    <h1>{props.character.fullName}</h1>
                </div>
                <img src={props.character.image} className='characterBox-portrait' alt=''></img>
            </div>
            
        </div>
    )
}

export default CharacterBox