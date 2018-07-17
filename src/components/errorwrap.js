import React, { Component } from 'react'

export default class Comp extends Component {
    constructor(props) {
        super();

        this.state = { hasError: false }
    }
    componentDidCatch(err, errInfo) {
        console.log(err)
        this.setState({ hasError: true })
    }
    render() {
        if(this.state.hasError) {

            return (
                <div>
                    <div style={{ fontSize: 20, textAlign: 'center', color: 'white', padding: 10 }}>Sorry, something broke, but we are aware and we are working hard to fix the problem. Please restart the app to continue.</div>
                </div>
            )
        }

        return <div children={this.props.children} />
    }
}