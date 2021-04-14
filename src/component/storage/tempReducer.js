const initialState ={
    temperature : '',
     scale : ''
}

const tempReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'TEMPERATURE_DATA':
            return {
                ...state,
                temperature : action.temperature,
                scale : action.scale,
            }
        default :
            return state
    }
}

export default tempReducer