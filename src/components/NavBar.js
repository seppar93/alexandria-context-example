import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default class NavBar extends Component {
    static contextType = ThemeContext
    render() {
        const {isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <nav style={{background:theme.ui, color:theme.syntax}}>
            <h1>Context APP</h1>
            <ul>
                <li>Home</li>
                <li> About</li>
                <li> Contact</li>

            </ul>
        </nav>
        )
    }
}




