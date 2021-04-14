import React, { Component } from 'react'
import { TemperatureModule }  from './TemperatureModule'
import { convertTemperature, boilingCheck } from '../util/AppUtil'
import { Boiler } from './Boiler'

export default class TemperatureController extends Component {
    constructor(props){
        super(props)
        this.state={
            scale:'c',
            temperature :'',
            boilingCross : false
        }
        this.handleChangeInTemperature=this.handleChangeInTemperature.bind(this)
    }

    handleChangeInTemperature=(scale, temperature)=>{
            this.setState({
                scale,
                temperature
            },()=>this.calculate())        
    }

    calculate = () =>{
        const {temperature, scale} = this.state
        this.setState({
            boilingCross : boilingCheck(scale, temperature)
        })
    }

    render() {
        const { scale, temperature, boilingCross } = this.state
        const farenhiet = scale === 'c' ? convertTemperature(scale,temperature) : temperature
        const celcius = scale === 'f' ? convertTemperature(scale,temperature) : temperature
        return (
            <div>
                <h1 className='header'> Welcome to temperature controller</h1>
                <TemperatureModule temperature={farenhiet} scale={'f'} handleChangeInTemperature={this.handleChangeInTemperature}/>
                <TemperatureModule temperature={celcius} scale={'c'} handleChangeInTemperature={this.handleChangeInTemperature}/>
                <Boiler status={boilingCross}/>
            </div>
        )
    }
}
