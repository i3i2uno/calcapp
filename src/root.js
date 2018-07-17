import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Master from 'components/master'
import ErrorWrap from 'components/errorwrap'

class Root extends Component {
    render() {
        return (
            <ErrorWrap>
                <Master {...this.state} />
            </ErrorWrap>
        )
    }
}

ReactDom.render(<Root />, document.getElementById('applicationRoot'));