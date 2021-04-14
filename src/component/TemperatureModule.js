import { useDispatch, useSelector } from 'react-redux'
import { temperatureData } from './storage/action'
import { convertTemperature } from '../util/AppUtil'

const scaleDescription ={
    c : "Celcius",
    f : "Farienith"
}

export function TemperatureModule(props){

    const dispatch = useDispatch()
    let temperature = useSelector( state => state.tempReducer.temperature)
    let scale = useSelector( state => state.tempReducer.scale)
    
    function handleInput(e){
        const {target} = e
        dispatch(temperatureData(props.scale, target.value))
        temperature = target.value
        scale = props.value
    }
    const temperatureValue = props.scale === scale ? temperature : convertTemperature(scale, temperature)
    return(
        <div>
            <fieldset className = 'fieldSet'>
                <legend>Temperature in {scaleDescription[props.scale]}</legend>
                <input type="text" value={temperatureValue} onChange={handleInput}/>
            </fieldset>
        </div>
    )
}
