import React, { Component } from 'react'
import { TemperatureModule }  from './TemperatureModule'
import {boilingCheck } from '../util/AppUtil'
import { Boiler } from './Boiler'
import { connect } from 'react-redux'

class TemperatureController extends Component {
    constructor(props){
        super(props)
        this.state={
            scale:'c',
            temperature :'',
            boilingCross : false
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            scale : nextProps.scale,
            temperature : nextProps.temperature
        },()=>this.calculate())
    }

    calculate = () =>{
        const {temperature, scale} = this.state
        this.setState({
            boilingCross : boilingCheck(scale, temperature)
        })
    }

    render() {
        const { boilingCross } = this.state
        return (
            <div>
                <h1 className='header'> Welcome to temperature controller</h1>
                <TemperatureModule scale={'f'} />
                <TemperatureModule scale={'c'}/>
                <Boiler status={boilingCross}/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        scale: state.tempReducer.scale,
        temperature: state.tempReducer.temperature,
    };
};


export default connect(mapStateToProps)(TemperatureController)