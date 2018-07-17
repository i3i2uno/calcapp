import React, { Component } from 'react'

export default class PValue extends Component {
    render() {
        const { currentValue, valueDisplay } = this.props;

        return (
            <div className="pValueContainer">
                <div className="currentValue">= {currentValue}</div>
                <div className="valueDisplay">{valueDisplay}</div>
            </div>
        )
    }
}