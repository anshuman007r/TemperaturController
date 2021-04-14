export function Boiler(props){
    const { status} = props
    let element 
    if( status ){
        element=<span>Water will boil</span>
    }else{
        element=<span>Water will not  boil</span>
    }
    return(
        <div className="boilerText">
            {element}
        </div>
    )
} 