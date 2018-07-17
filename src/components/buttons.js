import React, { Component } from 'react'

export default class Buttons extends Component {
    render() {
        const { buttons, actions } = this.props;

        return (
            <div className={"buttonsContainer"}>
                {buttons.map((b, i) => {
                    return (
                        <div key={i} onClick={b.onClick ? b.onClick.bind(null, b) : actions.pressBtn.bind(null, b)} className={"btn " + (b.className || '')}>
                            {b.val}
                        </div>
                    )
                })}
            </div>
        )
    }
}