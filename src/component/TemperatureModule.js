const scaleDescription ={
    c : "Celcius",
    f : "Farienith"
}

export function TemperatureModule(props){
    
    function handleInput(e){
        const {target} = e
        props.handleChangeInTemperature(props.scale, target.value)
    }

    return(
        <div>
            <fieldset className = 'fieldSet'>
                <legend>Temperature in {scaleDescription[props.scale]}</legend>
                <input type="text" value={props.temperature} onChange={handleInput}/>
            </fieldset>
        </div>
    )
}


