import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default class NavBar extends Component {
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;
        
                return (
                    <nav style={{ background: theme.ui, color: theme.syntax }}>
                    <h1>Context APP</h1>
                    <ul>
                        <li>Home</li>
                        <li> About</li>
                        <li> Contact</li>
                    </ul>
                </nav>
                )
            }}</ThemeContext.Consumer>
        )
    }
}
