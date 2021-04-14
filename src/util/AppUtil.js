export function convertTemperature(scale, temperature){
    let modifiedTemp = ''
    if(temperature){
        if(scale === 'f'){
            modifiedTemp = (temperature - 32 )*5/9
        }else{
            modifiedTemp = (temperature*9/5) + 32
        }
    }

    return modifiedTemp
}

export function boilingCheck( scale, temperature){
    if( scale === 'f' && temperature){
        if ( temperature >= 212){
            return true
        }
    }else if( scale === 'c' && temperature){
        if( temperature >= 100){
            return true
        }
    }
    return false
}