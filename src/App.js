import React, { Component } from 'react'
import TemperatureController from './component/TemperatureController'
import { store } from './component/storage/store'
import { Provider } from 'react-redux'
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <TemperatureController/>
            </Provider>
        )
    }
}
