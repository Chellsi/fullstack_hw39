import React, { Component } from 'react'
import { WelcomeStateless } from './StatelessComponents'

export class ClassComponent extends Component {
    render() {
        return (
            <div>
                <WelcomeStateless name="Andii" order="second" />
            </div>
        )
    }
}
